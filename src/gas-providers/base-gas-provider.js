import axios from 'axios';
import { normalize } from "../utils.js";
import { GAS_SPEEDS } from './speeds.js';


class BaseGasProvider {
	constructor(source, url){
		this.source = source;
		this.url = url;
	}
	
	async normalizeSpeed(speed){
		var normalizedSpeed = this.SPEED_MAPPING[normalize(speed)];
		if(normalizedSpeed == null){
			//default to Standard
			normalizedSpeed = this.SPEED_MAPPING[GAS_SPEEDS.STANDARD];
		}
		return normalizedSpeed;
	}

	async getHyperspeed(){
		return await this.getGasPrice(GAS_SPEEDS.HYPERSPEED);
	}

	async getFast(){
		return await this.getGasPrice(GAS_SPEEDS.FAST);
	}

	async getStandard(){
		return await this.getGasPrice(GAS_SPEEDS.STANDARD);
	}

	async getSlow(){
		return await this.getGasPrice(GAS_SPEEDS.SAFELOW);
	}
	
	async getGasPrice(speed){
		var speed = await this.normalizeSpeed(speed);
		var response = await this.queryProviderUrl();
		var gas = await this.parseResponse(response, speed);
		return gas;
	}
	
	async queryProviderUrl(){
		var response = await axios.get(this.url);
		return response.data;
	}
}
const _BaseGasProvider = BaseGasProvider;
export { _BaseGasProvider as BaseGasProvider };

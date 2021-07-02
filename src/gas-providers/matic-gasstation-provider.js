import {BaseGasProvider}  from "./base-gas-provider.js"; 

const SOURCE = "MATICGASSTATION";
const PROVIDER_END_POINT = "https://gasstation-mainnet.matic.network/";

class MaticGasStationProvider extends BaseGasProvider {
	
    SPEED_MAPPING = {'hyperspeed': 'fastest',
					'fast' : 'fast',
					'standard': 'standard',
					'safelow': 'safeLow'};

	constructor(key=null){
		super(SOURCE, PROVIDER_END_POINT);
	}
	
	async parseResponse(resp, speed){
		return resp[speed];
	}
}

const _MaticGasStationProvider = MaticGasStationProvider;
export { _MaticGasStationProvider as MaticGasStationProvider };
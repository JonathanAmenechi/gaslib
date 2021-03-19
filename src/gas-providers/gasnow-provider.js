import {BaseGasProvider}  from "./base-gas-provider.js"; 
import {GAS_SPEEDS} from "./speeds.js";
import {normalize} from "../utils.js";

const SOURCE = "GASNOW";
const PROVIDER_END_POINT = 'https://www.gasnow.org/api/v3/gas/price';


//Gasnow Provider impl
class GasnowProvider extends BaseGasProvider {
	
    SPEED_MAPPING = {'hyperspeed': 'rapid',
					'fast' : 'fast',
					'standard': 'standard',
					'safelow': 'slow'};

	constructor(key=null){
		super(SOURCE, PROVIDER_END_POINT);
	}
	
	async parseResponse(resp, speed){
		return resp['data'][speed];
	}
}

const _GasnowProvider = GasnowProvider;
export { _GasnowProvider as GasnowProvider };

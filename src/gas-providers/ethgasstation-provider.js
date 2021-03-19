import {BaseGasProvider}  from "./base-gas-provider.js"; 
import {GAS_SPEEDS} from "./speeds.js";

const SOURCE = "ETHGASSTATION";
const PROVIDER_END_POINT = 'https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=';


//ETH GasstationProvider Provider impl
class GasstationProvider extends BaseGasProvider {
	SPEED_MAPPING = {'hyperspeed': 'fastest',
					'fast'      : 'fast',
					'standard'  : 'average',
					'safelow'   : 'safeLow'};
	
	constructor(key){
		super(SOURCE,PROVIDER_END_POINT+ key);
	}
		
	async parseResponse(resp, speed){
		//eth gas station returns gas truncated, normalizing to gwei
		return resp[speed] * 100000000;
	}
}

const _GasstationProvider = GasstationProvider;
export { _GasstationProvider as GasstationProvider };

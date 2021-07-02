import { normalize } from "./utils.js"; 
import { GAS_PROVIDERS } from "./gas-providers/providers.js"


export class GasLib {

    static async getGasPrice(source, speed, apiKey=null){
        const provider = await this.getGasProvider(source, apiKey);
        if(provider != null){
            return await provider.getGasPrice(speed);
        }
    }
    
    static async getGasProvider(source, apiKey=null){
        var normalized = normalize(source);
        if(GAS_PROVIDERS[normalized] != null) {
            return await new GAS_PROVIDERS[normalized](apiKey);
        }
    }
}

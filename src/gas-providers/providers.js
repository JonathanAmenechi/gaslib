import {GasnowProvider} from "./gasnow-provider.js";
import {GasstationProvider} from "./ethgasstation-provider.js";


//TODO: Add more providers

export const GAS_PROVIDERS = {
    "etherscan": null, //TODO
    "gasnow": GasnowProvider,
    "ethgasstation": GasstationProvider
}

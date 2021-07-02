import { GasnowProvider } from "./gasnow-provider.js";
import { GasstationProvider } from "./ethgasstation-provider.js";
import { MaticGasStationProvider } from "./matic-gasstation-provider";


export const GAS_PROVIDERS = {
    "gasnow": GasnowProvider,
    "ethgasstation": GasstationProvider,
    "maticgasstation": MaticGasStationProvider,
}

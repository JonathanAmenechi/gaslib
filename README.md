# gaslib
lightweight lib for pulling gas prices from various providers. 

## Usage

```
import { GasLib } from "./gaslib/index.js";

const provider = await GasLib.getProvider("gasnow"); //initialize a gas provider

await provider.getGasPrice("fast"); //pull gas prices from the provider
await provider.getStandard();

Gaslib.getGasPrice("ethgasstation", "safelow", apiKey=xxxx);
```
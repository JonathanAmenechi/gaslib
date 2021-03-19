# gaslib
lightweight lib for pulling gas prices from various providers

## Usage

`import {GasLib} from "gaslib";`

`//initialize the provider`

`const provider = await GasLib.getProvider("gasnow");`

`await provider.getGasPrice("fast");`

`await provider.getStandard();`

`Gaslib.getGasPrice("ethgasstation", "safelow", apiKey=xxxx);`
# gaslib
lightweight lib for pulling gas prices from various providers

## Usage

`import {GasLib} from "gaslib";

const provider = await GasLib.getProvider("gasnow");

var fast = await provider.getFast();
var standard = await provider.getStandard();

Gaslib.getGasPrice("ethgasstation", "safelow", apiKey=xxxx);
`
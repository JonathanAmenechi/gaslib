// import {getGasPrice, getGasProvider} from "../index.js";
import {GasLib} from "../index.js";

async function main(){
    var provider = await GasLib.getGasProvider("gasnow");
    console.log(await GasLib.getGasPrice("gasnow", "hyperspeed"));
    console.log(await provider.getSlow());
}

main();
import { IncrementContract } from "./output/increment_IncrementContract";
import { ContractSystem } from "ton-emulator";
import { toNano } from "ton-core";
import { inspect } from "util";

describe('increment', () => {
    it('should deploy', async () => {

        // Create wallet
        let system = await ContractSystem.create();
        let treasure = system.treasure('treasure');
        let contract = system.open(await IncrementContract.fromInit());

        // Send internal message
        await contract.send(treasure, { value: toNano('10') }, { $$type: 'Increment', key: 0n, value: -1232n });
        let res = await system.run();
        console.warn(inspect(res, false, 1000));

        // let res = await executor.get('counters');
        // let dict = parseDict(res.stack.readCell().beginParse(), 257, (sc) => sc.readInt(257).toString(10));
        // // console.warn(dict);

        // let res2 = await executor.get('counters2');
        // let dict2 = parseDict(res2.stack.readCell().beginParse(), 267, (sc) => sc.readInt(257).toString(10));
        // // console.warn(dict2);
        // // new BN(Array.from(dict.keys())[0]).toString('hex');
    });
});
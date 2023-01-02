import { Cell, Slice, Address, Builder, beginCell, ComputeError, TupleItem, TupleReader, Dictionary, contractAddress, ContractProvider, Sender } from 'ton-core';
import { ContractSystem, ContractExecutor } from 'ton-emulator';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeRef(src.code);
        b_0 = b_0.storeRef(src.data);
    };
}

export function packStackStateInit(src: StateInit, __stack: TupleItem[]) {
    __stack.push({ type: 'cell', cell: src.code });
    __stack.push({ type: 'cell', cell: src.data });
}

export function packTupleStateInit(src: StateInit): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'cell', cell: src.code });
    __stack.push({ type: 'cell', cell: src.data });
    return __stack;
}

export function unpackStackStateInit(slice: TupleReader): StateInit {
    const code = slice.readCell();
    const data = slice.readCell();
    return { $$type: 'StateInit', code: code, data: data };
}
export function unpackTupleStateInit(slice: TupleReader): StateInit {
    const code = slice.readCell();
    const data = slice.readCell();
    return { $$type: 'StateInit', code: code, data: data };
}
export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeBit(src.bounced);
        b_0 = b_0.storeAddress(src.sender);
        b_0 = b_0.storeInt(src.value, 257);
        b_0 = b_0.storeRef(src.raw);
    };
}

export function packStackContext(src: Context, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.bounced ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.sender).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'slice', cell: src.raw });
}

export function packTupleContext(src: Context): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.bounced ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.sender).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'slice', cell: src.raw });
    return __stack;
}

export function unpackStackContext(slice: TupleReader): Context {
    const bounced = slice.readBoolean();
    const sender = slice.readAddress();
    const value = slice.readBigNumber();
    const raw = slice.readCell();
    return { $$type: 'Context', bounced: bounced, sender: sender, value: value, raw: raw };
}
export function unpackTupleContext(slice: TupleReader): Context {
    const bounced = slice.readBoolean();
    const sender = slice.readAddress();
    const value = slice.readBigNumber();
    const raw = slice.readCell();
    return { $$type: 'Context', bounced: bounced, sender: sender, value: value, raw: raw };
}
export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeBit(src.bounce);
        b_0 = b_0.storeAddress(src.to);
        b_0 = b_0.storeInt(src.value, 257);
        b_0 = b_0.storeInt(src.mode, 257);
        if (src.body !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.body);
        } else {
            b_0 = b_0.storeBit(false);
        }
        if (src.code !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.code);
        } else {
            b_0 = b_0.storeBit(false);
        }
        if (src.data !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.data);
        } else {
            b_0 = b_0.storeBit(false);
        }
    };
}

export function packStackSendParameters(src: SendParameters, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.bounce ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.to).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'int', value: src.mode });
    if (src.body !== null) {
        __stack.push({ type: 'cell', cell: src.body });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.code !== null) {
        __stack.push({ type: 'cell', cell: src.code });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.data !== null) {
        __stack.push({ type: 'cell', cell: src.data });
    } else {
        __stack.push({ type: 'null' });
    }
}

export function packTupleSendParameters(src: SendParameters): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.bounce ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.to).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'int', value: src.mode });
    if (src.body !== null) {
        __stack.push({ type: 'cell', cell: src.body });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.code !== null) {
        __stack.push({ type: 'cell', cell: src.code });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.data !== null) {
        __stack.push({ type: 'cell', cell: src.data });
    } else {
        __stack.push({ type: 'null' });
    }
    return __stack;
}

export function unpackStackSendParameters(slice: TupleReader): SendParameters {
    const bounce = slice.readBoolean();
    const to = slice.readAddress();
    const value = slice.readBigNumber();
    const mode = slice.readBigNumber();
    const body = slice.readCellOpt();
    const code = slice.readCellOpt();
    const data = slice.readCellOpt();
    return { $$type: 'SendParameters', bounce: bounce, to: to, value: value, mode: mode, body: body, code: code, data: data };
}
export function unpackTupleSendParameters(slice: TupleReader): SendParameters {
    const bounce = slice.readBoolean();
    const to = slice.readAddress();
    const value = slice.readBigNumber();
    const mode = slice.readBigNumber();
    const body = slice.readCellOpt();
    const code = slice.readCellOpt();
    const data = slice.readCellOpt();
    return { $$type: 'SendParameters', bounce: bounce, to: to, value: value, mode: mode, body: body, code: code, data: data };
}
export type Transfer = {
    $$type: 'Transfer';
    seqno: bigint;
    mode: bigint;
    to: Address;
    amount: bigint;
    body: Cell | null;
}

export function storeTransfer(src: Transfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(src.seqno, 32);
        b_0 = b_0.storeUint(src.mode, 8);
        b_0 = b_0.storeAddress(src.to);
        b_0 = b_0.storeCoins(src.amount);
        if (src.body !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.body);
        } else {
            b_0 = b_0.storeBit(false);
        }
    };
}

export function packStackTransfer(src: Transfer, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.seqno });
    __stack.push({ type: 'int', value: src.mode });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.to).endCell() });
    __stack.push({ type: 'int', value: src.amount });
    if (src.body !== null) {
        __stack.push({ type: 'cell', cell: src.body });
    } else {
        __stack.push({ type: 'null' });
    }
}

export function packTupleTransfer(src: Transfer): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.seqno });
    __stack.push({ type: 'int', value: src.mode });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.to).endCell() });
    __stack.push({ type: 'int', value: src.amount });
    if (src.body !== null) {
        __stack.push({ type: 'cell', cell: src.body });
    } else {
        __stack.push({ type: 'null' });
    }
    return __stack;
}

export function unpackStackTransfer(slice: TupleReader): Transfer {
    const seqno = slice.readBigNumber();
    const mode = slice.readBigNumber();
    const to = slice.readAddress();
    const amount = slice.readBigNumber();
    const body = slice.readCellOpt();
    return { $$type: 'Transfer', seqno: seqno, mode: mode, to: to, amount: amount, body: body };
}
export function unpackTupleTransfer(slice: TupleReader): Transfer {
    const seqno = slice.readBigNumber();
    const mode = slice.readBigNumber();
    const to = slice.readAddress();
    const amount = slice.readBigNumber();
    const body = slice.readCellOpt();
    return { $$type: 'Transfer', seqno: seqno, mode: mode, to: to, amount: amount, body: body };
}
export type TransferMessage = {
    $$type: 'TransferMessage';
    signature: Cell;
    transfer: Transfer;
}

export function storeTransferMessage(src: TransferMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(123, 32);
        b_0 = b_0.storeRef(src.signature);
        b_0 = b_0.store(storeTransfer(src.transfer));
    };
}

export function packStackTransferMessage(src: TransferMessage, __stack: TupleItem[]) {
    __stack.push({ type: 'slice', cell: src.signature });
    packStackTransfer(src.transfer, __stack);
}

export function packTupleTransferMessage(src: TransferMessage): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'slice', cell: src.signature });
    __stack.push({ type: 'tuple', items: packTupleTransfer(src.transfer) });
    return __stack;
}

export function unpackStackTransferMessage(slice: TupleReader): TransferMessage {
    const signature = slice.readCell();
    const transfer = unpackStackTransfer(slice);
    return { $$type: 'TransferMessage', signature: signature, transfer: transfer };
}
export function unpackTupleTransferMessage(slice: TupleReader): TransferMessage {
    const signature = slice.readCell();
    const transfer = unpackTupleTransfer(slice);
    return { $$type: 'TransferMessage', signature: signature, transfer: transfer };
}
async function Wallet_init(key: bigint, walletId: bigint) {
    const __code = 'te6ccgECLQEABBIAART/APSkE/S88sgLAQIBYgIDAgLLBAUCASAlJgIBzgYHAgEgDg8E9Tt+3Ah10nCH5UwINcLH94C0NMDAXGwwAGRf5Fw4gH6QCJQZm8E+GECjigw7UTQ1AH4YtMf0//TP1UgbBNVAvAeyPhCAcxVIFAjyx/L/8s/ye1U4CDAe+MCIMAAItdJwSGw4wLAAOMA7UTQ1AH4YtMf0//TP1UgbBNVAoAgJCgsACwgbvLQgIACiMO1E0NQB+GLTH9P/0z9VIGwTA9MfAcB78uCB1AHQAdMf0wf6QAEB+gBtAdIAAZIx1N5VQBBWNhB4EGdVBPAYyPhCAcxVIFAjyx/L/8s/ye1UAExb7UTQ1AH4YtMf0//TP1UgbBPwGsj4QgHMVSBQI8sfy//LP8ntVALwIPkBIILwDiNXJhCLVwDQNp3XFn9q/7gGp+BAWTdd0OD7JJcecrK6jihb7UTQ1AH4YtMf0//TP1UgbBPwG8j4QgHMVSBQI8sfy//LP8ntVNsx4CCC8Gcn1pdl+PIsdcWB41ZUQ5f1oAu5G9MsTQ2W1MkmhLzCuuMCDA0AKPAZyPhCAcxVIFAjyx/L/8s/ye1UAFBb7UTQ1AH4YtMf0//TP1UgbBPwHMj4QgHMVSBQI8sfy//LP8ntVNsxAJyC8Jyg8YVRdOMuj9N431am5PbEDk38tgkOSYEvex4mIUv5uo4oMO1E0NQB+GLTH9P/0z9VIGwT8B3I+EIBzFUgUCPLH8v/yz/J7VTbMeACASAQEQIBIBscAgEgEhMCASAXGAAVWUfwHKAOBwAcoAgCASAUFQH3MhxAcoBUAfwEXABygJQBc8WUAP6AnABymgjbrMlbrOxjj1/8BHIcPARcPARJG6zmX/wEQTwAVAEzJU0A3DwEeIkbrOZf/ARBPABUATMlTQDcPAR4nDwEQJ/8BECyVjMljMzAXDwEeIhbrOYf/ARAfABAcyUMXDwEeLJAYBYAHxwA8jMVSBQI8sfy//LP8mAABPsAAAVTAxgCASAZGgAFGwhgAAMW4AIBIB0eAgEgISICASAfIAIBICMjAIsVHQyU0PIVUBQRcsfEssHAc8WAfoCIW6UcDLKAJV/AcoAzOLJ+QCCAL0RUXn5EBby9IFE9lFIuhTy9Aakf1B0QzBtbfASgABsMPhBbyRfA7OTAqQC3oAIBICMkAANDCAAZPhBbyRfA7OTAqQC3oAABIAIBICcoAgEgKywACbuhPwE4AgFIKSoAK7Ml+1E0NQB+GLTH9P/0z9VIGwT8BeAAK7B+O1E0NQB+GLTH9P/0z9VIGwT8BWAATbu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmAAruASu1E0NQB+GLTH9P/0z9VIGwT8BaA==';
    const depends = Dictionary.empty(Dictionary.Keys.Uint(16), Dictionary.Values.Cell());
    depends.set(14718, Cell.fromBoc(Buffer.from('te6ccgECLQEABBIAART/APSkE/S88sgLAQIBYgIDAgLLBAUCASAlJgIBzgYHAgEgDg8E9Tt+3Ah10nCH5UwINcLH94C0NMDAXGwwAGRf5Fw4gH6QCJQZm8E+GECjigw7UTQ1AH4YtMf0//TP1UgbBNVAvAeyPhCAcxVIFAjyx/L/8s/ye1U4CDAe+MCIMAAItdJwSGw4wLAAOMA7UTQ1AH4YtMf0//TP1UgbBNVAoAgJCgsACwgbvLQgIACiMO1E0NQB+GLTH9P/0z9VIGwTA9MfAcB78uCB1AHQAdMf0wf6QAEB+gBtAdIAAZIx1N5VQBBWNhB4EGdVBPAYyPhCAcxVIFAjyx/L/8s/ye1UAExb7UTQ1AH4YtMf0//TP1UgbBPwGsj4QgHMVSBQI8sfy//LP8ntVALwIPkBIILwDiNXJhCLVwDQNp3XFn9q/7gGp+BAWTdd0OD7JJcecrK6jihb7UTQ1AH4YtMf0//TP1UgbBPwG8j4QgHMVSBQI8sfy//LP8ntVNsx4CCC8Gcn1pdl+PIsdcWB41ZUQ5f1oAu5G9MsTQ2W1MkmhLzCuuMCDA0AKPAZyPhCAcxVIFAjyx/L/8s/ye1UAFBb7UTQ1AH4YtMf0//TP1UgbBPwHMj4QgHMVSBQI8sfy//LP8ntVNsxAJyC8Jyg8YVRdOMuj9N431am5PbEDk38tgkOSYEvex4mIUv5uo4oMO1E0NQB+GLTH9P/0z9VIGwT8B3I+EIBzFUgUCPLH8v/yz/J7VTbMeACASAQEQIBIBscAgEgEhMCASAXGAAVWUfwHKAOBwAcoAgCASAUFQH3MhxAcoBUAfwEXABygJQBc8WUAP6AnABymgjbrMlbrOxjj1/8BHIcPARcPARJG6zmX/wEQTwAVAEzJU0A3DwEeIkbrOZf/ARBPABUATMlTQDcPAR4nDwEQJ/8BECyVjMljMzAXDwEeIhbrOYf/ARAfABAcyUMXDwEeLJAYBYAHxwA8jMVSBQI8sfy//LP8mAABPsAAAVTAxgCASAZGgAFGwhgAAMW4AIBIB0eAgEgISICASAfIAIBICMjAIsVHQyU0PIVUBQRcsfEssHAc8WAfoCIW6UcDLKAJV/AcoAzOLJ+QCCAL0RUXn5EBby9IFE9lFIuhTy9Aakf1B0QzBtbfASgABsMPhBbyRfA7OTAqQC3oAIBICMkAANDCAAZPhBbyRfA7OTAqQC3oAABIAIBICcoAgEgKywACbuhPwE4AgFIKSoAK7Ml+1E0NQB+GLTH9P/0z9VIGwT8BeAAK7B+O1E0NQB+GLTH9P/0z9VIGwT8BWAATbu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmAAruASu1E0NQB+GLTH9P/0z9VIGwT8BaA==', 'base64'))[0]);
    let systemCell = beginCell().storeDict(depends).endCell();
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'cell', cell: systemCell });
    __stack.push({ type: 'int', value: key });
    __stack.push({ type: 'int', value: walletId });
    let codeCell = Cell.fromBoc(Buffer.from(__code, 'base64'))[0];
    let system = await ContractSystem.create();
    let executor = await ContractExecutor.create({ code: codeCell, data: new Cell() }, system);
    let res = await executor.get('init_Wallet', __stack);
    if (!res.success) { throw Error(res.error); }
    let data = res.stack.readCell();
    return { code: codeCell, data };
}

export const Wallet_errors: { [key: string]: string } = {
    '2': `Stack undeflow`,
    '3': `Stack overflow`,
    '4': `Integer overflow`,
    '5': `Integer out of expected range`,
    '6': `Invalid opcode`,
    '7': `Type check error`,
    '8': `Cell overflow`,
    '9': `Cell underflow`,
    '10': `Dictionary error`,
    '13': `Out of gas error`,
    '32': `Method ID not found`,
    '34': `Action is invalid or not supported`,
    '37': `Not enough TON`,
    '38': `Not enough extra-currencies`,
    '128': `Null reference exception`,
    '129': `Invalid serialization prefix`,
    '130': `Invalid incoming message`,
    '131': `Constraints error`,
    '132': `Access denied`,
    '133': `Contract stopped`,
    '134': `Invalid argument`,
    '17654': `Invalid seqno`,
    '48401': `Invalid signature`,
}

export class Wallet {
    
    static async init(key: bigint, walletId: bigint) {
        return await Wallet_init(key,walletId);
    }
    
    static async fromInit(key: bigint, walletId: bigint) {
        const init = await Wallet_init(key,walletId);
        const address = contractAddress(0, init);
        return new Wallet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Wallet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TransferMessage | Slice | null | 'notify' | 'слава україни' | 'duplicate') {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TransferMessage') {
            body = beginCell().store(storeTransferMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && message instanceof Slice) {
            body = message.asCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message === 'notify') {
            body = beginCell().storeUint(0, 32).storeBuffer(Buffer.from(message)).endCell();
        }
        if (message === 'слава україни') {
            body = beginCell().storeUint(0, 32).storeBuffer(Buffer.from(message)).endCell();
        }
        if (message === 'duplicate') {
            body = beginCell().storeUint(0, 32).storeBuffer(Buffer.from(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getPublicKey(provider: ContractProvider) {
        try {
            let __stack: TupleItem[] = [];
            let result = await provider.get('publicKey', __stack);
            return result.stack.readBigNumber();
        } catch (e) {
            if (e instanceof ComputeError) {
                if (e.debugLogs && e.debugLogs.length > 0) { console.warn(e.debugLogs); }
                if (Wallet_errors[e.exitCode.toString()]) {
                    throw new Error(Wallet_errors[e.exitCode.toString()]);
                }
            }
            throw e;
        }
    }
    
    async getWalletId(provider: ContractProvider) {
        try {
            let __stack: TupleItem[] = [];
            let result = await provider.get('walletId', __stack);
            return result.stack.readBigNumber();
        } catch (e) {
            if (e instanceof ComputeError) {
                if (e.debugLogs && e.debugLogs.length > 0) { console.warn(e.debugLogs); }
                if (Wallet_errors[e.exitCode.toString()]) {
                    throw new Error(Wallet_errors[e.exitCode.toString()]);
                }
            }
            throw e;
        }
    }
    
    async getSeqno(provider: ContractProvider) {
        try {
            let __stack: TupleItem[] = [];
            let result = await provider.get('seqno', __stack);
            return result.stack.readBigNumber();
        } catch (e) {
            if (e instanceof ComputeError) {
                if (e.debugLogs && e.debugLogs.length > 0) { console.warn(e.debugLogs); }
                if (Wallet_errors[e.exitCode.toString()]) {
                    throw new Error(Wallet_errors[e.exitCode.toString()]);
                }
            }
            throw e;
        }
    }
    
}
import { ASTFunction, ASTNativeFunction } from "../ast/ast";

export type TypeDescription = {
    kind: 'struct' | 'primitive' | 'contract';
    name: string;
    fields: FieldDescription[];
    functions: FunctionDescription[];
}

export type FieldDescription = {
    name: string,
    index: number,
    type: TypeDescription
}

export type FunctionArgument = {
    name: string,
    type: TypeDescription
}

export type FunctionDescription = {
    name: string,
    isPublic: boolean,
    isGetter: boolean,
    self: TypeDescription | null,
    returns: TypeDescription | null,
    args: FunctionArgument[],
    ast: ASTFunction | ASTNativeFunction
}
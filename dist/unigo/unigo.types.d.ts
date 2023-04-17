export interface VectorInterface {
    ns: NsType;
    registry: string[];
    terms: {
        [go: string]: TermsInterface;
    };
}
export interface TermsInterface {
    elements: number[];
    freq: number;
    name: string;
}
export interface GOTermInterface {
    go: string;
    elements?: number[];
    freq?: number;
    name?: string;
    ns: string;
}
export interface TrimmedVectorResult {
    go: string;
    prots: string[];
    freq: number;
    name: string;
    ns: NsType;
}
export declare type NsType = "biological process" | "molecular function" | "cellular component";

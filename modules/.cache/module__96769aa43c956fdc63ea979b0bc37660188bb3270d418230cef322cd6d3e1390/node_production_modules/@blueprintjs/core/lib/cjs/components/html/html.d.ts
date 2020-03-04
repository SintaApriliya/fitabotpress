import * as React from "react";
export interface IElementRefProps<E extends HTMLElement> {
    /** Ref handler to access the instance of the internal HTML element. */
    elementRef?: (ref: E | null) => void;
}
export declare const H1: React.FunctionComponent<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H2: React.FunctionComponent<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H3: React.FunctionComponent<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H4: React.FunctionComponent<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H5: React.FunctionComponent<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H6: React.FunctionComponent<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const Blockquote: React.FunctionComponent<React.HTMLProps<HTMLElement> & IElementRefProps<HTMLElement>>;
export declare const Code: React.FunctionComponent<React.HTMLProps<HTMLElement> & IElementRefProps<HTMLElement>>;
export declare const Pre: React.FunctionComponent<React.HTMLProps<HTMLElement> & IElementRefProps<HTMLElement>>;
export declare const Label: React.FunctionComponent<React.HTMLProps<HTMLLabelElement> & IElementRefProps<HTMLLabelElement>>;
export declare const OL: React.FunctionComponent<React.HTMLProps<HTMLOListElement> & IElementRefProps<HTMLOListElement>>;
export declare const UL: React.FunctionComponent<React.HTMLProps<HTMLUListElement> & IElementRefProps<HTMLUListElement>>;

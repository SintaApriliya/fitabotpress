import { Editor, Element } from '../..';
declare class NodeQueries {
    /**
     * Check if a node has block children.
     */
    hasBlocks(this: Editor, element: Element): boolean;
    /**
     * Check if a node has inline children.
     */
    hasInlines(this: Editor, element: Element): boolean;
    /**
     * Check if a node is an inline, meaning that it lives intermixed with text
     * nodes in the document tree.
     */
    isInline(this: Editor, element: Element): boolean;
    /**
     * Check if a node is a void, meaning that Slate considers its content a black
     * box. It will be edited as if it has no content.
     */
    isVoid(this: Editor, element: Element): boolean;
}
export default NodeQueries;
//# sourceMappingURL=node.d.ts.map
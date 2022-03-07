declare const _default: {
    hooks: {
        useDtrumEndSession: () => void;
        useDtrumListener: () => void;
        useDtrumOnMount: (name: string) => void;
    };
    tools: {
        dtrumEndSession: () => void;
        dtrumEnterActionListener: import("@dynatrace/dtrum-api-types").ActionEnterListener;
        sendDtrumAction: (actionName: string, callback?: (() => void) | undefined) => void;
    };
    utils: {
        recursiveAttrSearch: (obj: HTMLElement, attrName?: string) => string | null;
    };
};
export default _default;

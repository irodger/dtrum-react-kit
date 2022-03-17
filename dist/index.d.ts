declare const _default: {
    hooks: {
        useDtrumEndSession: (eventType?: string) => void;
        useDtrumListener: (listener?: import("@dynatrace/dtrum-api-types").ActionEnterListener) => void;
        useDtrumOnMount: (name: string) => void;
    };
    tools: {
        dtrumEndSession: () => void;
        sendDtrumAction: (actionName: string, callback?: (() => void) | undefined) => void;
    };
    listeners: {
        enterActionListener: import("@dynatrace/dtrum-api-types").ActionEnterListener;
        actionToGlobalListener: import("@dynatrace/dtrum-api-types").ActionEnterListener;
    };
    utils: {
        recursiveAttrSearch: (obj: HTMLElement, attrName?: string) => string | null;
    };
};
export default _default;

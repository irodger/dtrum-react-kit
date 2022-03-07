/** The recursive solution to find the closest HTML-attribute from deep
 *
 * @param { Object } obj - DOM Node Element called to find the closest attribute value
 * @param { String } attrName - Attribute name to called, data-test-id by default
 *
 * @return { String | null } result - Attribute value or null
 * */
export declare const recursiveAttrSearch: (obj: HTMLElement, attrName?: string) => string | null;

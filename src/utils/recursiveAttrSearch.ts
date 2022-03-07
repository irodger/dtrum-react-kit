/** The recursive solution to find the closest HTML-attribute from deep
 *
 * @param { Object } obj - DOM Node Element called to find the closest attribute value
 * @param { String } attrName - Attribute name to called, data-test-id by default
 *
 * @return { String | null } result - Attribute value or null
 * */
export const recursiveAttrSearch = (obj: HTMLElement, attrName = 'data-test-id'): string | null => {
  if (!(obj instanceof Element)) return null;

  const result = obj.getAttribute(attrName);
  const parent = obj.parentNode;

  if (!result && parent) {
    return recursiveAttrSearch(parent as HTMLElement, attrName);
  }

  return result;
};

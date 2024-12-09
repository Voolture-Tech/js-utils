/**
 * usPostalCode__regexp will match any US postal code.
 * @example usPostalCode__regexp.test('12345') // true
 * @example usPostalCode__regexp.test('12345-1234') // true
 * @example usPostalCode__regexp.test('1234') // false
 */
export const usPostalCode__regexp = /^\d{5}(-\d{4})?$/

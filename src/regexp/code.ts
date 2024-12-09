/**
 * hex__regexp will match any hex string
 * @example hex__regexp.test('123456') -> true
 * @example hex__regexp.test('abcdef') -> true
 * @example hex__regexp.test('ABCDEF') -> true
 * @example hex__regexp.test('9op8iu7') -> false
 */
export const hex__regexp = /^[0-9A-Fa-f]+$/

/**
 * uuid__regexp will match any uuid string
 * @example uuid__regexp.test('550e8400-e29b-41d4-a716-446655440000') -> true
 * @example uuid__regexp.test('550e8400-e29b-41d4-a716-44665544000') -> false
 */
export const uuid__regexp =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/

/**
 * htmlTag__regexp will match any html tag string
 * @example htmlTag__regexp.test('<div>') -> true
 * @example htmlTag__regexp.test('<div></div>') -> true
 * @example htmlTag__regexp.test('<div class="test"></div>') -> true
 * @example htmlTag__regexp.test('string test') -> false
 * @example htmlTag__regexp.test('') -> false
 */
export const htmlTag__regexp = /<("[^"]*"|'[^']*'|[^'">])*>/

/**
 * base64__regexp will match any base64 string
 * @example base64__regexp.test('dGVzdA==') -> true
 * @example base64__regexp.test('dGVzdA') -> false
 */
export const base64__regexp = /[^A-Za-z0-9+/=]/

/**
 * hexColors__regexp will match any hex color string
 * @example hexColors__regexp.test('#123456') -> true
 * @example hexColors__regexp.test('#abcdef') -> true
 * @example hexColors__regexp.test('#ABCDEF') -> true
 * @example hexColors__regexp.test('#9op8iu7') -> false
 */
export const hexColors__regexp = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/

/**
 * rgbColors__regexp will match any rgb color string
 * @example rgbColors__regexp.test('rgb(255, 255, 255)') -> true
 * @example rgbColors__regexp.test('rgb(0, 0, 0)') -> true
 * @example rgbColors__regexp.test('rgb(255, 255, 255, 255)') -> false
 */
export const rgbColors__regexp = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/

/**
 * hslColors__regexp will match any hsl color string
 * @example hslColors__regexp.test('hsl(360, 100%, 100%)') -> true
 * @example hslColors__regexp.test('hsl(0, 0%, 0%)') -> true
 * @example hslColors__regexp.test('hsl(360, 100%, 100%, 100%)') -> false
 */
export const hslColors__regexp = /^hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)$/

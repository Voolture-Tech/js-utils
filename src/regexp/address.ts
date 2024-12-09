/**
 * url__regexp to validate URL
 * @example url__regexp.test('https://www.google.com') => true
 * @example url__regexp.test('http://www.google.com') => true
 * @example url__regexp.test('www.google.com') => true
 * @example url__regexp.test('google.com') => true
 * @example url__regexp.test('google') => false
 */
export const url__regexp =
  /^((https|http)?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/

/**
 * urlParams__regexp to validate URL params
 * @example urlParams__regexp.test('?name=John') => true
 * @example urlParams__regexp.test('&name=John') => true
 * @example urlParams__regexp.test('?name=John&age=30') => true
 * @example urlParams__regexp.test('&name=John&age=30') => true
 * @example urlParams__regexp.test('?name=John&age=30&') => false
 */
export const urlParams__regexp = /[?&]([^=&]+)=([^&]*)/

/**
 * ipv4__regexp to validate IPv4
 * @example ipv4__regexp.test('1.1.1.1') => true
 * @example ipv4__regexp.test('192.168.0.1') => true
 * @example ipv4__regexp.test('256.256.256.256') => false
 */
export const ipv4__regexp =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

/**
 * ipv6__regexp to validate IPv6
 * @example ipv6__regexp.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334') => true
 * @example ipv6__regexp.test('2001:0db8:85a3::8a2e:0370:7334') => true
 * @example ipv6__regexp.test('2001:0db8:85a3:0:0:8a2e:0370:7334') => true
 * @example ipv6__regexp.test('2001:0db8:85a3::8a2e:0370:7334:') => false
 */
export const ipv6__regexp = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$/

/**
 * mac__regexp to validate MAC address
 * @example mac__regexp.test('01:23:45:67:89:ab') => true
 * @example mac__regexp.test('01-23-45-67-89-ab') => true
 * @example mac__regexp.test('01:23:45:67:89:ab:') => false
 */
export const mac__regexp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

/**
 * windowsFilePath__regexp to validate Windows file path
 * @example windowsFilePath__regexp.test('C:\\Program Files\\Microsoft') => true
 * @example windowsFilePath__regexp.test('C:\\Program Files\\Microsoft\\') => false
 */
export const windowsFilePath__regexp =
  /^([a-zA-Z]:\\)?([^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/

/**
 * unixFilePath__regexp to validate Unix file path
 * @example unixFilePath__regexp.test('/home/user') => true
 * @example unixFilePath__regexp.test('/home/user/') => false
 */
export const unixFilePath__regexp = /^\/([^/]+\/)*[^/]*$/

/**
 * domain__regexp to validate domain
 * @example domain__regexp.test('google.com') => true
 * @example domain__regexp.test('www.google.com') => true
 * @example domain__regexp.test('www.google.com.vn') => true
 * @example domain__regexp.test('www.google.com.vn.') => false
 * @example domain__regexp.test('google') => false
 */
export const domain__regexp =
  /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/

/**
 * subdomain__regexp to validate subdomain
 * @example subdomain__regexp.test('subdomain.google.com') => true
 * @example subdomain__regexp.test('subdomain.google.com.vn') => true
 * @example subdomain__regexp.test('subdomain.google.com.vn.') => false
 * @example subdomain__regexp.test('subdomain.google') => false
 */
export const subdomain__regexp =
  /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/

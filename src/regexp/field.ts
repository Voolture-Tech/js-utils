/**
 * Regular expressions for field Username validation
 * @example username__regexp.test('Name') => false
 * @example username__regexp.test('Username') => true
 * @example username__regexp.test('Username1') => true
 */
export const username__regexp = /^[a-zA-Z0-9_-]{3,24}$/

/**
 * socialNetwortUsername__regexp to validate the username of social networks
 * @example socialNetwortUsername__regexp.test('Name') => true
 * @example socialNetwortUsername__regexp.test('Username') => true
 * @example socialNetwortUsername__regexp.test('Username1') => true
 * @example socialNetwortUsername__regexp.test('@Username') => true
 * @example socialNetwortUsername__regexp.test('@Username1') => true
 */
export const socialNetwortUsername__regexp = /^@?(\w{1,15})$/

/**
 * barCode__regexp to validate the barcode
 * @example barCode__regexp.test('Name') => false
 * @example barCode__regexp.test('12345678') => true
 * @example barCode__regexp.test('1234567890123') => true
 * @example barCode__regexp.test('123456789012345') => true
 */
export const barCode__regexp = /^[0-9]{8,14}$/

/**
 * qrCode__regexp to validate the QR code
 * @example qrCode__regexp.test('Name') => false
 * @example qrCode__regexp.test('12345678') => true
 * @example qrCode__regexp.test('1234567890123') => true
 * @example qrCode__regexp.test('123456789012345') => true
 */
export const qrCode__regexp = /^[0-9A-Z$%*+-./: ]{1,}$/

/**
 * Regular expressions for field E-Mail validation
 * @example email__regexp.test('Name') => false
 * @example email__regexp.test('email@provider.com') => true
 * @example email__regexp.test('email@provider') => false
 */
export const email__regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

/**
 * Regular expressions for field Domain E-Mail validation
 * @example domainEmail__regexp.test('Name') => false
 * @example domainEmail__regexp.test('email@domain.com') => true
 */
export const domainEmail__regexp = /@([^@\s]+)$/

/**
 * Regular expressions for field Password validation
 * @example password__regexp.test('Name') => false
 * @example password__regexp.test('Password') => false
 * @example password__regexp.test('Password1') => false
 * @example password__regexp.test('Password1!') => true
 */
export const strengthPassword__regexp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

/**
 * Regular expressions for field Date validation
 * @example date__regexp.test('Name') => false
 * @example date__regexp.test('2021-02-01') => true
 * @example date__regexp.test('2021-02-01T00:00:00Z') => false
 */
export const date__regexp = /^\d{4}-\d{2}-\d{2}$/

/**
 * Regular expressions for field Time validation
 * @example time__regexp.test('Name') => false
 * @example time__regexp.test('00:00') => true
 * @example time__regexp.test('00:00:00') => false
 */
export const time__regexp = /^\d{2}:\d{2}$/

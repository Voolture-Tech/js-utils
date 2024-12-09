/**
 * visa__regexp check if the credit card is a visa card
 * @example visa__regexp.test('4111111111111111') => true
 */
export const visa__regexp = /^4[0-9]{12}(?:[0-9]{3})?$/

/**
 * mastercard__regexp check if the credit card is a mastercard
 * @example mastercard__regexp.test('5555555555554444') => true
 * @example mastercard__regexp.test('2221000000000009') => false
 */
export const mastercard__regexp = /^5[1-5][0-9]{14}$/

/**
 * amex__regexp check if the credit card is a american express card
 * @example amex__regexp.test('378282246310005') => true
 * @example amex__regexp.test('371449635398431') => true
 */
export const amex__regexp = /^3[47][0-9]{13}$/

/**
 * dinersClub__regexp check if the credit card is a diners club card
 * @example dinersClub__regexp.test('30569309025904') => true
 * @example dinersClub__regexp.test('38520000023237') => true
 */
export const dinersClub__regexp = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/

/**
 * discover__regexp check if the credit card is a discover card
 * @example discover__regexp.test('6011111111111117') => true
 * @example discover__regexp.test('6011000990139424') => true
 */
export const discover__regexp = /^6(?:011|5[0-9]{2})[0-9]{12}$/

/**
 * jcb__regexp check if the credit card is a jcb card
 * @example jcb__regexp.test('3530111333300000') => true
 * @example jcb__regexp.test('3566002020360505') => true
 */
export const jcb__regexp = /^(?:2131|1800|35\d{3})\d{11}$/

/**
 * americanExpress__regexp check if the credit card is a american express card
 * @example americanExpress__regexp.test('378282246310005') => true
 * @example americanExpress__regexp.test('371449635398431') => true
 */
export const americanExpress__regexp = amex__regexp

/**
 * elo__regexp check if the credit card is a elo card
 * @example elo__regexp.test('6363680363680368') => true
 */
export const elo__regexp =
  /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/

/**
 * cvv__regexp check if the cvv is valid
 * @example cvv__regexp.test('123') => true
 * @example cvv__regexp.test('1234') => true
 * @example cvv__regexp.test('12') => false
 */
export const cvv__regexp = /^\d{3,4}$/

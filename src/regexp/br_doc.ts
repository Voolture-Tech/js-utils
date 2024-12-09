/**
 * cpf__regexp to validate CPF (Brazilian Individual Taxpayer Registry) number
 * @example brCPF__regexp.test('123.456.789-09') -> true
 * @example brCPF__regexp.test('123.456.789-99') -> false
 * @example brCPF__regexp.test('12345678909') -> false
 */
export const brCPF__regexp = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

/**
 * cnpj__regexp to validate CNPJ (National Register of Legal Entities) number
 * @example brCNPJ__regexp.test('12.345.678/0001-09') -> true
 * @example brCNPJ__regexp.test('12.345.678/0001-99') -> false
 * @example brCNPJ__regexp.test('12345678000109') -> false
 */
export const brCNPJ__regexp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/

/**
 * cep__regexp to validate CEP (Brazilian ZIP code) number
 * @example brCEP__regexp.test('12345-678') -> true
 * @example brCEP__regexp.test('12345678') -> false
 */
export const brCEP__regexp = /^\d{5}-\d{3}$/

/**
 * brVehicleLicensePlate__regexp to validate Brazilian vehicle license plate
 * @example brVehicleLicensePlate__regexp.test('ABC1234') -> true
 * @example brVehicleLicensePlate__regexp.test('ABC123') -> false
 */
export const brVehicleLicensePlate__regexp = /^[A-Z]{3}\d{4}$/

/**
 * brDDD__regexp to validate Brazilian DDD (Direct Dialing at a Distance) code
 * @example brDDD__regexp.test('11') -> true
 * @example brDDD__regexp.test('1') -> false
 */
export const brDDD__regexp = /^[1-9]{2}$/

/**
 * brDDI__regexp to validate Brazilian DDI (Direct Dialing International) code
 * @example brDDI__regexp.test('+55') -> true
 * @example brDDI__regexp.test('+5') -> false
 */
export const brDDI__regexp = /^\+\d{1,3}$/

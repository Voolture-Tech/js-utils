/**
 * upperCase__regexp matches any uppercase letter
 * @example uppserCase__regexp.test('A') -> true
 * @example uppserCase__regexp.test('a') -> false
 */
export const upperCase__regexp = /[A-Z]/

/**
 * lowerCase__regexp matches any lowercase letter
 * @example lowerCase__regexp.test('a') -> true
 * @example lowerCase__regexp.test('A') -> false
 */
export const lowerCase__regexp = /[a-z]/

/**
 * digit__regexp matches any digit
 * @example digit__regexp.test('1') -> true
 * @example digit__regexp.test('a') -> false
 */
export const digit__regexp = /\d/

/**
 * special__regexp matches any special character
 * @example special__regexp.test('!') -> true
 * @example special__regexp.test('a') -> false
 */
export const special__regexp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

/**
 * space__regexp matches any whitespace character
 * @example space__regexp.test(' ') -> true
 * @example space__regexp.test('a') -> false
 */
export const space__regexp = /\s/

/**
 * alphanumeric__regexp matches any alphanumeric character
 * @example alphanumeric__regexp.test('a') -> true
 * @example alphanumeric__regexp.test('!') -> false
 */
export const alphanumeric__regexp = /[a-zA-Z0-9]/

/**
 * fullName__regexp matches a full name
 * @example fullName__regexp.test('John Doe') -> true
 * @example fullName__regexp.test('John') -> false
 */
export const fullName__regexp = /[A-Za-z]+\s[A-Za-z]+(\s[A-Za-z]+)?$/

/**
 * camelCase__regexp matches a camelCase string
 * @example camelCase__regexp.test('camelCase') -> true
 * @example camelCase__regexp.test('CamelCase') -> false
 */
export const camelCase__regexp = /^[a-z]+([A-Z][a-z]+)*$/

/**
 * snakeCase__regexp matches a snake_case string
 * @example snakeCase__regexp.test('snake_case') -> true
 * @example snakeCase__regexp.test('Snake_Case') -> false
 */
export const snakeCase__regexp = /^[a-z]+(_[a-z]+)*$/

/**
 * kebabCase__regexp matches a kebab-case string
 * @example kebabCase__regexp.test('kebab-case') -> true
 * @example kebabCase__regexp.test('Kebab-Case') -> false
 */
export const kebabCase__regexp = /^[a-z]+(-[a-z]+)*$/

/**
 * pascalCase__regexp matches a PascalCase string
 * @example pascalCase__regexp.test('PascalCase') -> true
 * @example pascalCase__regexp.test('pascalCase') -> false
 */
export const pascalCase__regexp = /^[A-Z][a-z]+([A-Z][a-z]+)*$/

/**
 * dotCase__regexp matches a dot.case string
 * @example dotCase__regexp.test('dot.case') -> true
 * @example dotCase__regexp.test('Dot.Case') -> false
 */
export const dotCase__regexp = /^[a-z]+(\.[a-z]+)*$/

/**
 * constantCase__regexp matches a CONSTANT_CASE string
 * @example constantCase__regexp.test('CONSTANT_CASE') -> true
 * @example constantCase__regexp.test('Constant_Case') -> false
 */
export const constantCase__regexp = /^[A-Z]+(_[A-Z]+)*$/

/**
 * pathCase__regexp matches a path/case string
 * @example pathCase__regexp.test('path/case') -> true
 * @example pathCase__regexp.test('Path/Case') -> false
 */
export const pathCase__regexp = /^[a-z]+(\/[a-z]+)*$/

/**
 * sentenceCase__regexp matches a Sentence case string
 * @example sentenceCase__regexp.test('Sentence case') -> true
 * @example sentenceCase__regexp.test('Sentence Case') -> false
 */
export const sentenceCase__regexp = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/

/**
 * titleCase__regexp matches a Title Case string
 * @example titleCase__regexp.test('Title Case') -> true
 * @example titleCase__regexp.test('Title case') -> false
 */
export const titleCase__regexp = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/

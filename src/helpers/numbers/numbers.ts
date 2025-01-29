/**
 * Check if the valeu is finit and not in scientific notation
 * @param value
 * @returns {boolean}
 * @example isVisualSafeNumber(1000000) -> true
 * @example isVisualSafeNumber(1e6) -> false
 */
export function isVisualSafeNumber(value: number): boolean {
  return Number.isFinite(value) && !value.toString().includes('e')
}

/**
 * Format number with spaces and without decimal part
 * @param value
 * @returns {string}
 * @example formatNumberWithSpaces(1000000) -> '1 000 000'
 * @inner isVisualSafeNumber
 */
export function formatNumberWithSpaces(value: number): string | null {
  if (!isVisualSafeNumber(value)) return null

  const integerValue = Math.trunc(value)
  return integerValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

/**
 * DebounceSync is a function that will call your callback function after a delay
 * @param fn - is your callback function that you want to debounce
 * @param delay - is the time in milliseconds that you want to wait before calling the function
 * @returns - a function that will call your callback function after the delay
 * @example const debouncedFunction = debounceSync(() => console.log('Hello'), 1000) -> Will log 'Hello' after 1 second
 */
export function debounceSync(
  fn: (...args: unknown[]) => unknown,
  delay: number,
) {
  let timeoutId: NodeJS.Timeout

  return (...args: unknown[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

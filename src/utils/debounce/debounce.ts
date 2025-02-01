/**
 * Async debounce function
 * @param fn - is your callback function that you want to debounce
 * @param delay - is the time in milliseconds that you want to wait before calling the function
 * @returns a promise that resolves when the debounced function is called
 * @example const debouncedFunction = debounce(() => console.log('Hello'), 1000) -> Will log 'Hello' after 1 second
 */
export function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout

  return new Promise<void>((resolve) => {
    return (...args: unknown[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        fn(...args)
        resolve()
      }, delay)
    }
  })
}

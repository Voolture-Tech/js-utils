import { secondsToMs } from '../helpers'

/**
 * Waits for a given number of seconds
 * @param seconds Number
 */
export async function delay(seconds: number): Promise<void> {
  new Promise((resolve) => {
    setTimeout(resolve, secondsToMs(seconds))
  })
}

import { secondsToMs } from '../../helpers'

/**
 * Waits for a given number of seconds
 * @param seconds Number
 * @returns Promise<void>
 */
export async function delay(seconds: number): Promise<void> {
  new Promise((resolve) => {
    setTimeout(resolve, secondsToMs(seconds))
  })
}

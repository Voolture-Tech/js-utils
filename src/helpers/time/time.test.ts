import { msToSeconds, secondsToMs } from './time'

describe('Time Helpers', () => {
  test('msToSeconds should convert milliseconds to seconds', () => {
    expect(msToSeconds(1000)).toBe(1)
    expect(msToSeconds(2000)).toBe(2)
    expect(msToSeconds(0)).toBe(0)
  })

  test('secondsToMs should convert seconds to milliseconds', () => {
    expect(secondsToMs(1)).toBe(1000)
    expect(secondsToMs(2)).toBe(2000)
    expect(secondsToMs(0)).toBe(0)
  })
})

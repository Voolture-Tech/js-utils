type ErrorType = 'util' | 'helper'

export class _AppErrorHandler extends Error {
  constructor(message: string, name: string, type: ErrorType) {
    super(`Package @voolture-tech/js-utils/${type}/${name}: ${message}`)
  }
}

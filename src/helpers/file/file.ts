import { _AppErrorHandler } from '../../handler'

/**
 * Convert a size to another unit
 * @param size - The size to convert
 * @param targetUnit - The unit to convert to
 * @returns The converted size
 * @example convertToSize('1024KB', 'MB') // 1 MB
 */
export function convertToSize(size: string, targetUnit: string): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const unitValues = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
    PB: 1024 * 1024 * 1024 * 1024 * 1024,
    EB: 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
    ZB: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
    YB: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  }

  const regex = /^(\d+)(B|KB|MB|GB|TB|PB|EB|ZB|YB)$/
  const match = size.match(regex)

  if (!match) {
    throw new _AppErrorHandler(
      `Invalid size format of ${size}`,
      'file',
      'helper',
    )
  }

  const value = Number.parseInt(match[1], 10)
  const unit = match[2] as keyof typeof unitValues

  if (!units.includes(unit) || !units.includes(targetUnit)) {
    throw new _AppErrorHandler(
      `Invalid unit of ${targetUnit}`,
      'file',
      'helper',
    )
  }

  const sizeInBytes = value * unitValues[unit]
  const convertedSize =
    sizeInBytes / unitValues[targetUnit as keyof typeof unitValues]

  return `${convertedSize} ${targetUnit}`
}

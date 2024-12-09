import { _AppErrorHandler } from '../../handler'

/**
 * An function utility to switch between options
 * @param list - The list of options
 * @param selected - The selected option
 * @returns The selected option
 */
export function switcher<ListType>(list: ListType, selected: keyof ListType) {
  const selectedOption = list?.[selected]

  if (selectedOption === undefined) {
    throw new _AppErrorHandler(
      `The option '${String(selected)}' does not exists on list`,
      'switcher',
      'util',
    )
  }
  return list[selected]
}

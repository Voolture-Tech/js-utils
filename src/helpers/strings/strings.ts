/**
 * Function to get all the initial letters of a string
 * @param name string
 * @example stringOfAllInitialsOfName('John Doe') -> 'JD'
 * @example stringOfAllInitialsOfName('John') -> 'J'
 * @example stringOfAllInitialsOfName('John Doe Smith') -> 'JDS'
 */
export function stringOfAllInitialsOfName(name: string): string | null {
  const words = name.split(' ')

  if (words.length === 0) {
    return null
  }

  return words.map((word) => word.charAt(0)).join('')
}

/**
 *
 * @param name string
 * @returns string
 * @example stringOfInitialsOfName('John Doe') -> 'JD'
 * @example stringOfInitialsOfName('John') -> 'J'
 * @example stringOfInitialsOfName('John Doe Smith') -> 'JS'
 * @example stringOfInitialsOfName('') -> null
 */
export function stringOfInitialsOfName(name: string): string | null {
  const initials = stringOfAllInitialsOfName(name)

  if (!initials) {
    return null
  }

  if (initials.length === 1) {
    return initials
  }

  return initials.charAt(0) + initials.charAt(initials.length - 1)
}

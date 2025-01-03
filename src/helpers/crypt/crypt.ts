export function stringToBase64(str: string): string {
  return Buffer.from(str).toString('base64')
}

export function base64ToString(stringEncoded: string): string {
  return Buffer.from(stringEncoded, 'base64').toString()
}

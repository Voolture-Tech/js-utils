/**
 * Convert a string to base64
 * @param {string} str
 * @returns {string}
 */
export function stringToBase64(str: string): string {
  return Buffer.from(str).toString('base64')
}

/**
 * Convert a base64 string to a string
 * @param {string} stringEncoded
 * @returns {string}
 */
export function base64ToString(stringEncoded: string): string {
  return Buffer.from(stringEncoded, 'base64').toString()
}

/**
 * Decode a JSON Web Token
 * @param {string} token
 * @returns {Promise<{header: H; payload: P; signature: string} | null>}
 */
export function decodeJSONWebToken<P = unknown, H = unknown>(
  token: string,
): Promise<{ header: H; payload: P; signature: string } | null> {
  return new Promise((resolve, reject) => {
    const [header, payload, signature] = token.split('.')

    if (!header || !payload || !signature) {
      reject(null)
      return
    }

    resolve({
      header: JSON.parse(base64ToString(header)),
      payload: JSON.parse(base64ToString(payload)),
      signature,
    })
  })
}

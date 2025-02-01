import crypto from 'node:crypto'

/**
 * Compare a string with an encrypted string with node:crypto
 * @param value - The string to compare
 * @param encryptedValye - The encrypted string to compare
 * @returns A promise that resolves to a boolean indicating if the string is correct
 */
export async function stringEncryptedCompare(
  value: string,
  encryptedValye: string,
): Promise<boolean> {
  const [salt, iterations, keylen, digest, derivedKey] =
    encryptedValye.split(':')
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      value,
      salt,
      Number(iterations),
      Number(keylen),
      digest,
      (err, key) => {
        if (err) reject(err)
        resolve(key.toString('hex') === derivedKey)
      },
    )
  })
}

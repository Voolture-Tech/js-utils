import crypto from 'node:crypto'

type IStringEncryptOptions = {
  salt?: string
  iterations?: number
  keylen?: number
  digest?: string
}

/**
 * Encrypts a string using PBKDF2 of node:crypto
 * @param value - The string to encrypt
 * @param options - The options to use
 * @returns The encrypted string
 */
export async function stringEncrypt(
  value: string,
  options: IStringEncryptOptions,
): Promise<string> {
  const salt = options?.salt || crypto.randomBytes(16).toString('hex')
  const iterations = options?.iterations || 10000
  const keylen = options?.keylen || 64
  const digest = options?.digest || 'sha512'

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      value,
      salt,
      iterations,
      keylen,
      digest,
      (err, derivedKey) => {
        if (err) reject(err)
        resolve(
          `${salt}:${iterations}:${keylen}:${digest}:${derivedKey.toString('hex')}`,
        )
      },
    )
  })
}

import crypto from 'node:crypto'

/**
 * Compare a password with an encrypted password
 * @param password - The password to compare
 * @param encryptedPassword - The encrypted password to compare
 * @returns A promise that resolves to a boolean indicating if the password is correct
 */
async function passwordCompare(
  password: string,
  encryptedPassword: string,
): Promise<boolean> {
  const [salt, iterations, keylen, digest, derivedKey] =
    encryptedPassword.split(':')
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
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

export default passwordCompare

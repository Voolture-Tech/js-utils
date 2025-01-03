import crypto from 'node:crypto'

type IPasswordEncryptOptions = {
  salt?: string
  iterations?: number
  keylen?: number
  digest?: string
}

async function passwordEncrypt(
  password: string,
  options: IPasswordEncryptOptions,
): Promise<string> {
  const salt = options?.salt || crypto.randomBytes(16).toString('hex')
  const iterations = options?.iterations || 10000
  const keylen = options?.keylen || 64
  const digest = options?.digest || 'sha512'

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
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

export default passwordEncrypt

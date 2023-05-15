import { createLocalStorage, createSessionStorage, createStorage } from './cache'
import { AesEncryption, decodeByBase64, encryptByBase64, encryptByMd5 } from './cipher'
import LS from './LS'
import SS from './SS'

export {
  createSessionStorage,
  createLocalStorage,
  createStorage,
  AesEncryption,
  encryptByBase64,
  decodeByBase64,
  encryptByMd5,
  LS,
  SS
}

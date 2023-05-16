import LS from './LS'
import SS from './SS'
import { createLocalStorage, createSessionStorage, createStorage } from './cache'
import { AesEncryption, decodeByBase64, encryptByBase64, encryptByMd5 } from './cipher'
import { decoderQrcode, generateQrcode } from './qrcode'

export {
  createSessionStorage,
  createLocalStorage,
  createStorage,
  AesEncryption,
  encryptByBase64,
  decodeByBase64,
  encryptByMd5,
  LS,
  SS,
  generateQrcode,
  decoderQrcode,
}

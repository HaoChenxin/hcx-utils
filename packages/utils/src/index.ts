import LS from './LS'
import SS from './SS'
import { createLocalStorage, createSessionStorage, createStorage } from './cache'
import { AesEncryption, decodeByBase64, encryptByBase64, encryptByMd5 } from './cipher'
import { calculateBestTextColor, colorDarken, colorIsDark, colorLighten, hexToRGB, isHexColor, rgbToHex } from './color'
import { getBoundingClientRect, getViewportOffset } from './dom'
import { base64URLtoBlob, imgUrlToBase64 } from './file/base64Conver'
import { downloadByData, downloadByUrl, downloadImgByBase64, downloadImgByOnlineUrl, openWindow } from './file/download'
import { loadScript } from './loadScript'
import { decoderQrcode, generateQrcode } from './qrcode'
import { buildShortUUID, buildUUID } from './uuid'

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
  imgUrlToBase64,
  base64URLtoBlob,
  openWindow,
  downloadImgByOnlineUrl,
  downloadImgByBase64,
  downloadByData,
  downloadByUrl,
  buildUUID,
  buildShortUUID,
  getBoundingClientRect,
  getViewportOffset,
  loadScript,
  isHexColor,
  rgbToHex,
  hexToRGB,
  colorIsDark,
  colorDarken,
  colorLighten,
  calculateBestTextColor,
}

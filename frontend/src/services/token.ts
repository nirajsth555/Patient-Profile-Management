import { getStorageItem, setStorageItem } from "../utils/storage";

export function setAccessToken(accessToken: string) {
    setStorageItem('accessToken', accessToken)
}

export function getAccessToken() {
    return getStorageItem('accessToken')
}

export function setRefreshToken(refreshToken: string) {
    setStorageItem('refreshToken', refreshToken)
}

export function getRefreshToken() {
    return getStorageItem('refreshToken')
}
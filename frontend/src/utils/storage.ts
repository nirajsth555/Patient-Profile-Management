export function setStorageItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageItem(key: string) {
    const value = localStorage.getItem(key);
    if (!value) {
        return null
    }
    return JSON.parse(value);
}

export function removeStorageItem(key: string) {
    localStorage.removeItem(key)
}

export function clearStorage() {
    localStorage.clear()
}

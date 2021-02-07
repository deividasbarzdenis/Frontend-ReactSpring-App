export const saveToStorage = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value)
        localStorage.setItem(key, serializedValue)
    } catch {
        // ignore
    }
}

export const loadFromStorage = (key) => {
    try {
        const value = localStorage.getItem(key)

        if (value === null) {
            return undefined
        }

        return JSON.parse(value)
    } catch {
        return undefined
    }
}
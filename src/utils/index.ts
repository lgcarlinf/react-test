export const saveToLocalStorage = <T>(key: string, value: T) =>{
    try {
        const existingValue = localStorage.getItem(key);
        if (existingValue !== null) {
            return;
        }
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
}

export const getFromLocalStorage = <T>(key: string): T | null=>{
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return null;
        }
        return JSON.parse(serializedValue);
    } catch (error) {
        console.error("Error getting data from localStorage", error);
        return null;
    }
}

export const upperCaseFirstLetter = (word: string | undefined) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}
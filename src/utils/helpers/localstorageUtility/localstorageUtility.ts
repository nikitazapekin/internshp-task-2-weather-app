import { STORAGE_KEYS } from "@constants/localstorageConstants";

export type StorageKeysType = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

class LocalstorageUtils {
  static setItem<T>(key: string, value: T): void {
    try {
      const jsonValue = JSON.stringify(value);

      localStorage.setItem(key, jsonValue);
    } catch {
      throw new Error("Localstorage error");
    }
  }

  static getItem<T>(key: string): T | null {
    try {
      const jsonValue = localStorage.getItem(key);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch {
      return null;
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      throw new Error("Localstorage error");
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch {
      throw new Error("Localstorage error");
    }
  }
}

export { LocalstorageUtils, STORAGE_KEYS };

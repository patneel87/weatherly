class LocalStorage {
  constructor() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, string) {
    this.store[key] = string
  }

  clear() {
    this.store = {}
  }

  get length () {
    return Object.keys(this.store).length
  }
}

global.localStorage = new LocalStorage;
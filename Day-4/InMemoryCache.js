class InMemoryCache {
  constructor() {
    this.cache = {};
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  has(key) {
    return key in this.cache;
  }

  remove(key) {
    if (this.has(key)) delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }

  static getInstance() {
    if (!InMemoryCache.instance) {
      InMemoryCache.instance = new InMemoryCache();
    }
    return InMemoryCache.instance;
  }
}

// singleton
// module.exports = new InMemoryCache();
module.exports = InMemoryCache.getInstance();

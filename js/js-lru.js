/*
 @author: tang
 @title: 设计和实现一个 LRU (最近最少使用) 缓存机制 https://github.com/sisterAn/JavaScript-Algorithms/issues/7
 @date: 2020/12/6
 */

class LRU {
  constructor (max) {
    this.max = max
    this.cache = new Map()
  }

  get (key) {
    const value = this.cache.get(key);
    if (!value) return;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  add (key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size > this.max - 1) {
      // 删掉最老的key 即map中的第一项
      const keys = this.cache.keys().next().value;
      this.cache.delete(keys);
    }
    this.cache.set(key, value);
  }
};
const lru = new LRU(2);
lru.add(1, 1);
lru.add(2, 2);
lru.add(2, 1);


console.log(lru.cache);
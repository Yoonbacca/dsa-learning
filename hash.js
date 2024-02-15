class HashTable {
  constructor(size = 53) {
    //53 is default value
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    console.log(key, "/", total);
    return total;
  }

  set(key, value) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
  }
  get(key) {
    let idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i];
        }
      }
    }
    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          allKeys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
  values() {
    let allVals = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          allVals.push(this.keyMap[i][j][1]);
        }
      }
    }
    return allVals;
  }
}

let hash = new HashTable(4);
hash.set("a", 13);
hash.set("maroon", 1);
hash.set("yellow", 11);
hash.set("greeeee", 11);
hash.set("ab", 1234);
console.log(hash);
console.log(hash.keys());
console.log(hash.values());

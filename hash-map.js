function hashMapFunc(loadFactor, capacity) {
  return {
    table: Array(capacity),

    hash(key) {
      let hashCode = 0;
      const primeNumber = 67;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
      }

      return hashCode;
    },

    //used to set a key value pair in the table
    set(key, value) {
      const index = this.hash(key);
      //   if (!this.table[index]) {
      //     this.table[index] = [];
      //   }

      this.table[index] = [key, value];
    },

    //return the value assigned to this key
    get(key) {
      const index = this.hash(key);

      if (this.table[index] === undefined) {
        return null;
      }
      return this.table[index][1];
    },

    //returns true or false depending on if the key is in the hash map
    has(key) {
      const index = this.hash(key);

      if (this.table[index] === undefined) {
        return false;
      }
      return true;
    },

    //if key exists, remove it
    remove(key) {
      const index = this.hash(key);
      if (this.table[index] === undefined) {
        return false;
      }
      this.table[index] = undefined;
      return true;
    },

    length() {},

    clear() {},

    keys() {},

    values() {},

    //display the contents of the hash table
    entries(key, value) {
      for (let i = 0; i < this.table.length; i++) {
        return `[${key}, ${value}]`;
      }
    },
  };
}

let hashMap = hashMapFunc(0.75, 67);

hashMap.set("sam", 29);
console.log(hashMap.get("sam"));
console.log(hashMap.has("sam"));
// console.log(hashMap.has("grace"));
// hashMap.set("grace", 31);
// hashMap.set("sid", 100);

// console.log(hashMap.entries());
// let index = hashMap.hash("C");
// if (index) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

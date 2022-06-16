class Lock {
    constructor() {
      this.locked = true
    }
  
    lock() {
      this.locked = true
    }
  
    unLock() {
      this.locked = false
    }

    isLocked() {
        return this.locked
    }
}

module.exports = Lock
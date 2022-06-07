class SecretDiary {
  constructor() {
    this.lock = new Lock()
    this.contents = []
  }

  lock() {
    this.lock.lock()
  }

  unlock() {
    this.lock.unlock()
  }

  addEntry(entry) {
    if (this.lock.isLocked) {
      throw 'Diary is locked!'
    }

    this.contents.push(entry)
  }

  getEntries() {
    if (this.lock.isLocked) {
      throw 'Diary is locked!'
    }

    return this.contents
  }
}

class Lock {
  constructor() {
    this.isLocked = true
  }

  lock() {
    this.isLocked = true
  }

  unlock() {
    this.isLocked = false
  }
}

// or the inverse

class SecretDiary {
  constructor() {
    this.diary = new Diary()
    this.isLocked = true
  }

  lock() {
    this.isLocked = true
  }

  unlock() {
    this.isLocked = false
  }

  addEntry(entry) {
    if (this.isLocked) {
      throw 'Diary is locked!'
    }

    this.diary.addEntry(entry)
  }

  getEntries() {
    if (this.isLocked) {
      throw 'Diary is locked!'
    }

    return this.diary.getEntries()
  }
}

class Diary {
  constructor() {
    this.contents = []
  }

  addEntry(entry) {
    this.contents.push(entry)
  }

  getEntries() {
    return this.contents
  }
}

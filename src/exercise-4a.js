class SecretDiary {
  isLocked = true
  entries = []

  lock() {
    this.isLocked = true
  }

  unlock() {
    this.isLocked = false
  }

  addEntry(entry) {
    if (this.isLocked) {
      throw 'Secret diary is locked!'
    }

    this.entries.push(entry)
  }

  getEntries() {
    if (this.isLocked) {
      throw 'Secret diary is locked!'
    }

    return this.entries
  }
}
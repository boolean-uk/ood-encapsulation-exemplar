class SecretDiary {
  vault = new Vault()

  addEntry(entry) {
    this.vault.addContent(entry)
  }

  getEntries() {
    return this.vault.getContents()
  }
}

class Vault {
  isLocked = true
  contents = []
  
  lock() {
    this.isLocked = true
  }

  unlock() {
    this.isLocked = false
  }

  addContent(content) {
    if (this.isLocked) {
      throw 'Vault is locked!'
    }

    this.contents.push(content)
  }

  getContents() {
    if (this.isLocked) {
      throw 'Vault is locked!'
    }

    return this.contents
  }
}
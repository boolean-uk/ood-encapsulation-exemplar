const Lock = require('./lock')

class Diary {
    constructor() {
        this.myLock = new Lock()
        this.contents = []
    }

    lock() {
        this.myLock.lock()
    }

    unLock() {
        this.myLock.unLock()
    }

    addEntry(entry) {
        if (this.myLock.isLocked()) {
            //throw 'Diary is locked!'
            return false
        }
        this.contents.push(entry)
        return true
    }

    getEntries() {
        if (this.myLock.isLocked()) {
            // throw 'Diary is locked!'
            return null
        }

        return this.contents
    }
}

module.exports = Diary
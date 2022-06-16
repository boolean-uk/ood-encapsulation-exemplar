const Diary = require('../src/diary')

/**
 * Initially the SecretDiary class is locked, meaning addEntry(entry) and getEntries() should throw an error.
 * When the user calls unlock(), addEntry() and getEntries() should work as desired.
 * When the user calls lock() again addEntry() and getEntries() throw errors.
**/

describe('Diary', () => {
  // eslint-disable-next-line no-unused-vars
  let diary
  beforeEach(() => {
    diary = new Diary()
  })

  it('cannot add and get diary entries until the diary is unlocked', () => {
    const addExpected = false
    const getExpected = null 

    const addResult = diary.addEntry("I swam in the sea")
    const getResult = diary.getEntries()

    expect(addResult).toEqual(addExpected)
    expect(getResult).toEqual(getExpected)
  })

  it('adds and gets diary entries when the diary is unlocked', () => {
    const addExpected = true
    const getExpected = ["I swam in the sea"] 

    diary.unLock()
    const addResult = diary.addEntry(getExpected[0])
    const getResult = diary.getEntries()

    expect(addResult).toEqual(addExpected)
    expect(getResult).toEqual(getExpected)
  })

  it('does not add and get diary entries when the diary is locked', () => {
    const addExpected = false
    const getExpected = null 

    diary.lock()
    const addResult = diary.addEntry("I swam in the sea")    
    const getResult = diary.getEntries()

    expect(addResult).toEqual(addExpected)
    expect(getResult).toEqual(getExpected)
  })
})
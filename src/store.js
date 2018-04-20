export const Store = {
  get() {
    return JSON.parse(localStorage.getItem('MekBadzappa'))
  },

  set(value) {
    localStorage.setItem('MekBadzappa', JSON.stringify(value))
  },

  mergeAndSet(value) {
    let currentData = this.get()
    let newData = Object.assign(currentData, value)

    this.set(newData)
    return newData
  }
}

export const Store = {
  get() {
    return JSON.parse(localStorage.getItem('MekBadzappa')) || this.blank()
  },

  set(value) {
    localStorage.setItem('MekBadzappa', JSON.stringify(value))
  },

  mergeAndSet(value) {
    let currentData = this.get()
    let newData = Object.assign(currentData, value)

    this.set(newData)
    return newData
  },

  blank() {
    return { hours: '', description: '', data: [] }
  }
}

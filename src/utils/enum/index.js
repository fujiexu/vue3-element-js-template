class MyEnum {
  container
  VALUES

  constructor(values) {
    this.VALUES = values

    this.container = new Map()

    values.forEach(item => {
      this[item.key] = item.value
      this.container.set(item.value, item.label)
    })
  }

  toString(keys) {
    if (arguments.length > 0) {
      if (keys instanceof Array) {
        const result = []

        keys.forEach(key => {
          const label = this.container.get(key)

          if (label) {
            result.push(label)
          }
        })
        return result.join(',')
      }
      return this.container.get(keys) || ''
    }
    const result = []

    for (const [_value, label] of this.container) {
      result.push(label)
    }
    return result.join('，')
  }

  get [Symbol.toStringTag]() {
    return 'MyEnum'
  }
}

export { MyEnum }
export default MyEnum

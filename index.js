function validateCpf(data) {
  Object.defineProperty(this, 'cleanCpf', {
    get: function () {
      return data.replace(/\D+/g, '')
    }
  })
}

validateCpf.prototype.validate = function () {
  if (typeof this.cleanCpf === 'undefined') return false
  if (this.cleanCpf.length !== 11) return false
  if (this.isSequential()) return false

  const cpfPartial = this.cleanCpf.slice(0, -2)
  const digit1 = this.createDigit(cpfPartial)
  const digit2 = this.createDigit(cpfPartial + digit1)

  const newCpf = cpfPartial + digit1 + digit2

  return newCpf === this.cleanCpf
}

validateCpf.prototype.createDigit = function (cpfPartial) {
  const cpfArray = Array.from(cpfPartial)

  let regressive = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressive * Number(val))
    regressive--
    return ac
  }, 0)

  const digit = 11 - (total % 11)
  return digit > 9 ? '0' : String(digit)
}

validateCpf.prototype.isSequential = function () {
  const sequential = this.cleanCpf[0].repeat(this.cleanCpf.length)
  return sequential === this.cleanCpf
}

const cpf = new validateCpf('705.484.450-52')
cpf.validate()
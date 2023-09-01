const speak = {
  speak() {
    console.log(`${this.name} is speaking`)
  }
}

const eat = {
  eat() {
    console.log(`${this.name} is eating`)
  }
}

const drink = {
  drink() {
    console.log(`${this.name} is drinking`)
  }
}

const personPrototype = { ...speak, ...eat, ...drink }

function createPerson() {
  return Object.create(personPrototype, {
    name: { value: name },
    lastname: { value: lastname }
  })
}
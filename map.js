const peoples = [
  { id: 3, name: 'Igor' },
  { id: 2, name: 'Fred' },
  { id: 1, name: 'Alberto' }
]

const newPeoples = new Map(peoples.map(person => [person.id, { ...person }]))

console.log(newPeoples)
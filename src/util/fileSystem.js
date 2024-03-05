const fs = require('fs')
const path = './src/db/db.json'


const readFileAsync = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile('backendModule/practica7api/src/db/db.json', 'utf-8', (error, data) => {
      if (error) reject(error)
      else resolve(JSON.parse(data))
    })
  })
}

// WRITE FILE
const writeFileAsync = async (array) => {
  return await new Promise((resolve, reject) => {
    fs.writeFile('backendModule/practica7api/src/db/db.json', JSON.stringify(array, null, 4), (error) => {
      if (error) reject(error, 'Cannot write the file.')
      else resolve()
    })
  })
}

const findUser = async (id) => {
  const users = readFileAsync(path)
  const user = users.find(u => u.id === id)
  if (user) return true
  else return false
}

module.exports = {
  readFileAsync,
  writeFileAsync,
  findUser
}

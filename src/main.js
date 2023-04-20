const { welcome, goodbye, tell } = require('../utils/fortune-teller')

const promise = welcome()

console.log(promise)

const question = 'Will the weather be nice today?'

const tellPromise = tell(question)

tellPromise
  .then(fortune => {
    console.log(question)

    console.log(fortune)
  })
  .catch(console.error)

welcome().then(console.log).then(goodbye).then(console.log).catch(console.error)

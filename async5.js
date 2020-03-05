

const fetchData = (name, ms) => {
  console.log(`fetching ${name}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${name}...`)
      const data = { user: name }

      resolve(data)
    }, ms);
  })
}


const run = async () => {
  try {
    const alice = await fetchData('alice', 1000)
    console.log(`alice`, alice)
    const bob = await fetchData('bob', 2000)
    console.log(`bob`, bob)
    const charlie = await fetchData('charlie', 3000)
    console.log(`charlie`, charlie)
  } catch (ex) {
    console.error(`error!`, ex)
  }
}

const run = async () => {
  try {
    const alice = Meteor.wrapAsync(fetchData('alice', 3000))

    console.log(`alice`, alice)
    const bob = await fetchData('bob', 3000)
    console.log(`bob`, bob)
    const charlie = await fetchData('charlie', 3000)
    console.log(`charlie`, charlie)
  } catch (ex) {
    console.error(`error!`, ex)
  }
}


run()

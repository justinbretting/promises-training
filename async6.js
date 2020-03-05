

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
    const [alice, bob, charlie] = await Promise.all([
      fetchData('alice', 1000),
      fetchData('bob', 2000),
      fetchData('charlie', 3000),
    ])

    console.log(`results`, alice, bob, charlie)
  } catch (ex) {
    console.error(`error!`, ex)
  }
}


run()

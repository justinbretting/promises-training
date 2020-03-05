

const fetchData = (name, ms) => {
  console.log(`fetching ${name}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${name}...`)
      const data = { user: name }

      if (name === "charlie") {
        reject('sorry charlie')
      } else {
        resolve(data)
      }
    }, ms);
  })
}


const run = async () => {
  try {
    const alice = await fetchData('alice', 3000)
    console.log(`done!`, alice)
  } catch (ex) {
    console.error(`error!`, ex)
  }
}


run()

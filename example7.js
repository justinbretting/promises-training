

const fetchData = (name, ms) => {
  console.log(`fetching...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${name}...`)
      const data = { user: name }
      resolve(data)
    }, ms);

    setTimeout(() => {
      reject('error')
    }, 4000);
  })
}


const run = () => {
  const p1 = fetchData('bob', 1000);
  const p2 = fetchData('alice', 3000);
  const p3 = fetchData('charlie', 5000);

  Promise.all([p1, p2, p3]).then(result => {
    console.log(`done!`)
    console.log(`result`, result)
  }).catch(ex => {
    console.error(`Error!`, ex)
  });
}


run()


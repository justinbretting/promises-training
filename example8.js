

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


const run = () => {
  fetchData('charlie', 1000).then(bob => {
    console.log(`bob resolved`, bob)

    fetchData('alice', 3000).then(alice => {
      console.log(`alice resolved`, alice)

      fetchData('bob', 3000).then(charlie => {
        console.log(`charlie resolved`, charlie)
      }).catch(ex => {
        console.log(`error fetching charlie`, ex)
      });
    }).catch(ex => {
      console.log(`error fetching alice`, ex)
    });
  }).catch(ex => {
    console.log(`error fetching bob`, ex)
  });
}


run()


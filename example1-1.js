

const fetchData = () => {
  console.log(`fetching...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { user: 'meteor' }
      resolve(data)
    }, 1000);
  })
}


const run = () => {
  fetchData().then(data => {
    console.log('done!', data)
  });
}


run()

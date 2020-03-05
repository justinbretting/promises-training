

const sleep = ms => {
  console.log(`sleeping ${ms}ms...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${ms}ms`)
      resolve()
    }, ms);
  })
}


const run = () => {
  Promise.all([
    sleep(1000),
    sleep(3000),
    sleep(5000),
  ]).then(() => {
    console.log('done!')
  }).catch(ex => {
    console.error(`Error!`, ex)
  });
}


run()

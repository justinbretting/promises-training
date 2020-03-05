

const sleep = ms => {
  console.log(`sleeping ${ms}ms...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${ms}ms`)
      resolve()
    }, ms);
  })
}


const run = async () => {
  await sleep(3000);
  console.log('done!')
}


run()


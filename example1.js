

const sleep = ms => {
  console.log(`sleeping ${ms}ms...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}


const run = () => {
  sleep(5000).then(() => {
    console.log('done!')
  });
}


run()

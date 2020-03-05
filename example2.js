

const sleep = ms => {
  console.log(`sleeping ${ms}ms...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);

    setTimeout(() => {
      reject('wakeup!')
    }, 1000)
  })
}


const run = () => {
  sleep(5000).then(() => {
    console.log('done!')
  }).catch(ex => {
    console.error(`Error!`, ex)
  });
}


run()



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


const run = async () => {
  try {
    await sleep(5000)
    console.log(`done!`)
  } catch (ex) {
    console.error(`error!`, ex)
  }
}


run()

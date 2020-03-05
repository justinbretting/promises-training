

const sleep = ms => {
  console.log(`sleeping ${ms}ms...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${ms}ms`)
      resolve()
    }, ms);

    setTimeout(() => {
      reject('error')
    }, 4000);
  })
}


const run = () => {
  let i = 0;

  const p1 = sleep(1000).then(() => i++);
  const p2 = sleep(3000).then(() => i++);
  const p3 = sleep(5000).then(() => i++);

  Promise.all([p1, p2, p3]).then(() => {
    console.log(`done! i=${i}`)
  }).catch(ex => {
    console.error(`Error!`, ex)
  });
}


run()


let p = new Promise((resolve, reject) => {
  let success = true;
  // let success = false;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

p.then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

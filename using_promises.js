function sumOfNumbersPromise(numbers) {
    return new Promise((resolve, reject) => {
      if (numbers.length !== 4) {
        reject("Exactly 4 numbers are required");
      } else {
        let sum = 0;
        for (const num of numbers) {
          sum += num;
        }
        resolve(sum);
      }
    });
  }
  
  const numbers = [1, 2, 3, 4];
  sumOfNumbersPromise(numbers)
    .then((result) => {
      console.log("Sum:", result);
    })
    .catch((error) => {
      console.error(error);
    });
  
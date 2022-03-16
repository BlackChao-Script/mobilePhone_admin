for (let i = 100; i < 1000; i++) {
  let a = i % 10
  let b = parseInt((i % 100) / 10)
  let c = parseInt(i / 100)
  if (a * a * a + b * b * b + c * c * c === i) {
    console.log(i)
  }
}

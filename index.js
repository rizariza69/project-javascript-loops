"use strict"


let iteration = 1

do {
  console.log(iteration)
  iteration += 5
} while (iteration < 100)

// Feel free to have some experiments with comparisons

for (let index = 0; index <= 100; index += 10) {
  console.log(index)
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  console.log(element)
}

// Feel free to have some experiments with comparisons

for (let i = 0; i < 5; i++) {
  console.log('*')
}

for (let i = 0; i < 5; i++) {
  let counter = ''
  for (let j = 0; j < 5; j++) {
    counter += '*'
    // console.log(counter)
  }
  console.log(counter)
}

//bintang

for (let i = 0; i < 5; i++) {
  let counter = ''
  for (let j = 5; j > i; j--) {
    counter += '*'

  }
  console.log(counter);
}
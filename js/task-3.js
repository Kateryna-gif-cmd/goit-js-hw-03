function filterArray(numbers, value) {

        let newNumbersArray = [];
  // Використовуємо цикл for для ітерації кожного елемента масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо елемент більший за value, додаємо його до масиву filtered
    if (numbers[i] > value) {
      newNumbersArray.push(numbers[i]);
    }
  }
  // Повертаємо масив filtered як результат
  return newNumbersArray;
}



console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
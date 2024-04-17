let numbers = [5, 3, -10, -3, 15, 4, 2, 1, 0];

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i];
  for (let j = i; j < numbers.length; j++) {
    if (numbers[j] < current) {
        lowest_idx = j;
        current = numbers[j];
    }
  }
  let temp_var = numbers[i];
  numbers[i] = numbers[lowest_idx];
  numbers[lowest_idx] = temp_var; 
}

console.log(numbers.toString());

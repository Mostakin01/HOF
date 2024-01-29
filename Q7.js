let originalNumbers = [2, 5, 8, 10, 3];
originalNumbers.forEach((value, index) => {
    originalNumbers[index] = value * 2;
});
console.log(originalNumbers);

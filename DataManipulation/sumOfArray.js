function processIntegers(arr) {
    // Validate the input array to ensure it contains only integers
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        throw new Error('Input must be an array containing only integers.');
    }

    //sum all the integers in the array:
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

// Example:
const inputArray = [1, 2, 3, 4, 5];
const result = processIntegers(inputArray);
console.log('Result:', result);
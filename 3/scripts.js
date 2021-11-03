let counter = 0
const integerInList = (arr) => {
    let arr1 = []

    if (typeof arr !== 'object') {
        return 'input is not true, please enter again!'
    }
    // base case
    if (arr.length === 0) {
        return counter;
    }

    for (let item of arr) {
        if (typeof item === 'object') {
            arr1 = [...arr1, ...item]
        }
        if (Number.isInteger(item) === true) {
            counter++;
        }
    }
    return integerInList(arr1);
}

console.log(integerInList([[[5], 3], 0, 2, ['foo'], [], [4, [5, 1, 6]]]))
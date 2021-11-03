const power = (num, p) => {
    if (typeof num !== 'number' && p !== 'number') {
        return 'input is not true! please enter again'
    }
    // Base case
    if (p === 0) {
        return 1;
    } else {
        p--;
        return num * power(num, p);
    }
}
console.log(power(-2, 3))
console.log(power(5, 0))
console.log(power(2, 5))


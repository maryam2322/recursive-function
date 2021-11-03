const contain = (object, input)  => {

    if (!(object instanceof Object)) {
        return ('input is not object, enter again.')
    }

    let obj = Object.values(object)

    for (let i in obj) {

        if (obj[i] === input) {
            return true
        }

        if (typeof obj[i] == 'object') {
            return contain(obj[i], input)
        }
    }
    return false;
}

const object = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: "hi"
                }
            }
        }
    }
}
console.log(contain(object, 20))
console.log(contain(object, 10))
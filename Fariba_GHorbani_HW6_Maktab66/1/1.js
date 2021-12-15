function ConstructorCharactCounts(string) {
    for (let i of string) {
        let count = 0
        for (let j of string) {
            if (i === j) {
                count++
            }
        }
        this[i] = count
    }
}

function findCommonFactory(s1, s2) {
    let commonObj = {
        sumOfCommonChars: function() {
            let sum = 0
            for (let j in this) {
                if (typeof(this[j]) !== 'function') {
                    sum += this[j]
                }
            }
            return sum
        }
    }

    let source = new ConstructorCharactCounts(s1)
    let target = new ConstructorCharactCounts(s2)
    for (let i in source) {
        if (i in target) {
            commonObj[i] = Math.min(source[i], target[i])
        }
    }
    return commonObj
}

let myObj = findCommonFactory("aabcc", "adcaa")
console.log(myObj.sumOfCommonChars())
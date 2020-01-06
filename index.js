
//RECURSION 

//factorial sums 

// intialize total to 0. Iterate through till n and store the numbers in total.
function factorialSum(n) {
    let total = 0
    for(let i = 0; i <= n; i++) {
        total += i
    } 
    return total 
}

console.log('iterative factorial solution: ', factorialSum(5))

// Recursive solution for the factorial sum. Create a base case to check n to be less than or equal to zero.
// Return the recursion execution loop at n - 1 + n for the 

function factorialSumRecursive(n) {
    if(n <= 0) {
        return 0
    } else {
        return n + factorialSumRecursive(n - 1)
    }
}

console.log('recursive factorial solution: ',factorialSumRecursive(5))
// Five Runs = five plus the whole function again 
// n = 5 
// n = 4 
// n = 3 
// n = 2 
// n = 1 

// Return an array of n: 
function incrementArray(n) {
    const arr = []
    for(let i = 0; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

console.log('iterative array increment solution: ', incrementArray(5))

// Recursive array push solution:
function decrementtArrayRecursive(n) {
    // base case: 
    if(n < 0) {
        return []
    } else {
      const arr = decrementtArrayRecursive(n - 1)
      arr.unshift(n)
      return arr
    }
}
console.log('recursive array increment solution: ', decrementtArrayRecursive(5))

// unshift method pushes the array from the last to the first when the callstack winds. 

function inclusiveArrayParam(startVal, endVal) {
    const arr = []
    for(let i = startVal; i <= endVal; i++) {
        arr.push(i)
    }
    return arr
}
console.log('iterative inclusive array solution: ', inclusiveArrayParam(2, 6))
 // (i) index of loop begins at start value and ends at end value and pushes the resutls into an array.

function inclusiveArrayParamRecursive(startVal, endVal) {
    if(startVal >= endVal) {
        return [startVal]
    } else {
        const arr = inclusiveArrayParamRecursive(startVal, endVal - 1)
        arr.unshift(endVal)
        return arr
    }
}

console.log('recursive inclusive array solution: ', inclusiveArrayParamRecursive(2, 6))
// base case sets the loop paramenters to return the startVal. Once the start value equals end value we return the call stack to unwind.


// 1
function sumPositive({
    arr = []
}){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}


// 2
function countPositive({
    arr = [],
}){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            count++
        }
    }
    return count
}


// 3
function findMin({
    arr = []
}){
    let n = arr.length
    if (n === 0){
        return
    }
    let min = arr[0]
    for (let i = 1; i < n; i++){
        if (min > arr[i]){
            min = arr[i]
        }
    }
    return min
}


// 4
function findMinPositive({
    arr = [],
    n = 0,
}){
    let n = arr.length
    if (n === 0){
        return
    }
    let minPositive = arr[0]
    for (let i = 1; i < n; i++){
        if ((minPositive > arr[i] || minPositive < 0) && arr[i] > 0){
            minPositive = arr[i]
        }
    }
    return minPositive
}


// 5
function getLastEven({
    arr = []
}){
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] % 2 === 0){
            return arr[i]
        }
    }
    return -1
}


// 6
function swapByIds({
    arr = [],
    pos1 = 0,
    pos2 = 0,
}){
    let temp = arr[pos1]
    arr[pos1] = arr[pos2]
    arr[pos2] = temp
    return arr
}


// 7
function quickSort({
    arr = [],
}){
    let n = arr.length
    if (n < 2) return arr
    let pivot = arr[n - 1]
    let left = []
    let right = []
    for (let i = 0; i < n - 1; i++){
        if (arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(arr = left), pivot, ...quickSort(arr = right)]
}


// 8
function isPrime(num){
    if (num < 1) return false
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if (num % i === 0) return false
    }
    return true
}


function findFirstPrime({
    arr = []
}){
    let n = arr.length
    for (i = 0; i < n - 1; i++){
        if (isPrime(arr[i])){
            return arr[i]
        }
    }
    return -1
}


// 9
function countIntegers({
    arr = []
}){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (Number.isInteger(arr[i])){
            count++
        }
    }
    return count
}


// 10
function countNegative({
    arr = [],
}){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            count++
        }
    }
    return count
}


function isMorePositive({
    arr = []
}){
    let numPostitive = countPositive(arr = arr)
    let numNegative = countPositive(arr = arr)
    return numPostitive > numNegative
}


// main process
function process(){
    let arr = [42, 17, 95, 68, 23, 81, 39, 12, 57, 5]
    let n = arr.length
    let choice = 1
    if (choice < 1 || choice > 10){

        return
    }
    switch (choice){
        case 1:
            break
        case 2:
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            break
        case 8:
            break
        case 9:
            break
        case 10:
            break
    }
}
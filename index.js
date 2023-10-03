// global variables
var arr = []
var choice = 0
var realArr = []

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
    let tempArr = arr
    let temp = tempArr[pos1]
    tempArr[pos1] = tempArr[pos2]
    tempArr[pos2] = temp
    return tempArr
}

function handleSwitchElementById({
    arr = []
}){
    let position1 = parseInt(document.getElementById("position1").value)
    let position2 = parseInt(document.getElementById("position2").value)
    
    if (position1 < 0 || position2 < 0){
        return {
            "result": "Vị trí nhập vào không được âm",
            "status": false,
        }
    }
    return {
        "result": swapByIds({
            arr: arr,
            pos1: position1,
            pos2: position2,
        }),
        "status": true,
    }
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
    return [...quickSort({arr: left}), pivot, ...quickSort({arr: right})]
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

function handleFirstPrime({
    arr = []
}){
    let firstPrime = findFirstPrime({arr: arr})
    
    if (firstPrime == -1){
        return {
            "result": "Không có số nguyên tố trong mảng",
            "status": false,
        }
    }
    return {
        "result": firstPrime,
        "status": true,
    }
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
    let totalPostitive = countPositive({arr: arr})
    let totalNegative = countNegative({arr: arr})
    let result = 0;
    if (totalPostitive > totalNegative){
        result = 1;
    }else if (totalPostitive < totalNegative){
        result = -1;
    }
    return result
}


// Handle adding item to array
function addRealNumToArray(){
    let element = document.getElementById("input-real-element").value
    realArr.push(element * 1.0)
    document.getElementById("display-real-array").innerHTML = `<p class="text-primary">Mảng đã nhập: ${realArr.join(", ")}</p>`
}


function addToArray(){
    let element = parseInt(document.getElementById("input-element").value)
    if (Number.isInteger(element)){
        arr.push(element)
    }
    document.getElementById("display-array").innerHTML = `<p class="text-primary">Mảng đã nhập: ${arr.join(", ")}</p>`

}


function resetRealArray(){
    realArr = []
    document.getElementById("input-real-element").value = ""
    document.getElementById("display-real-array").innerText = ""
    document.getElementById("resultBT9").innerText = ""
}


function resetArray(){
    n = 0
    arr = []
    document.getElementById("input-element").value = ""
    document.getElementById("display-array").innerText = ""
    let i = 1
    while (i <= 10){
        if (i != 9){
            document.getElementById(`resultBT${i}`).innerText = ""
        }
        i++
    }

}


function displayedHTMLResult({id, result, isSuccess = true}){
    let textStyle = "text-primary"
    if (!isSuccess){
        textStyle = "text-danger"   
    }
    document.getElementById(id).innerHTML = `<p class=${textStyle}>${result}</p>`
}


// main process
function process(choice){
    switch (choice){
        case 1:
            let sum = sumPositive({arr: arr})
            displayedHTMLResult({id: "resultBT1", result: `Tổng các số dương trong mảng: ${sum}`})
            break
        case 2:
            let count = countPositive({arr: arr})
            displayedHTMLResult({id: "resultBT2", result: `Tổng số lượng các số dương trong mảng: ${count}`})
            break
        case 3:
            let minValue = findMin({arr: arr})
            displayedHTMLResult({id: "resultBT3", result: `Số nhỏ nhất trong mảng: ${minValue}`})
            break
        case 4:
            let minPositiveValue = findMinPositive({arr: arr})
            displayedHTMLResult({id: "resultBT4", result: `Số dương nhỏ nhất trong mảng: ${minPositiveValue}`})
            break
        case 5:
            let lastPositiveValue = getLastEven({arr: arr})
            let displayValue = `Số chẵn cuối cùng trong mảng: ${lastPositiveValue}`
            if (lastPositiveValue === -1){
                displayValue = "Trong mảng không có số chẵn"
            }
            displayedHTMLResult({id: "resultBT5", result: displayValue, isSuccess: lastPositiveValue !== -1})
            break
        case 6:
            let result = handleSwitchElementById({arr: arr})
            displayedHTMLResult({id: "resultBT6", result: result['result'].join(", "), isSuccess: result['status']})
            break
        case 7:
            let ascendingArray = quickSort({arr: arr})
            displayedHTMLResult({id: "resultBT7", result: ascendingArray.join(", ")})
            break
        case 8:
            let primeResult = handleFirstPrime({arr: arr})
            displayedHTMLResult({id: "resultBT8", result: primeResult['result'], isSuccess: primeResult['status']})
            break
        case 9:
            let totalInteger = countIntegers({arr: realArr})
            displayedHTMLResult({id: "resultBT9", result: `Số lượng các số nguyên: ${totalInteger}`})
            break
        case 10:
            let isMorePos = isMorePositive({arr: arr})
            let displayIsMorePos = "Số lượng số dương bằng số lượng số âm"
            if (isMorePos === -1){
                displayIsMorePos = "Số lượng số dương ít hơn số lượng số âm"
            }else if (isMorePos === 1){
                displayIsMorePos = "Số lượng số dương nhiều hơn số lượng số âm"
            }
            document.getElementById("resultBT10").innerText = displayIsMorePos
            displayedHTMLResult({id: "resultBT10", result: displayIsMorePos})
            break
    }
}
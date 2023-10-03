// global variables
var n = 0
var arr = []
var choice = 0

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
    let numPostitive = countPositive(arr = arr)
    let numNegative = countPositive(arr = arr)
    return numPostitive > numNegative
}


// main process
function process(choice){
    console.log(`process called - choice = ${choice}`);
    
    switch (choice){
        case 1:
            let sum = sumPositive({arr: arr})
            document.getElementById("resultSumPositive").innerText = sum
            break
        case 2:
            let count = countPositive({arr: arr})
            document.getElementById("resultCountPositive").innerText = count
            break
        case 3:
            let minValue = findMin({arr: arr})
            document.getElementById("resultMinValue").innerText = minValue
            break
        case 4:
            let minPositiveValue = findMinPositive({arr: arr})
            document.getElementById("resultMinPositiveValue").innerText = minPositiveValue
            break
        case 5:
            let lastPositiveValue = getLastEven({arr: arr})
            let displayValue = lastPositiveValue
            if (lastPositiveValue === -1){
                displayValue = "Trong mảng không có số chẵn"
            }
            document.getElementById("resulLastEvenValue").innerText = displayValue
            break
        case 6:
            let result = handleSwitchElementById({arr: arr})
            let textStyle = "text-danger"
            if (result['status']){
                textStyle = "text-primary"
            }
            document.getElementById("resultSwitchElements").innerHTML = `<p class=${textStyle}>${result['result']}</p>`
            break
        case 7:
            let ascendingArray = quickSort({arr: arr})
            document.getElementById("resultAscendingArray").innerText = ascendingArray.join(", ")
            break
        case 8:
            let primeResult = handleFirstPrime({arr: arr})
            let primeTextStyle = "text-danger"
            if (primeResult['status']){
                primeTextStyle = "text-primary"
            }
            document.getElementById("resultPrimeNumber").innerHTML = `<p class=${primeTextStyle}>${primeResult['result']}</p>`
            break
        case 9:
            break
        case 10:
            break
    }
}

// Get length of array
function confirmLength(){
    n = parseInt(document.getElementById("input-array-length").value)
    if (n < 0){
        document.getElementById("arr-length-note").innerHTML = `<p class="text-danger">Số lượng phần tử không được là số âm!</p>`
        window.setTimeout(() => {
            document.getElementById("arr-length-note").innerText = ""
        }, 2000)
        return
    }
    if (n == 0){
        displayArrayComponent(false)
        displayMenuComponent(false)
        return
    }
    displayArrayComponent(true)
    document.getElementById("display-array-length").innerHTML = `<p class="text-primary">Chiều dài mảng: n = ${n}</p>
    `
}

function addToArray(){
    if (arr.length === n){
        document.getElementById("element-note").innerHTML = `<p class="text-danger">Không thể thêm phần tử mới!</p>`
        window.setTimeout(() => {
            document.getElementById("element-note").innerText = ""
        }, 2000)
        return
    }

    let element = parseInt(document.getElementById("input-element").value)
    if (Number.isInteger(element)){
        arr.push(element)
    }
    document.getElementById("display-array").innerHTML = `<p class="text-primary">Mảng đã nhập: ${arr.join(", ")}</p>`

    displayMenuComponent(true)
}

function resetArray(){
    n = 0
    arr = []
    document.getElementById("input-array-length").value = ""
    document.getElementById("display-array-length").innerText = ""
    document.getElementById("input-element").value = ""
    document.getElementById("display-array").innerText = ""
    
    displayArrayComponent(false)
    displayMenuComponent(false)
}

// Show/hide components

function handleDisplay(elementId, shouldDisplay){
    let displayStatus = document.getElementById(elementId).style.display
    if ((displayStatus === "block" || displayStatus === "") && !shouldDisplay){
        document.getElementById(elementId).style.display = "none"
    }else if (displayStatus === "none" && shouldDisplay){
        document.getElementById(elementId).style.display = "block"
    }
}

function displayArrayComponent(shouldDisplay){
    handleDisplay("array-element-section", shouldDisplay)
}

function displayMenuComponent(shouldDisplay){
    handleDisplay("menu-section", shouldDisplay)
}
function addto70(n){
    console.log("calculation")
    return n + 70
}

addto70(7)
addto70(7)

let cache = {}
function addTo70Memoization(n){
    if(n in cache){
        return cache[n]
    }else{
        console.log("calculation in memo")
        sum = n + 70
        cache[n] = sum
        return sum
    }
}

addTo70Memoization(7)
addTo70Memoization(7)
addTo70Memoization(7)


let counter = document.getElementById("Number")
let checkout = document.getElementById("check")
console.log(checkout)
let count = 0


function increment(){
    count += 1
    counter.textContent = count
}	

function save(){
    let countStr =  count + "-"
    checkout.textContent +=  countStr
    counter.textContent = 0
    count = 0
}

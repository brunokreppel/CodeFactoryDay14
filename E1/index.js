let arr = [1, 7, -3, 9]
let highest = [];
let hNumber = Math.max(...arr)
console.log(hNumber)

for(let i = 0; i < arr.length; i++){
    if(highest < arr[i]){
        highest = arr[i]
    }
}

console.log(highest)
// console.log(Math.max(...arr))





































function weather() {
    let numbers = Math.floor((Math.random() * 46) - 6);
    console.log(numbers);

    if (numbers < 8) {
        document.getElementById("temperature").innerHTML = "The weather today is cold.";
        document.querySelector("img:nth-child(2)").src = "img/temperature.png";
    } else if (numbers >= 9 && numbers <= 25) {
        document.getElementById("temperature").innerHTML = "The weather today is mild";
        document.querySelector("img:nth-child(2)").src = "img/cloudy.png";
    } else {
        document.getElementById("temperature").innerHTML = "The weather today is hot";
        document.querySelector("img:nth-child(2)").src = "img/hot.png";
    }
}

weather();  
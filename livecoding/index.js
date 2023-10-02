// loop

const arr = [12,20,30,40,50,60]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


for(let i = 1; i < 11; i++ ){
    if(i == 4){ 
        continue
    }
    console.log(i);
}


arr.forEach(function(val,index){ console.log(val, index)})



for(let index in arr){
    console.log(index)
}

for(let val of arr){
    console.log(val)
}

let i = 10; 
while( i < 10){
console.log(i);
i++;    
}


do{
    console.log(i);
    i++;
}
while(i < 10)



document.getElementById("h1")
h1.innerHTML = "goodbye"
h1.innerHTML += "dearlife"

const class1 = document.getElementsByClassName("test")
console.log(class1)

for(let i = 0 ; i < class1.length; i++){
    class1[i].innerHTML = "replaced";
}


let tags = document.getElementsByTagName("p");

for (let i = 0; i < tags.length; i++) {
    tags[i].innerHTML = "replaced";
}

const qSelector = document.querySelector("h1");
qSelector.innerHTML = "asdasd"

const q2 = document.querySelectorAll("test")


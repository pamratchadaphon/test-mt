function calculater() {
    const num1 = 20
    const num2 = 30
    return num1+num2
}
const sum = calculater()
console.log(sum*4);

function calculater2(num1,num2){
    return num1*num2
}
console.log(calculater2(20,30));

let arr = [1,2,3,4,5]
let max =3
let min = 3
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
        max=arr[i]
    } else if(arr[i]<min){
        min=arr[i]
    }  
}
console.log(min+" "+max);

let cat ={
    "name":"mumu",
    "age":3,
    "type":"cat"
}
let fish = {
    "name":"pupu",
    "age":4,
    "type":"fish"
}
let pet=[]
pet.push(cat)
pet.push(fish)
console.log(pet);
for (let i = 0; i < pet.length; i++) {
    if (pet[i].type=="cat") {
        pet[i].lname = "cc"
    } else {
        pet[i].lname = "ff"
    }
    console.log("เป็น "+pet[i].type+" อายุ "+pet[i].age+" ชื่อจริง "+pet[i].name+" นามสกุล "+pet[i].lname);
}
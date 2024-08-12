const name = "doga"
const repoCount = 20

console.log(name+repoCount);
 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('traffic_rider')
console.log(gameName[0]);
console.log(gameName.__proto__);//it returs the object
console.log(gameName.length);
console.log(gameName.toUpperCase());//here original value is not chnage it uses the stack it chnage the copy of that value
console.log(gameName.charAt(1));//it shows the on which position which character is present
console.log(gameName.indexOf('d'));//on which position T is present
console.log(gameName);
const newString = gameName.substring(0,4)//it print from 0 to 3 index charector
console.log(newString);

const anotherString = gameName.slice(-8,2)//it take the negative values print start form reverse if you provide negative
console.log(anotherString);

const newStringOne = " doga "
console.log(newStringOne);
console.log(newStringOne.trim());//trim is used to remove the space from both the side


const url = "https://doga.com/doga%20the_don"

console.log(url.replace('%20','_'))


console.log (url.includes('doga'))//it shows the doga word present in give string or not

console.log(gameName.split('_'));//divide the string means 




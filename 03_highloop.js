// for of 

// ["" , "" ,""]
// [{}, {},{}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = "hello"
for (const greet  of greeting) {
    console.log(`each char is ${greet}`)
}

//map

const map = new Map()
map.set('IN', "Indian")
map.set('USA', "United States of America")
map.set('FR', "France")

//console.log (map);

for (const[key , value] of map) {
    //console.log(key, ':-', value);
    
}

const myObject ={
    'game1': 'NFS',
    'Game2': 'Spiderman'
}

// for (const [kry , value] of myObject) {
//     console.log(key, ':-', value);
// }


// const map = new Map()
// map.set('IN', "Indian")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);

// }
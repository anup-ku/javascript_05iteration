const coding =["js", "ruby", "c++", "cpp"]

// coding.forEach( function  (val) {
//     console.log(val);
// } )


// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) =>{
//     console.log(item , index , arr);
// })

const myCoding =[
    {
        languageName : "javasript",
        languageFileName:"js"
    },

    {
        languageName : "python",
        languageFileName:"py"
    },

    {
        languageName : "java",
        languageFileName:"ja"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})
const fs = require('fs')

// Asynchronous
fs.readFile("./file-system/sample.txt", function(err, data){
    if(err){
        throw err
    }
    console.log(data.toString())
})

// Synchronous
console.clear()
var data = fs.readFileSync("./file-system/sample.txt")
console.log(data.toString())

// Write to file

// fs.writeFile("./file-system/test.txt","Welcome to FS module", (err, data) => {
//     if(err){
//         throw err
//     }
//     console.log("Write Operation Completed")
// })

fs.appendFile("./file-system/test.txt","Welcome to FS module \n", (err, data) => {
    if(err){
        throw err
    }
    console.log("Write Operation Completed")
})

fs.unlink("./file-system/test.txt", function(){
    console.log('Delete operation completed')
})
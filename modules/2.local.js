let log = {
    info: function(info){
        console.log(`Info: ${info}`)
    },
    warn: function(warn){
        console.log(`warn: ${warn}`)
    },
    error: function(error){
        console.log(`error: ${error}`)
    }
}

let anotherLog = {
    info: function(info){
        console.log(`Info: ${info}`)
    },
    warn: function(warn){
        console.log(`warn: ${warn}`)
    },
    error: function(error){
        console.log(`error: ${error}`)
    }
}


console.log(`module.exports :`, module.exports)

module.exports = {log, anotherLog}
// module.exports = "This is local module"
// module.exports = []
// module.exports = function(){}

module.exports.display = function(){

}
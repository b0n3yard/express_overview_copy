const fs = require('fs')
const path = require('path')
const dbpth = path.join(__dirname, '/fun.json')


function getdata(){
    const json = fs.readFileSync(path.join(__dirname, '/fun.json'), 'utf8')

    return JSON.parse(json)

}

function writedata(fnarry){

    fs.writeFile(dbpth,JSON.stringify(fnarry,null, 2), () =>{
        console.log('success')
    })
}

module.exports = {getdata: getdata, writedata: writedata}
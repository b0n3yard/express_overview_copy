
const output = $('#output')
const fun = $('#fun')
function getdata(){
$.ajax({
    url:"/api/fun",
    dataType: "json",

    success: function(data){
        console.log(data)
    //     for(let x = 0; x < data.length; x++){
    //     output.append('<p>'+ data[x].type +'</p>', )
    //     output.append('<p style = "color: white">'+ data[x].difficulty +'</p>')
    // }
    output.empty();
    data.forEach((e,x) =>{
        output.append('<div class = "all" id = "this'+ e.type +'" >')

    })
    
    data.forEach((e,x) => {
        const hi = $('#this'+ e.type)
        // console.log('#this'+ x)
        hi.append('<p>'+ e.type +'</p>' )
        hi.append('<p style = "color: white">'+ e.difficulty +'</p>')
        
        // wrapperdiv.append(output.append('<p>'+ e.type +'</p>' ) + output.append('<p style = "color: white">'+ e.difficulty +'</p>'))
    });
        
        
    }
})


function inputs(e){
    e.preventDefault()
    const typin = $('#type-input') 
    const typdiff = $('#type-difficulty') 
    
    fetch('/api/fun',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: typin.val(),
            difficulty: typdiff.val()

        })
    }).then( res => res.json()).then(data=>{
        console.log(data)
        getdata()
    })


}

fun.on('submit', inputs)
// fetch('/api/fun').then(res => res.json()).then(data => {
//         console.log(data)
//     data.forEach((funobj) =>{
//         console.log(data[data])
//     output.append('<p>'+ data[x].type +'</p>', )
//     output.append('<p style = "color: white">'+ data[x].difficulty +'</p>')
//     })
// })

//     })
 }
function init(){
    getdata()
}

init()
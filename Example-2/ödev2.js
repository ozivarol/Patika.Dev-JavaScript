
let ekle = document.querySelector("#submit")
var liste = document.querySelector("#günlük");

ekle.addEventListener("click",function(event){
    event.preventDefault()
    let veri = document.querySelector("#veri")
    addItem(veri.value)
    
    
    
})

let list = document.querySelector("#günlük")

const addItem = (bilgi) =>{
    
    let liDom = document.createElement('li')
    liDom.innerHTML = `${bilgi}`
    if(bilgi.length>25){
        renk = "danger"
    }
    else if (bilgi.length<=25 && bilgi.length >= 20){
        renk="warning"
       
    }
    else if (bilgi.length<20 && bilgi.length>=10){
        renk = "primary"

    }
    else{
        renk="success"
    }
    
    liDom.classList.add(`list-group-item`,`list-group-item-${renk}`)
    list.appendChild(liDom)


}
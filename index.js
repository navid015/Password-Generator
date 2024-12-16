const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function pwgen(){
    let password1= ""
    let password2 = ""

    let box1El = document.getElementById("box1")
    let box2El = document.getElementById("box2")

    for (let i=0; i<15; i++){
        let index1 = Math.floor(Math.random()*91)
        let index2 = Math.floor(Math.random()*91)
        
        password1 += characters[index1]
        password2 += characters[index2]   
    }

    box1El.textContent = password1
    box2El.textContent = password2
}


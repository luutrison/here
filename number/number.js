const ALLOW = "WERTYUIOPASDFGHKLZXCVBNM"
const number = document.getElementById("number").value
const button = document.getElementById("button")
const name = document.getElementById("name")


const random = () => {
    try {
        var currentName = String()

        while(currentName.length != number){
            var num = Math.floor(Math.random() * ALLOW.length)
            currentName += ALLOW[num]
        }

        if(currentName.length == number){
            const now =  Date.now()
            name.innerHTML = currentName + now
        }
    } catch (error) { console.error(error) }

}

button.addEventListener("click", () => {
    random()
})





const confirm_button = document.getElementById("confirm_button")
const list = document.getElementById("list")
const input = document.getElementById("input")

function add_item() {
    console.log("this is nice")
    if (input.value == "" || null) {
        return "Error"
    } else {
        list.innerHTML += `<li>${input.value}</li>`
    }
    
    input.value = null
}
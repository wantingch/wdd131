let themeSelector = document.getElementById("mode")
function changeTheme() {
    let theme=themeSelector.value
if (theme=="dark"){
    let body=document.getElementById("body")
    
    body.classList.add("dark")
    let logo=document.getElementById("logo")
    logo.setAttribute("src", "./byui-logo_white.png")
}else{
    let body=document.getElementById("body")
    
    body.classList.remove("dark")
    let logo=document.getElementById("logo")
    logo.setAttribute("src", "./byui-logo_blue.webp")
}
}

themeSelector = document.getElementById("mode")

themeSelector.addEventListener("cshange", changeTheme)
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
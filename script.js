let darkmode = document.querySelector("#darkmode")

async function ChangeTheme(){

    let color1 = document.querySelectorAll(".color1")
    let color2 = document.querySelectorAll(".color2")

    color1.forEach(elem => {
        elem.style.backgroundColor = "white"  // Completer le light/dark mode
    })

}

darkmode.addEventListener("click", ChangeTheme)

/**let area = document.querySelector("#slt")

async function Takedata(){
    const l = await fetch("https://restcountries.com/v3.1/name/france")
    const data = await l.json()
    console.log(data)

    console.log(data[0].flags.png)
    area.setAttribute("src", `${data[0].flags.png}`)
}

Takedata() */



/**let area = document.querySelector("#slt")

async function Takedata(){
    const l = await fetch("https://restcountries.com/v3.1/name/france")
    const data = await l.json()
    console.log(data)

    console.log(data[0].flags.png)
    area.setAttribute("src", `${data[0].flags.png}`)
}

Takedata() */

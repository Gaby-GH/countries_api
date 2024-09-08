// Function to transfere information to the pays.html page

async function TransfereInformations(id){

    let key = document.querySelector(`#${id}`).firstElementChild.id

    for (let i of database){
        if (i.name.common == key){
            localStorage.setItem("InfosPays", JSON.stringify(i))
        }
    }
}


// Display all the countries

let database = []
async function Takedata(){
    let data = await fetch("https://restcountries.com/v3.1/all")
    let countries = await data.json()
            
    let n = 4
    let container = undefined
    let grid_country = document.querySelector("#grid_country")
    let temp_container = document.querySelector("#temp_container")
    let temp_pays = document.querySelector("#temp_pays")
    for (let i of countries){

        n ++
        if (n > 4){
            if (container != undefined){
                grid_country.append(container)
            }
            container = temp_container.content.cloneNode(true)
            n = 1
        }

        let pays = temp_pays.content.cloneNode(true)

        let flag = pays.querySelector(".img_flag")
        flag.src = i.flags.svg
        let country_name = pays.querySelector(".country_name")
        country_name.textContent = i.translations.fra.common
        let stat_population = pays.querySelector(".stat_population")
        stat_population.textContent = i.population
        let stat_region = pays.querySelector(".stat_region")
        stat_region.textContent = i.region
        let stat_capital = pays.querySelector(".stat_capital")
        stat_capital.textContent = i.capital

        pays.firstElementChild.id = i.translations.fra.common
        pays.firstElementChild.firstElementChild.id = i.name.common

        container.firstElementChild.append(pays)

        //

        database.push(i)
    }

    console.log(database)
}

Takedata()







// Darkmode

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

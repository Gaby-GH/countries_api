// Function to transfere information to the pays.html page

async function TransfereInformations(id){

    let key = document.querySelector(`#${id}`).firstElementChild.id
    localStorage.setItem("country", key)
}

let DataBase = undefined


// Display all the countries

let database = []
async function Takedata(){
    let data = await fetch("https://restcountries.com/v3.1/all")
    let countries = await data.json()
    DataBase = [...countries]
    console.log(DataBase)
            
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
}

Takedata()

// Research and selector

async function DisplayCountries(countries){

    let grid_country = document.querySelector("#grid_country")
    grid_country.innerHTML = ""

    let temp_container = document.querySelector("#temp_container")
    let temp_country = document.querySelector("#temp_pays")


    let container = undefined
    n = 4
    for (let i of countries){

        n++

        if (n > 4){
            if (container != undefined){
                grid_country.append(container)
            }

            container = temp_container.content.cloneNode(true)
            n = 1
        }

        let pays = temp_country.content.cloneNode(true)

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
    }
}

// Research
let div_search = document.querySelector("#div_search")
let input_search = document.querySelector("#input_search")
let btn_search = document.querySelector("#btn_search")

async function Research(){

    let result = [...DataBase]
    let ResearchWord = input_search.value.toLowerCase()

    for (let i of DataBase){
        
        let country_name = i.translations.fra.common.toLowerCase()
        let index = 0

        for (let y of ResearchWord){
            if (country_name.includes(y)){
                index++
            }
        }

        if (index < ResearchWord.length){
            let index = result.indexOf(i)
            result.splice(index, 1)
        }
    }

    DisplayCountries(result)
}

btn_search.addEventListener("click", Research)

// Faire avec la touche entree

/*window.addEventListener("keydown", () => {


    
})*/

// Selector

let selector = document.querySelector("#select_region")

async function FilterByRegion(region){

    let result = []

    for (let i of DataBase){
        if (i.region == region){
            result.push(i)
        }
    }

    DisplayCountries(result)
}

selector.addEventListener("click", () => {

    if (selector.value != "all"){
        FilterByRegion(selector.value)
    }else{
        DisplayCountries(DataBase)
    }
})








// Darkmode


// Pour darkmode utiliser javascript et les classes

let darkmode = document.querySelector("#darkmode")

async function ChangeTheme(){

    let color1 = document.querySelectorAll(".color1")
    let color2 = document.querySelectorAll(".color2")

    color1.forEach(elem => {
        elem.style.backgroundColor = "white"  // Completer le light/dark mode
    })

}

darkmode.addEventListener("click", ChangeTheme)



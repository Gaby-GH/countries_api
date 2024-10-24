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

        // Verifier theme couleur avant ajouter
        console.log(pays)
        if (color == "W"){
            pays.firstElementChild.classList.remove("colorAB")
            pays.firstElementChild.classList.add("colorAW")

            pays.querySelectorAll("p").forEach((element) => {
                element.style.color = "black"
            })
        }

        container.firstElementChild.append(pays)


        // Si element dernier de la liste ajouter le container
        if (countries.length == countries.indexOf(i) + 1){
            grid_country.append(container)
        }
    }
}

// Research
let div_search = document.querySelector("#div_search")
let input_search = document.querySelector("#input_search")
let btn_search = document.querySelector("#btn_search")

async function Research(){

    let result = []
    let ResearchWord = input_search.value.toLowerCase()

    if (ResearchWord != ""){
        for (let i of DataBase){
        
            let country_name = i.translations.fra.common.toLowerCase()
            
            if (country_name.includes(ResearchWord)){
                result.push(i)
            }    
        }
    }else{
        result = [...DataBase]
    }

    console.log(result)

    DisplayCountries(result)
}

btn_search.addEventListener("click", Research)

// Faire avec la touche entree

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && input_search.value != ""){
        Research()
    }
})

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


// Finir dark et light mode (reprendre le travail deja commence, enlver les commentaires)
// puis faire la version pour tel



let darkmode = document.querySelector("#darkmode")
let color = "B"

async function ChangeTheme(){

    if (color == "B"){
        let colorAB = document.querySelectorAll(".colorAB")
        let colorBB = document.querySelectorAll(".colorBB")
        let p = document.querySelectorAll("p")

        document.querySelector("#input_search").classList.add("placeholderW")
        document.querySelector("#input_search").classList.remove("placeholderB")

        document.querySelectorAll(".svg").forEach((element) => {
            console.log(element.attributes[5].value)
            element.attributes[5].value = "#000000"
        })

        document.querySelectorAll("option").forEach((element) => {
            element.style.color = "black"
        })

        colorAB.forEach((element) => {
            element.classList.add("colorAW")
            element.classList.remove("colorAB")
        })

        colorBB.forEach((element) => {
            element.classList.add("colorBW")
            element.classList.remove("colorBB")
        })

        p.forEach((element) => {
            element.style.color = "black"
        })

        color = "W"

    }else if (color == "W"){
        let colorAW = document.querySelectorAll(".colorAW")
        let colorBW = document.querySelectorAll(".colorBW")
        let p = document.querySelectorAll("p")

        document.querySelector("#input_search").classList.add("placeholderB")
        document.querySelector("#input_search").classList.remove("placeholderW")

        document.querySelectorAll(".svg").forEach((element) => {
            console.log(element.attributes[5].value)
            element.attributes[5].value = "#FFFFFF"
        })

        document.querySelectorAll("option").forEach((element) => {
            element.style.color = "white"
        })

        colorAW.forEach((element) => {
            element.classList.add("colorAB")
            element.classList.remove("colorAW")
        })

        colorBW.forEach((element) => {
            element.classList.add("colorBB")
            element.classList.remove("colorBW")
        })

        p.forEach((element) => {
            element.style.color = "white"
        })

        color = "B"

    }
    
    console.log("Theme change")
}

darkmode.addEventListener("click", ChangeTheme)



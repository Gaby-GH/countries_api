// Init
/*
let DataBase = localStorage.getItem("InfosPays")
DataBase = JSON.parse(DataBase)

// Title page
let title = document.querySelector("title")
title.innerHTML = DataBase.name.common

// Flag
let flag = document.querySelector("#flag")
flag.src = DataBase.flags.svg

// Name
let title_pays = document.querySelector("#p_country_name")
title_pays.textContent = DataBase.name.common

// Infos

let native = document.querySelector("#native")
let n = Object.keys(DataBase.name.nativeName)
native.textContent = Object.values(DataBase.name.nativeName)[0].common


let population = document.querySelector("#population")
population.textContent = DataBase.population

let region = document.querySelector("#region")
region.textContent = DataBase.region

let sub_region = document.querySelector("#sub_region")
sub_region.textContent = DataBase.subregion

let capital = document.querySelector("#capital")
capital.textContent = DataBase.capital[0]

let domain = document.querySelector("#domain")
domain.textContent = DataBase.tld[0]

let currencies = document.querySelector("#currencies")
currencies.textContent = Object.values(DataBase.currencies)[0].name

let language = document.querySelector("#language")
language.textContent = Object.values(DataBase.languages)[0]

// Border country

let borders = DataBase.borders
console.log(DataBase)
let tempborder = document.querySelector("#temp_btn_border")
let div_border = document.querySelector("#div_border")

if (Array.isArray(borders)){
    for (let b of borders){

        let btn = tempborder.content.cloneNode(true)
        btn.querySelector(".p_country_border").textContent = b
    
        div_border.append(btn)
    }
}
*/
/*
async function DisplayFrance(pays){

    let file = await fetch("https://restcountries.com/v3.1/name/France") 
    let france  = await file.json()                                      
                                                                        // + faire un systeme de filtre et recherche
    console.log(france)
}

DisplayFrance()*/


let NameCountry = localStorage.getItem("country")

async function GetCountry(pays){

    let file = await fetch(`https://restcountries.com/v3.1/name/${pays}`)
    let DataPays = await file.json()
    
    console.log(DataPays)

    DisplayCountry(DataPays[0])
}

async function DisplayCountry(data){

    // Title page
    let title = document.querySelector("title")
    title.innerHTML = data.name.common

    // Flag
    let flag = document.querySelector("#flag")
    flag.src = data.flags.svg

    // Name
    let title_pays = document.querySelector("#p_country_name")
    title_pays.textContent = data.name.common

    // Infos

    let native = document.querySelector("#native")
    let n = Object.keys(data.name.nativeName)
    native.textContent = Object.values(data.name.nativeName)[0].common


    let population = document.querySelector("#population")
    population.textContent = data.population

    let region = document.querySelector("#region")
    region.textContent = data.region

    let sub_region = document.querySelector("#sub_region")
    sub_region.textContent = data.subregion

    let capital = document.querySelector("#capital")
    capital.textContent = data.capital[0]

    let domain = document.querySelector("#domain")
    domain.textContent = data.tld[0]

    let currencies = document.querySelector("#currencies")
    currencies.textContent = Object.values(data.currencies)[0].name

    let language = document.querySelector("#language")
    language.textContent = Object.values(data.languages)[0]


    // Borders Country

    async function SearchBorders(tag) {
        let response = await fetch(`https://restcountries.com/v3.1/alpha/${tag}`)
        let dico_pays = await response.json()

        return dico_pays[0].name.common
    }

    async function TransfereInformations(key){
        localStorage.setItem("country", key)    // Finir avec le probleme de transfere d'info
    }                                           // puis finir avec barre de recherche et 
                                                // pour selector voir sur le site de l'api 
    async function DisplayBorders(list_borders){
        let div_border = document.querySelector("#div_border")
        let temp_border = document.querySelector("#temp_btn_border")

        for (let k of list_borders){
            let btn_border = temp_border.content.cloneNode(true)
            btn_border.querySelector(".p_country_border").textContent = k
            btn_border.Onclick = TransfereInformations()

            div_border.append(btn_border)
            div_border.lastElementChild.id = k
        }

    }

    if ("borders" in data){
        
        let borders_tag = data.borders
        let borders = []

        for (let tag_name of borders_tag){
            borders.push(await SearchBorders(tag_name) )
        }
        console.log(borders)

        DisplayBorders(borders)
    }

}

GetCountry(NameCountry)


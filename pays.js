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
                                          
    async function DisplayBorders(list_borders){
        let div_border = document.querySelector("#div_border")
        let temp_border = document.querySelector("#temp_btn_border")

        for (let k of list_borders){
            let btn_border = temp_border.content.cloneNode(true)
            btn_border.querySelector(".p_country_border").textContent = k

            div_border.append(btn_border)
            div_border.lastElementChild.id = k
            div_border.lastElementChild.addEventListener("click", (event) => {
                console.log(event.currentTarget)
                localStorage.setItem("country", event.currentTarget.id)
            })
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


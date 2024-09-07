// Init

let data = localStorage.getItem("CountryData")
data = JSON.parse(data)

// Title page
let title = document.querySelector("title")
title.innerHTML = data.name

// Flag
let flag = document.querySelector("#flag")
flag.src = data.flag

// Name
let title_pays = document.querySelector("#p_country_name")
title_pays.textContent = data.name

// Infos

async function GetInfos(){

    let file = await fetch(`https://restcountries.com/v3.1/all`)  // <--- resoudre BUG
    let countries = await file.json()

    /*console.log(`https://restcountries.com/v3.1/name/${data.key}`)
    let file = await fetch(`https://restcountries.com/v3.1/name/${data.key}`)
    let pays = await file.json()*/ 

    console.log(countries)
}

GetInfos()

/*let native = document.querySelector("#native")
native.textContent = data.native

let native = document.querySelector("#")
let native = document.querySelector("#")
let native = document.querySelector("#")
let native = document.querySelector("#")
let native = document.querySelector("#")
let native = document.querySelector("#")*/

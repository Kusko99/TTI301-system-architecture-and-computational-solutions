const axios = require("axios")
//Colocar aqui a chave de API
const appid = ""
//Cidade desejada
const q = "Itu"
//Unidade de medida temperatura
const units = "metric"
//idioma
const lang = "pt_BR"
//quantidade de resultados
const cnt = "10"
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

//faz a requisição
axios  
    .getAdapter(url)
    .then((res) =>{
        console.log(res)
        return res.data
    })
    .then((res)=>{
        console.log(res.cnt)
        return res
    })
    .then((res)=>{
        console.log(res.cnt)
        return res["list"]
    })
    .then((res) => {
        for (let previsao of res){
            console.log(
                `${new Date(+previsao.dt * 1000).toLocaleString()},
                ${'Min: ' + previsao.main.temp_min}\u00B0C,
                ${'Max: ' + previsao.main.temp_max}\u00B0C,
                ${'Hum: ' + previsao.main.humidity}%,
                ${previsao.weather[0].description}`
            )
        }
        return res
    })
    .then((res) =>{
        const lista = res.filter(r => r.main.feels_like >= 30)
        console.log (`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
    })

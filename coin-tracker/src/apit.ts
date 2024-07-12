const BASEURL= 'https://api.coinpaprika.com/v1'

export async function fetchCoins(){
    const response= await fetch(`${BASEURL}/coins`)
    const json= await response.json()
    return json
};

export function fetchCoins2(){
    return fetch(`${BASEURL}/coins`).then((response) => response.json())
};

export function fetchCoinInfo(coinId:string){
    return fetch(`${BASEURL}/coins/${coinId}`).then((response)=>response.json())
};

export function fetchPriceData(coinId:string){
    return fetch(`${BASEURL}/tickers/${coinId}`).then((response)=>response.json())
}

export function fetchChartData(coinId:string){
    //const endDate = Math.floor(Date.now()/ 1000 )
    //const startDate = endDate - 60*60*24*7
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then((response)=>response.json())
}
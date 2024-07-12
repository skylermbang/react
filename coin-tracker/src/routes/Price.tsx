import { useQuery } from "react-query";
import styled from "styled-components"
import { fetchPriceData } from "../apit";
const Container = styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
`

interface PriceProps {
        coinId: string;  
  }

  interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  }
  
  

function Price({ coinId }: PriceProps){
    const {isLoading:priceLoading,data}=useQuery<PriceData>(["priceData",coinId], ()=> fetchPriceData(coinId))
    console.log(data)
    return <h1> <Container>
        <li> All Time Highest Price :  $ {data?.quotes.USD.ath_price}</li>
        <li> Price :  $ {data?.quotes.USD.price}</li>
        <li> Market Cap : $ {data?.quotes.USD.market_cap}</li>
        <li> Change 1h : {data?.quotes.USD.percent_change_1h} %</li>
        <li> Change 6h : {data?.quotes.USD.percent_change_6h} %</li>
        <li> Change 12h: {data?.quotes.USD.percent_change_12h} %</li>
        <li> Change 1day : {data?.quotes.USD.percent_change_24h} %</li>
        <li> Change 7days : {data?.quotes.USD.percent_change_7d} %</li>
        <li> Change 30days : {data?.quotes.USD.percent_change_30d} %</li>
        <li> Volume : {data?.quotes.USD.volume_24h}</li>
        
        </Container></h1>
}

export default Price
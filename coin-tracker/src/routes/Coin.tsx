import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

const Header = styled.div`
    height:10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    
`

const Container = styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
`
const Loading = styled.div`
    height:10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
`
const Title = styled.h1`
    color:${props=>props.theme.accentColor};
    font-size: 48px;
`;


interface RouteState {
  name:string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
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


function Coin() {
  const [loading, setLoading]= useState(true);
  const [info, setInfo]= useState<InfoData>();
  const [price, setPrice]= useState<PriceData>();
  const { coinId } = useParams<RouteParams>();
  const {state} = useLocation<RouteState>();
 useEffect(()=>{
  (async()=>{
    const info= await(
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
    setInfo(info)
    const price= await(
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
    setPrice(price)    
    setLoading(false)  
    console.log(info)
    console.log(price)

  })()

 },[])


  return(
    <Container>
    <Header>
        <Title> {state?.name || "Loading.."}</Title>
    </Header>    
    {loading? <Loading> Loading the Coin Data ... </Loading>: price?.name}
    </Container>
  )
}
export default Coin;
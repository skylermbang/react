import { useEffect, useState } from "react";
import { useParams,Switch, Route} from "react-router";
import { Link, useHistory, useLocation,useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchPriceData } from "../apit";



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

const CoinDetail= styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
    
`


const Box1 = styled.div`
  padding: 20px 20px;
  max-width: 1280px;
  font-size: 1.3rem;
  margin: 0 auto;
  display: flex;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 100px;
    margin-right: 20px; /* Adjust as needed for spacing */
  }
  background-color: ${(props) => props.theme.componentBgColor}; // Use theme property
  border-radius: 15px;
`;
const Box2= styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 30px auto;
`
const Box3= styled.div`
    padding: 20px 20px;
    max-width:1280px;
    font-size: 1.3rem;
    margin: 0 auto;
    display: flex;
    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Corrected alignment */
    width:100%
    };
    li {
      width:100px;
      margin-right: 20px; /* Adjust as needed for spacing */
    };

    li:first-child {
    //border: solid black 2px;
    //margin-right: 150px; /* Adjust as needed for spacing */
  }
  li:nth-child(2) {
    //border: solid black 2px;
  }
  background-color: ${(props) => props.theme.componentBgColor}; // Use theme property
    border-radius :15px;

`

const Desc = styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
    font-size:1.2rem;
`

interface RouteState {
  name:string;
}

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;



const BtnContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 300px;
  display: flex;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.componentBgColor}; // Use theme property
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const BackBtn = styled.button`
  width: 60px;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.componentBgColor}; // Use theme property
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
`;

const ThemeBtn = styled.button`
  width: 60px;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.componentBgColor}; // Use theme property
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
`;

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


function Coin({toggleTheme}) {
//   const [loading, setLoading]= useState(true);
//   const [info, setInfo]= useState<InfoData>();
//   const [price, setPrice]= useState<PriceData>();
   const { coinId } = useParams<RouteParams>();
   const {state} = useLocation<RouteState>();
   const history = useHistory();
   /*
The useLocation hook from react-router-dom provides the current URL details. 
The state property lets you pass data to a new route,
 similar to query parameters. This data can be any JavaScript object.*/
   const priceMatch = useRouteMatch("/:coinId/price")
   const chartMatch = useRouteMatch("/:coindId/chart")
//  useEffect(()=>{
//   (async()=>{
//     //error handling 
//     //race-condition 
//     const info= await(
//       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
//     setInfo(info)
//     const price= await(
//         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
//     setPrice(price)    
//     setLoading(false)  
  

//   })()

//  },[coinId])

const {isLoading: infoLoading,data:infoData}=useQuery<InfoData>(["info",coinId], ()=> fetchCoinInfo(coinId))
const {isLoading:priceLoading,data:priceData}=useQuery<PriceData>(["price",coinId], ()=> fetchPriceData(coinId))
 //this is best practice put the depdence variable here  
 //we know coinId never change it gets from its parent
 const loading= infoLoading || priceLoading
 const handleBackClick = () => {
  history.push("/");
};
  return(
    <Container>
    <Header>
        <Title> {state?.name ? state.name : loading? "Loading...":infoData?.name}</Title>
        <BtnContainer>
        <BackBtn onClick={handleBackClick}>HOME</BackBtn>
        <ThemeBtn onClick={toggleTheme}>THEME</ThemeBtn>
        </BtnContainer>
    </Header>    
    {loading? <Loading> Loading the Coin Data ... </Loading>: 
    <CoinDetail>
        <Box1>
          <ul>
            <li> Rank :  {infoData?.rank}</li> 
            <li> Symbol : {infoData?.symbol}</li> 
            <li> Open Source : {infoData?.open_source?"Yes" :"No"}</li>
          </ul>
        </Box1>
        <Box2> <Desc> {infoData?.description}</Desc></Box2>
        <Box3>
        <ul>
            <li> Total Supply :   {priceData?.total_supply}</li> 
            
            <li> Max Supply : {priceData?.max_supply} </li>
          </ul>
        </Box3>
       </CoinDetail>}
      
       <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
       <Switch>
       <Route path={`/:coinId/price`}>
          <Price coinId={coinId}/>
        </Route>
        <Route path={`/${coinId}/chart`}>

          <Chart coinId={coinId}/>
        </Route>
       </Switch>
    </Container>
  )
}
export default Coin;
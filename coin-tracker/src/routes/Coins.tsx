import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { fetchCoins2 } from "../apit";
import { useQuery } from "react-query";

const Title = styled.h1`
    color:${props=>props.theme.accentColor};
    font-size: 48px;
`;

const Container = styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
`

const Header = styled.div`
    height:10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    
`

const CoinsList = styled.ul``

const Coin = styled.li`
    background-color:white;
    color:${(props)=> props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a{
        display:flex;
        align-content: center;
        transition: color 0.25s ease-in;
        display:block;
        padding:20px;
    }
    &:hover{
        a{
            color:${(props)=>props.theme.accentColor}
        }
    }
`

const Loading = styled.div`
    height:10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
`

interface CoinInterface{
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Img = styled.img`
    width:25px;
    height:25px;
    margin-right: 10px;
`



function Coins(){
    //this can be removed and just use the react -query 
    // const [coins, setCoins]= useState<CoinInterface[]>([]);
    // const [loading, setLoading]= useState(true);
    // useEffect(()=>{
    //     (async()=>{
    //      const response= await fetch("https://api.coinpaprika.com/v1/coins")
    //      const json= await response.json()
    //      //axios will return in json but fetch will have to convert to json
    //      setCoins(json.slice(0,99))
    //      setLoading(false)
    //     })();
    // }   ,[])

    const {isLoading,data}=useQuery<CoinInterface[]>("allCoins",fetchCoins2)


    return (
        <Container>
            <Header>
                <Title>  Coin </Title>
            </Header>    
            {isLoading? <Loading> Loading the Coin Data ... </Loading>: <CoinsList>
                {data?.slice(0,99).map((coin)=>(
                      <Coin key={coin.id}> 
                        <Link to={{
                            pathname:`/${coin.id}`,
                            //sending data to :coin screen
                            state:{name:coin.name}
                            }}> 
                        <Img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} />
                        {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinsList>}
        </Container>
    )
}

export default Coins
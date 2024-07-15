
Update Route paths to use coinId dynamically:


<Switch>
  <Route path={`/:coinId/price`}>
    <Price />
  </Route>
  <Route path={`/:coinId/chart`}>
    <Chart />
  </Route>
</Switch>
Use Link to navigate correctly:


<Link to={`/${coinId}/price`}>Price</Link>
<Link to={`/${coinId}/chart`}>Chart</Link>
This enables dynamic nested URLs.


React Query : 

loading use state and query , user effect dont need 
npm i react-query

1. In the index
import { QueryClient,QueryClientProvider } from "react-query";
const queryClinet = new QueryClient()
and wrap all of your app with this 


2. Create fetcher 
3. Use it 

- it store the data in cache 


APEXCHARTS for visualizing the data in javascript
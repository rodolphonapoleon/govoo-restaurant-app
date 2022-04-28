import Dishes from "../../components/dishes";
import { useRouter } from 'next/router'
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import Cart from "../../components/cart";
import { useState } from "react";
import { InputGroup, InputGroupAddon,Input} from "reactstrap";

export default function Restaurant() {

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    // const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});

    const router = useRouter();
    const restaurantID = router.query.id;
    // const renderDishes = (restaurantID) => {
    //     return (<Dishes restId={restaurantID}> </Dishes>)
    //   };
      const [query, setQuery] = useState("");

    return (<> 
    <ApolloProvider client={client}>
    <h1>Restaurant {restaurantID}</h1>
    <div className="search">
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                    placeholder="Search for dishes"
                />
                </InputGroup><br></br>
            </div>
            <Dishes restId={restaurantID} search={query}> </Dishes>
    <Cart> </Cart>
    </ApolloProvider>
    </>)
}
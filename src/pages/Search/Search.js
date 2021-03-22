import React, {useState, useEffect} from 'react'
import {FirstSection, RowGrid, TitlePage, CardContainerGrid2, Pagination, PaginationItem } from './Search.elements';
import { Container, BackMenu, H2 } from '../../globalStyles';
import { Card, SideBarFilter } from "../../components";
import API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useFilter } from '../../providers/filterContext';

const Search = () => {

  const { checkedStars, isCheck } = useFilter();

  let {id, city} = useParams();

  const [allData, setAllData] = useState([]);

  const fiters = (perStars = 0, perPrice = 0) => {
    
    if ( perPrice !== 0 ) {
      let filteredPrice = allData.filter( restaurants => perPrice === parseInt(restaurants.restaurant.price_range) )

      setAllData(filteredPrice)

    } else if (perStars !== 0 ) {
      let filteredStars = allData.filter( restaurants => perStars === parseInt(restaurants.restaurant.user_rating.aggregate_rating) )

      setAllData(filteredStars)

    } else if ( perStars !== 0 && perPrice !== 0) {

      let filterBoth = allData.filter( restaurants => perStars === parseInt(restaurants.restaurant.user_rating.aggregate_rating) && perPrice === parseInt(restaurants.restaurant.price_range) )

      setAllData(filterBoth)

    }
  }

  useEffect( async () => {
    let userKey = '77576b2dae845bf32c1de0795a7753e1'

    await API.get(`search?city_id=${id}&establishment_id=1&order=asc&start=0&count=20`, {
      headers: {
        'user-key': `${userKey}`,
        "content-type": "application/json"
      }

    }).then(response => {
      setAllData(response.data.restaurants);
      fiters(checkedStars, isCheck);
    })
  }, [checkedStars, isCheck])

  return (
    <>
      <BackMenu />
      <FirstSection>
        <Container>
          <TitlePage>RESULTS FOR: <span>{city}</span> </TitlePage>
          <RowGrid >
            <SideBarFilter />
            <div>
              <CardContainerGrid2>

                {allData.length > 0 ?  allData.map((restaurants, i) =>
                  <Card
                    key={i}
                    title={restaurants.restaurant.name }
                    stars={parseInt(restaurants.restaurant.user_rating.aggregate_rating)}
                    priceNone="none"
                    adress={restaurants.restaurant.location.address}
                    textBtn="ORDER NOW"
                  />
                ) : <H2 main>Nenhum resultado</H2>}

              </CardContainerGrid2>

              <Pagination>
                <PaginationItem active>1</PaginationItem>
                <PaginationItem>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationItem>4</PaginationItem>
              </Pagination>
            </div>
          </RowGrid>
        </Container>
      </FirstSection>
    </>
  )
}

export default Search;

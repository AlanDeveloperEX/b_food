import React, {useState, useEffect} from 'react'
import {FirstSection, RowGrid, TitlePage, CardContainerGrid2, Pagination, PaginationItem } from './Search.elements';
import { Container, BackMenu, H2 } from '../../globalStyles';
import { Card, SideBarFilter } from "../../components";
import API from '../../services/api';
import { useParams } from 'react-router-dom';
import { useFilter } from '../../providers/filterContext';

const Search = () => {

  const { checkedStars, isCheck } = useFilter();

  let {city, id} = useParams();

  const [allData, setAllData] = useState([]);
  const [fiteredData, setFiteredDataData] = useState([]);

  const fiters = (perStars = 0, perPrice = 0) => {
    
    if ( perStars !== 0 && perPrice !== 0) {
      let filteredPrice = allData.filter( restaurants => perPrice === parseInt(restaurants.restaurant.price_range) && perStars === parseInt(restaurants.restaurant.user_rating.aggregate_rating))

      return setFiteredDataData(filteredPrice)

    } else if (perStars !== 0 ) {
      let filteredStars = allData.filter( restaurants => perStars === parseInt(restaurants.restaurant.user_rating.aggregate_rating) )

      return setFiteredDataData(filteredStars)

    } else if ( perPrice !== 0 ) {

      let filterBoth = allData.filter( restaurants => perPrice === parseInt(restaurants.restaurant.price_range) )

      return setFiteredDataData(filterBoth)

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
      setFiteredDataData(response.data.restaurants);
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

                {fiteredData.length > 0 ?  fiteredData.map((restaurants, i) =>
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

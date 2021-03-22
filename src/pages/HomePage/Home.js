import React from 'react';
import { Hero, SearchInput, Card } from "../../components";
import { FirstSection, SectionContainer, DivBlock, SecondSection, ThirdSection } from './Home.elements';
import { H2, PText, Button, CardContainer } from '../../globalStyles';

const Home = () => {

  return (
    <>
      <Hero 
        title="Get Cashback up to 50%"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <FirstSection>
        <SectionContainer>
          <DivBlock left>
            <H2 main>Big Burger</H2>
            <PText main>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</PText>
            <Button normal big>ORDER NOW</Button>
          </DivBlock>
          <DivBlock>
            <img src="./assets/side_img.png" alt="burger"/>
          </DivBlock>
        </SectionContainer>
      </FirstSection>

      <SecondSection id="search">
        <SectionContainer column>
          <H2>Search the Best Burgers</H2>
          <PText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</PText>
          <SearchInput Name="city" Placeholder="EX: SÃO PAULO"  />
          <Button big>
            SEARCH
          </Button>
        </SectionContainer>
      </SecondSection>

      <ThirdSection>
        <SectionContainer column>
          <H2 main>Popular Package</H2>
          <CardContainer>

            <Card
              title="PACKAGE"
              price="R$ 20.00"
              prevDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              textBtn="ORDER NOW"
              rankNone="none"
            />

            <Card
              title="PACKAGE II"
              price="R$ 50.00"
              prevDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              textBtn="ORDER NOW"
              rankNone="none"
            />

            <Card
              title="PACKAGE III"
              price="R$ 80.00"
              prevDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              textBtn="ORDER NOW"
              rankNone="none"
            />

          </CardContainer>
        </SectionContainer>
      </ThirdSection>

    </>
  )
}

export default Home;

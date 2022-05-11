import React from 'react'
import useFetch from './CustomHooks/useFetch';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import "@splidejs/react-splide/css";

function Vaggie() {
  const {data} = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${ process.env.REACT_APP_API_KEY || process.env.REACT_APP_API_SECOND_KEY ||  process.env.REACT_APP_API_THIRD_KEY}&number=15`, 'vaggie');
  return (
    <Wrapper>
      <h3 style={{marginBottom: '1rem'}}>Vaggie Picks</h3>
      <Splide options={{perPage: 4, arrows: false, pagination: false, drag: 'free', gap: '3rem'}}>
        {data.map( ( item ) => (
          <SplideSlide key={item.id}>
            <Card>
              <Link to={'/recipes/' + item.id}>
                <p>{item.title}</p>
                <img src={item.image} alt="" />
              </Link>
              <Gradient />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute; z-index: 10; left: 50%; bottom: 0%;
    transform: translateX(-50%);
    color: #fff; text-align: center; font-weight: 600;
    font-size: 1rem; height: 40%; display: flex; align-items: center; justify-content: center;
  }
`;

const Gradient = styled.div`
  z-index: 3; position: absolute; width: 100%; height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Vaggie
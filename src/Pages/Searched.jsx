import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Searched() {
    const [searched, setSearched] = useState( [] );

    const {theme} = useContext( ThemeContext );
    console.log(theme)
    let params = useParams();
    useEffect(() => {
        getCuisine(params.search)
    }, [params.search])

    const getCuisine = async (name) => {
        const api = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${  process.env.REACT_APP_API_KEY || process.env.REACT_APP_API_SECOND_KEY ||  process.env.REACT_APP_API_THIRD_KEY }&query=${ name }` );
        const data = await api.json();
        setSearched( data.results )
    }

    const reanderElements = searched.map( ( item ) => (
        <Card key={item.id}>
            <Link to={'/recipes/' + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
            </Link>
        </Card>
    ) );

  return (
      <Grid>
          {searched.length === 0 ? (<div id={theme} className='err'>Item Not Found</div>) :reanderElements}
      </Grid>
  )
}

const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 3rem;

  .err {
      height: 49vh;
  }
`;


const Card = styled.div`
  img {
    width: 100%; border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 { text-align: center; padding: 1rem;}
`;

export default Searched
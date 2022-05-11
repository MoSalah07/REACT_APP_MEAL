import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Recipes() {
    const [details, setDetails] = useState( [] );
    const [activeTab, setActiveTab] = useState( 'instructions' );
    
    let params = useParams();

    useEffect(() => {
        getDetails()
    }, [params.name] );
    

    const getDetails = async() => {
        const api = await fetch( `https://api.spoonacular.com/recipes/${ params.name }/information?apiKey=${ process.env.REACT_APP_API_KEY }` );
        const data = await api.json();
        console.log( data )
        setDetails( data );
    }
    
  return (
      <DetailWrapper animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
          <div>
              <h2>{details.title}</h2>
              <img src={details.image} alt="" />
          </div>
          <Info>
              <ContentBtn>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab( 'instructions' )}>instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab( 'ingredients' )}>ingredients</Button>
              </ContentBtn>
              {activeTab === 'instructions' && (
                  <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}} >
                      <h3 style={{marginBottom: '1rem'}} dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                      <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                  </motion.div>
              )}
              {activeTab === 'ingredients' && (
                  <motion.ul animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
                      {details.extendedIngredients.map((item) => (
                          <li key={item.id}>{item.original}</li>
                      ))}
                  </motion.ul>
              )}
          </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
    display: flex; justify-content: center; align-items: center; flex-wrap: wrap;
    flex-direction: column;
    padding: 1rem;

    > div:first-of-type{
        margin: 1rem 0 3rem;
    }

    > div:nth-of-type(2) {
        margin: 0;
        padding: 1rem
        text-align: center;
    }

    img {
        max-width: 100%;
    }
    
    .active {
        background: linear-gradient(35deg, #494949, #313131); color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
    }
    li { font-size: 1.2rem; line-height: 2.5rem}

    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131; background: #fff;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;

`;

const ContentBtn = styled.div`
    display: flex; justify-content: center; align-items: center; 
    margin-bottom: 1rem;
`;

export default Recipes
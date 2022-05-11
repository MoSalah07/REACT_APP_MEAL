import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


function Search() {
  const [input, setInput] = useState( '' );

  const navigate = useNavigate();

  const handelForm = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <FormStyle onChange={handelForm}>
      <div>
        <FaSearch style={{color: '#fff', position: 'relative', top: '50px'}}/>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 10rem; 
    div {
        width: 100%
        position: relative;
    }

    input {
        border:none; border-radius: 1rem; outline: none;
        background: linear-gradient(35deg, #494949, #313131); color: #fff;
        font-size: 1.5rem;
        padding: 1rem 3rem;
        width: 100%
    }

    svg {
        position: absolute;
        top: 50%; left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export default Search
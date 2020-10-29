import React from 'react';
import styled from 'styled-components';

import bookIcon from '../../images/book-24px.svg';

const githubBarHeight = '8vh';
const bookHeight = '1.5rem';

const HeaderStyle = styled.div`
  box-sizing: border-box;
  background-color: #242A2E;
  font-size: 1.5rem;
  height: ${githubBarHeight};
  color: white;
  text-align:center;
  div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const BookImage = styled.img`
  height: ${bookHeight};
  filter: invert(100%);
`;

const MainBar = () => {
  return (
    <HeaderStyle>
        <div>
          <BookImage src={bookIcon}></BookImage>
          <span>ISSUES</span>
        </div>
    </HeaderStyle>
  );
};

export default MainBar;

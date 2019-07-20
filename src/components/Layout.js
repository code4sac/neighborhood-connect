import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.main`
  max-width: 900px;
  margin: 1rem auto;
`;

const Layout = ({ children}) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
)

export default Layout;

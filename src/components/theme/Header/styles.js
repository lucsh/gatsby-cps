import styled from 'styled-components';

// export const StyledHeader = styled.div`
//     background: #5437ff;
// `

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 200;
    margin: 0 1rem;
    outline: none;
  }
`;

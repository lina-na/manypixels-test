import styled from 'styled-components';

export const AppLoader = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppLinkBack = styled.div`
  margin: 15px 0;
  
  a {
    font-size: 20px;
    background-color: lightgray;
    padding: 5px 15px;
    border-radius: .5rem;
    transition: .2s background-color linear;

    &:hover {
      background-color: #b7b7b7;
    }
  }
`;

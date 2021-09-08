import styled from 'styled-components';

export const LeftSection = styled.div`

  height: 100vh;
  width: 100%;
  padding-top: 100px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 0px;
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const BGImage = styled.div`
  z-index: 0;
  width:100%;
`;

export const Content = styled.div`
  z-index:1;
  position:  relative;

`;



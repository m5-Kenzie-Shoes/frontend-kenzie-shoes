import styled from "styled-components";
export const StyledDashboard = styled.main`
  width: 100%;
  max-width: 85.625rem;
  margin: 0 auto;
  margin-top: 100px;

  > div {
    height: 70vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 37.5rem) {
    margin: 0;
    margin-top: 150px;
  }
`;

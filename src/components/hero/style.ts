import styled from "styled-components";

export const StyledHero = styled.div`
  background-color: var(--color-gray-0);
  div {
    width: 100%;
    max-width: 85.625rem;
    margin: 0 auto;
    .heroCabecalho {
      display: flex;
      width: 100vw;
      max-width: 100%;
      height: 6rem;
      align-items: center;
      display: flex;
      img {
        width: 129px;
        height: 86px;
        position: absolute;
        top: 23px;
      }
      div {
        display: flex;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
      }
    }
    .heroBanner {
      padding-top: 2rem;
      display: flex;
      img {
        width: 733px;
        height: 698px;
      }
      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        justify-content: center;
      }
    }
  }
`;

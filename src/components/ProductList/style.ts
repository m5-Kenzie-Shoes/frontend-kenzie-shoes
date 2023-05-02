import styled from "styled-components";

export const StyledProductList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div {
    width: 100%;
    margin-bottom: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media only screen and (max-width: 37.5rem) {
    > div {
      flex-direction: column;
      gap: 0.9375rem;

      h2 {
        font-size: var(--font-size-2);
      }
    }

    ul {
      justify-content: space-between;
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-bottom: 1.25rem;
    }
  }
`;

import styled from "styled-components";

export const CardReviewStyled = styled.div`
  height: 27rem;
  width: 22.25rem;
  background-color: var(--color-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 19rem;
    object-fit: cover;
  }
  div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
  }
`;

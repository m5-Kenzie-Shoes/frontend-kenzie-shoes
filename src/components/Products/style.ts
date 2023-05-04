import styled from "styled-components";

export const StyledProducts = styled.li`
  min-width: 17rem;
  width: 17rem;
  background-color: var(--color-white);
  border: 0.125rem solid var(--color-gray-20);
  border-radius: var(--border-radius-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in;

  :hover {
    box-shadow: 0 0 0.9375rem var(--color-gray-100);

    /* img:not(.resize-img, .adjust-img) {
      animation: img-pulse 2s linear infinite forwards;
    } */

    div:first-child {
      background-color: var(--color-gray-20);
      overflow: hidden;
    }
  }

  > div:first-child {
    width: 100%;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: var(--color-gray-0);
    > img {
      transform: scale(0.8);
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    width: 100%;
    padding: 1.5rem 1.25rem;
    > p {
      font-size: 0.75rem;
    }
    > button {
      margin-top: 0.625rem;
    }
  }

  /* @keyframes img-pulse {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  } */

  @media only screen and (max-width: 37.5rem) {
    margin-bottom: 0.9375rem;
  }
`;

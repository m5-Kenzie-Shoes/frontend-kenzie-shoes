import styled from "styled-components";

export const StyledProducts = styled.li`
  min-width: 16rem;
  width: 16rem;
  /* height: 550px; */
  background-color: var(--color-white);
  border: 0.125rem solid var(--color-gray-20);
  border-radius: var(--border-radius-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s ease-in;

  :hover {
    box-shadow: 0 0 0.9375rem var(--color-gray-100);

    > div:first-child {
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
    /* width: 100%; */
    padding: 1.25rem;
    > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      max-width: 200px;
      min-width: 200px;
      height: 120px;

      > p {
        font-size: 0.75rem;
        height: 65px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        max-height: 4.5em;
        line-height: 1.5em;
      }
    }
    > div:last-child {
      width: 100%;
      display: flex;
      margin-top: 1rem;
      justify-content: space-between;
      align-items: center;
      min-width: 200px;
      max-width: 200px;
      > div > span {
        font-size: x-small;
      }
    }
  }

  @media only screen and (max-width: 37.5rem) {
    margin-bottom: 0.9375rem;
  }
`;

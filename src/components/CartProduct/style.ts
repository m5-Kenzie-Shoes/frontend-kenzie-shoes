import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  border-radius: var(--border-radius-1);
  animation: in-cart 0.5s ease-in-out;
  background-color: var(--color-gray-30);
  border: 1px solid var(--color-gray-20);
  padding: 3px;
  :hover {
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  > div:first-child {
    height: 100%;
    width: 25%;
    background-color: var(--color-gray-20);
    border-radius: var(--border-radius-2);
    /* background-color: red; */
    display: flex;
    img {
      width: 100%;
    }
  }

  > div:nth-child(2) {
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: column;
    padding-left: 0.625rem;
    gap: 0.625rem;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid var(--color-gray-20);
      border-radius: var(--border-radius-2);
      width: 106px;
      height: 25px;

      button {
        display: flex;
        transform: translateY();
        align-items: center;
        justify-content: center;
        font-size: 25px;
        color: var(--color-secondary);
        border: none;
        background-color: var(--color-gray-20);
        height: 100%;
        width: 30px;
        padding-bottom: 3px;

        :hover {
          cursor: pointer;
          color: var(--color-gray-0);
          background-color: var(--color-gray-50);
          border-radius: var(--border-radius-2);
        }
      }
    }
  }

  > button {
    position: absolute;
    bottom: 0.1rem;
    right: 0.625rem;
    background: none;
    border: none;

    svg {
      opacity: 0.4;

      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 37.5rem) {
    > div:nth-child(2) > h4 {
      width: 6.875rem;
    }

    > button {
      padding: 0;
    }
  }

  @keyframes in-cart {
    0% {
      transform: translateY(-6.25rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0rem);
      opacity: 1;
    }
  }
`;

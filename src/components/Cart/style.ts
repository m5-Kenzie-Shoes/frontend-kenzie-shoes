import styled from "styled-components";

export const StyledCart = styled.aside`
  > div {
    height: fit-content;
    width: 320px;
    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius-2);
    z-index: 5;

    > div:first-child {
      display: flex;
      align-items: center;
      padding-left: 1.25rem;
      height: 4.0625rem;
      background-color: var(--color-primary);
      border-radius: var(--border-radius-2) var(--border-radius-2) 0 0;
      h4 {
        color: var(--color-white);
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.9375rem;
      align-items: center;
      height: 9.875rem;
      background-color: var(--color-gray-0);
    }

    ul {
      width: 100%;
      max-height: 20rem;
      background-color: var(--color-white);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 1.25rem 0.625rem;
      overflow-y: auto;
    }
  }
  @media only screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      width: 90%;
      transform: translateY(-450px);
      position: fixed;
      top: 0;
    }
  }
`;

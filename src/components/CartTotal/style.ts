import styled from "styled-components";

export const StyledCartTotal = styled.div`
  :last-child {
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
    background-color: var(--color-white);
    padding: 0.875rem 0.625rem 1.25rem 0.625rem;
    border-radius: 0 0 var(--border-radius-2) var(--border-radius-2);
    border-top: 0.125rem solid var(--color-gray-20);

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

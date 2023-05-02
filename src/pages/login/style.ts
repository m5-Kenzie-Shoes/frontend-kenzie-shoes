import styled from "styled-components";
export const StyledLogin = styled.main`
  width: 940px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 37.5rem) {
    padding-top: 30px;
    width: 100%;
    flex-direction: column-reverse;
    height: 100%;
    gap: 14px;
  }
`;

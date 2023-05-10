import styled from "styled-components";

export const StyleButtonProfile = styled.button``;

export const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: #00000090;
  z-index: 15;

  .divFormProfile {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-top: 30px;
    background-color: white;
    width: 800px;
    border-radius: 6px;
    box-shadow: 0px 1px 50px -10px rgba(1, 1, 1, 0.25);
  }
  div {
    display: flex;
    justify-content: space-around;
  }

  .modalHeader {
    /* margin: 0 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-gray-20);
    h3 {
      margin: 20px;
    }
    button {
      margin-right: 20px;
    }
  }

  .formProfile {
    padding-top: 15px;
    justify-content: center;
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    button {
      margin-top: 10px;
      align-self: center;
      width: 250px;
    }
    padding-bottom: 20px;
  }

  .inputs {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    > div:last-child {
      margin-top: 52px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    p {
      font-size: 10px;
    }
  }

  h3 {
    /* margin: 20px 20px 20px 0px; */
  }

  h4 {
    margin-bottom: 10px;
  }

  .inputs {
    width: 45%;
  }

  .buttonX {
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
`;

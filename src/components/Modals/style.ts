import styled from "styled-components";

export const StyleButtonProfile = styled.button``;

export const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  position: fixed;
  left: 0px;
  top: 0px;
  background-image: url("../../images/black.jpeg");
  #blackImg {
  }

  .divFormProfile {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-top: 30px;
    background-color: white;
    width: 800px;
    height: 570px;
    border-radius: 6px;
    box-shadow: 0px 1px 50px -10px rgba(1, 1, 1, 0.25);
  }

  .modalHeader {
    margin: 10px 35px 20px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .formProfile {
    justify-content: center;
    gap: 10px;
    display: flex;
    width: 100%;
    height: 100%;
  }

  h3 {
    margin: 20px 20px 20px 0px;
  }

  h4 {
    margin-bottom: 20px;
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

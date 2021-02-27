import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #08aeea5d;
  /* background-color: rgba(255, 255, 255, 0.75); */
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  width: 70vw;
  min-height: 35vh;
  margin: 2.25rem 0;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);

  > p {
    text-align: center;
    font-size: larger;
  }

  .questionArea {
    background-color: #f9f9f8;
    margin: 1rem 0;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    filter: opacity(1);
  }

  .question-count {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  }
`;

type ButtonWrapperProp = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProp>`
  .answer-list {
    cursor: pointer;
    width: 50vw;
    min-width: 100%;
    text-align: center;
    min-height: 10vh;
    /* background-color: rgba(255, 136, 25, 0.25); */

    ${({ correct, userClicked }) =>
      correct
        ? `background-color: #2182FF;`
        : !correct && userClicked
        ? `background-color: #F52424;`
        : `background-color: #08aeea;
  background-image: linear-gradient(125deg, #08aeea 0%, #2af598 100%);`}
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 0.25rem 0;
    font-size: 0.75rem;
    color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    opacity: 1;
  }
`;

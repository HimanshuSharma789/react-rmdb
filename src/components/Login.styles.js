import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 20px;
  color: var(--darkGrey);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  .error {
    border-radius: 10px;
    background: red;
    width: 100%;
    height: 30px;
    padding: 4px;
    border: 1px solid var(--medGrey);
    margin-bottom: 10px;
    text-align: center;
    color: white;
  }
`

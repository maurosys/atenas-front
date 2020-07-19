import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > header {
    max-width: 500px;

    > img {
      position: relative;
      top: -50px;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  position: relative;
  top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  > h3, p {
    color: var(--secundary);
    font-family: Rosario;
    font-style: italic;
    font-weight: bold;
    word-break: break-all;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  > form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;

    > label {
      color: var(--secundary);
      font-family: Rosario;
      font-style: italic;
      font-weight: bold;
      margin-left: 35px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > svg {
        margin-right: 35px;
      }
    }

    > input {
      border: 2px solid var(--primary);
      border-radius: 5px;
      padding: 10px 20px;
      margin-bottom: 20px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    > button {
      height: 60px;
      width: 200px;
      margin: 10px auto;
      border: 0;
      border-radius: 5px;
      background: var(--secundary);
      color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      transition: background-color .2s;
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        margin-left: 10px;
      }

      &:hover {
        background: ${shade(0.2, '#6200EE')}
      }
    }
  }

  > a {
    color: var(--primary);
    font-family: Rosario;
    font-style: italic;
    text-decoration: none;
    margin-left: 3px;
  }
`;

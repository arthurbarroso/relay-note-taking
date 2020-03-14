import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  margin-top: 0px;
  height: 64px;

  a {
    color: #333;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;

    button {
      background: none;
      border: 0;
      border-radius: 14px;
      display: flex;
      margin-left: 14px;

      text-transform: uppercase;
      justify-self: center;
      :hover {
        color: #1eb36b;
      }
    }
  }
`;

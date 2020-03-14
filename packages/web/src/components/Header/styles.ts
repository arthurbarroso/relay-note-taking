import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  font: 14px 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
  background: #fff;
  max-height: 68px;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  margin-top: 0px;

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

      h2 {
        text-transform: uppercase;
        justify-self: center;
        :hover {
          color: #759c11;
        }
      }
    }
  }
`;

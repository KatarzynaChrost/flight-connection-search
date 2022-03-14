import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 550px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 20px 0;
  h1 {
    margin: 0;
    text-align: center;
  }
  @media only screen and (max-width: 350px) {
    flex-direction: column;
    align-items: center;
    margin 70px 0 30px 0;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  @media only screen and (max-width: 240px) {
    h1 {
      font-size: 22px;
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media only screen and (max-width: 350px) {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    label {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;
export const Option = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SubmitButton = styled.input`
  margin: 10px;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 20px -10px rgba(66, 68, 90, 1);
    outline-width: 0 !important;
  }
  :focus {
    outline-width: 0 !important;
  }
`;

export const SelectOption = styled.select`
  margin: 8px;
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.colors.darkGrey};
  &:hover {
    box-shadow: 4px 4px 20px -10px rgba(66, 68, 90, 1);
  }
  &:focus {
    outline-width: 0;
  }
`;

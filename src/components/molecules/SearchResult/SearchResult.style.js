import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ol {
    padding: 0;
  }
  @media only screen and (max-width: 350px) {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    li {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

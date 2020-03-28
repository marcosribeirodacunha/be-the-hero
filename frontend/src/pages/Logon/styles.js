import styled from "styled-components";
import { Container } from "../../styles/global";

export const LogonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

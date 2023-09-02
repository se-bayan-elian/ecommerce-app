import { styled } from "styled-components";

export const UserCardStyle = styled.div`
  padding: 17px 10px;
  border-radius: 6px;
  background: #e3f0ff;

  .info {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .btns button {
    width: 100%;
  }
`;

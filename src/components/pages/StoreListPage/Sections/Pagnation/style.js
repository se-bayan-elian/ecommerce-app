import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 15px;

  select {
    background: ${(props) => props.theme.colors.whiteColor};
    border: 1px solid ${(props) => props.theme.colors.gray300};
    padding: 5px 10px;
  }
`;
export const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
`;

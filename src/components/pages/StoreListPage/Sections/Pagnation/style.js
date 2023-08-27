import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 15px;

  select {
    background: #fff;
    border: 1px solid #e3e8ee;
    padding: 5px 10px;
  }
`;
export const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#f0f0f0" : "transparent")};
`;

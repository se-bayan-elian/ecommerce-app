import styled from "styled-components";

const OrLine = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0px;

  color: ${(props) => props.theme.colors.gray400};

  position: relative;
  margin: 20px 0;
  width: 100%;
  text-align: center;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(50% - 20px);
    height: 1px;
    background-color: ${(props) => props.theme.colors.gray200};
  }

  &::after {
    left: unset;
    right: 0;
  }
`;

export default OrLine;

import styled from "styled-components";

const Style = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px 120px;
  background-color: ${(props) => props.theme.colors.whiteColor};

  > div {
    display: flex;
    gap: 7px;
  }

  .links {
    gap: 15px;
  }

  .Link {
    color: ${(props) => props.theme.colors.gray800};
  }

`;

export default Style;

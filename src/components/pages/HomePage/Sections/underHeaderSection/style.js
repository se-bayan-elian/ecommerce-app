import { StyledFlex } from "../../../../../styles/common";
import { styled } from "styled-components";

export const LandingStyle = styled(StyledFlex)`
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: var(--primary_Color);
  border: 1px solid #e3e8ee;
  border-radius: 5px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1px;
    list-style: none;
  }

  ul li {
    width: 250px;
    height: 40px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    color: #505050;
    cursor: pointer;
  }

  ul li:hover {
    border-radius: 5px;
    background-color: #e5f1ff;
    font-weight: 600;
  }

  .active {
    border-radius: 5px;
    background-color: #e5f1ff;
    font-weight: 600;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .learn_more {
    background: #fff;
    color:#222;
    border-radius:6px;
    padding: 10px 20px;
    &:hover {
      background-color: ${(props) => props.theme.colors.gray100};
    }
    
  }
`;

export const AdvertSection = styled.div`
  width: 100%;
  height: 385px;
  padding: 55px 45px;
  background-image: url("assets/images/underNavImages/headPhones.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p:nth-of-type(1) {
    font-family: "Inter", sans-serif;
    font-size: 28px;
    font-weight: 400;
  }

  p:nth-of-type(2) {
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 17px;
  }
`;

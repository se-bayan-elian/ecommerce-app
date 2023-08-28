import styled from "styled-components";

const Style = styled.div`
    padding: 40px 0;
    background-color: ${props => props.theme.colors.whiteColor};

    .grid__wrapper{
        display: flex;
        gap:2%;
    }
    .footer__brand{
        width: 20%;
        margin-left: 129px;
    }
    .footer__brand p{
        width: 276px;
    }

    .footer__lists{
        display: grid;
        grid-template-columns: repeat(5 , 1fr);
        width: 70%;
        margin-right: 187px;

        p{
            color : ${props => props.theme.colors.dark};
            font-size: ${props => props.theme.fontSizes.lg};
            margin-bottom: 0.5rem;
        }
        a{
            display:block;
            cursor: pointer;
        }
    }

    .social_icon{
        color: ${props => props.theme.colors.whiteColor};
        background-color: ${props => props.theme.colors.gray400};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 30px !important;
        height: 30px !important;
        border-radius: 50%;
        margin-inline-end: 12px;
    }
`

export default Style;
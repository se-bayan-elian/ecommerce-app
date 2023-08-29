import styled from "styled-components";
const Typography = (props) => {
    const result = `
        color: ${props.color ? getColorsFromTheme(props.color, props.theme) : props.theme.colors.dark};
        ${props.margin ? "margin: " + props.margin + ";" : ""}
        ${props.align ? "text-align: " + props.align + ";" : ""}
        ${props.padding ? "padding: " + props.padding + ";" : ""}
        ${props.weight ? "font-weight: " + props.weight + ";" : ""}
        ${props.transform ? "text-transform: " + props.transform + ";" : ""}
        `
    return result;
}

const getColorsFromTheme = (color, theme) => {
    if (color === "white") return theme.colors.whiteColor
    if (color === "dark") return theme.colors.dark
    if (color === "blue") return theme.colors.baseColorBlue
    if (color === "blue/100") return theme.colors.baseColorBlue100

    if (color === "green") return theme.colors.baseColorGreen
    if (color === "green/100") return theme.colors.baseColorGreen100
    if (color === "orange") return theme.colors.baseColorOrange
    if (color === "orange/100") return theme.colors.baseColorOrange100

    if (color === "red") return theme.colors.red

    if (color === "gray/100") return theme.colors.gray100
    if (color === "gray/200") return theme.colors.gray200
    if (color === "gray/300") return theme.colors.gray300

    if (color === "gray/400") return theme.colors.gray400
    if (color === "gray/500") return theme.colors.gray500
    if (color === "gray/600") return theme.colors.gray600
    if (color === "gray/800") return theme.colors.gray800
}

export const H1 = styled.h1`
    ${props => props.theme.fonts.fontItems.h1.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.h1.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.h1.spacing}
    ${props => Typography(props)}
`

export const H2 = styled.h2`
    ${props => props.theme.fonts.fontItems.h2.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.h2.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.h2.spacing}
    ${props => Typography(props)}
`

export const H3 = styled.h3`
    ${props => props.theme.fonts.fontItems.h3.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.h3.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.h3.spacing}
    ${props => Typography(props)}
`

export const H4 = styled.h4`
    ${props => props.theme.fonts.fontItems.h4.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.h4.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.h4.spacing}
    ${props => Typography(props)}
`

export const H5 = styled.h5`
    ${props => props.theme.fonts.fontItems.h5.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.h5.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.h5.spacing}
    ${props => Typography(props)}
`

export const Body1 = styled.p`
    ${props => props.theme.fonts.fontItems.body1.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.body1.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.body1.spacing}
    ${props => Typography(props)}
`

export const Body2 = styled.p`
    ${props => props.theme.fonts.fontItems.body2.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.body2.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.body2.spacing}
    ${props => Typography(props)}
`

export const Body3 = styled.p`
    ${props => props.theme.fonts.fontItems.body3.size}
    ${props => props.height ? `line-height: ${props.spacing}px;` : props.theme.fonts.fontItems.body3.height}
    ${props => props.spacing ? `letter-spacing: ${props.spacing}px;` : props.theme.fonts.fontItems.body3.spacing}
    ${props => Typography(props)}

`

export const Span = styled.span`
    ${props => Typography(props)}
`
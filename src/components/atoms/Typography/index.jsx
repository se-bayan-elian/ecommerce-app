import React from "react";
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6, StyledP } from "./style";

const Typography = ({ as, variant, align = "left", children , ...props }) => {
  // as => h1
  // align : center , left (default) , right
  switch (as.toLowerCase()) {
    case "h1":
      return (
        <StyledH1 variant={variant} align={align} {...props}>
          {children}
        </StyledH1>
      );
    case "h2":
      return (
        <StyledH2 variant={variant} align={align} {...props}>
          {children}
        </StyledH2>
      );
    case "h3":
      return (
        <StyledH3 variant={variant} align={align} {...props}>
          {children}
        </StyledH3>
      );
    case "h4":
      return (
        <StyledH4 variant={variant} align={align}  {...props}>
          {children}
        </StyledH4>
      );
    case "h5":
      return (
        <StyledH5 variant={variant} align={align} {...props}>
          {children}
        </StyledH5>
      );
    case "h6":
      return (
        <StyledH6 variant={variant} align={align} {...props}>
          {children}
        </StyledH6>
      );
    // variant for p 
    // default => 16 px 
    // default-muted => 16px color:muted
    // small => 14 px 
    // small-muted => 14px color:muted
    // micro => 12 px 
    // micro-muted => 12px color:muted
    case "p" :
      return <StyledP variant={variant} align={align} {...props}>{children}</StyledP>
      default : 
      return <StyledP variant={variant} align={align} as={as} {...props}>{children}</StyledP>
    };
  } 

export default Typography;

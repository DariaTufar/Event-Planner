import styled from "styled-components";
import { theme } from "../../utils/theme";

export const StyledH1 = styled.h1`
  font-family: ${theme.font.h1};
   font-size: ${theme.fontSize[24]};
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: ${theme.colors.primary};
    

  @media (min-width: 768px) {
    /* For tablet (768px) and above */
   
  }

  @media (min-width: 1280px) {
    /* For desktop (1280px) and above */
 
}
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center; 
/* justify-content: space-between; */
`;

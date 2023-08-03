import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px; /* Limit the container width to 1280px for desktop view */
  margin: 0 auto;
  padding: 16px;

  /* Mobile view */
  @media (min-width: 320px) {
    padding: 8px;
  }

  /* Tablet view */
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

 

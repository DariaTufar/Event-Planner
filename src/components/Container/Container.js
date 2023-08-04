import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px; /* Limit the container width to 1280px for desktop view */
  margin: 0 auto;
  padding: 24px;

  /* Mobile view */
  @media (min-width: 320px) {
    padding: 26px 40px;
  }

  /* Tablet view */
  @media (min-width: 768px) {
    padding: 16px;
  }
  /* Tablet view */
  @media (min-width: 1480px) {
    padding: 22px 80px 22px 87px;
  }
`;

 

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize[16]};
`;

const LanguageBtn = ({ language, onClick }) => {
  return <Button onClick={onClick}>{language}</Button>;
};

export default LanguageBtn;

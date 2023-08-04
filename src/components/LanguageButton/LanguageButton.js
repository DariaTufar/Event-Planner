import React, { useState } from "react";
import { StyledButton } from "./LanguageButton.styled";
import { FaChevronDown } from "react-icons/fa"; 

export const LanguageButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState("UK");

  const handleLanguageSwitch = () => {
    // Implement your language switch logic here
    setCurrentLanguage(currentLanguage === "UK" ? "EN" : "UK");
  };

  return (
    
      <StyledButton onClick={handleLanguageSwitch}>
              {currentLanguage === "UK" ? "UK" : "EN"} <FaChevronDown />
              
      </StyledButton>

  );
};

import React, { useState } from "react";

// import LanguageBtn  from "../LanguageBtn/LanguageBtn";

export const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("UK");

  const handleLanguageSwitch = () => {
    // Implement your language switch logic here
    setCurrentLanguage(currentLanguage === "UK" ? "EN" : "UK");
  };

  return (
    <header>
      <button onClick={handleLanguageSwitch}>
        {currentLanguage === "UK" ? "UK" : "EN"}
      </button>
    </header>
  );
};

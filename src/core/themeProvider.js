import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'THEME_ID';
const ThemeContext = React.createContext();
let THEMES;

export const ThemeContextProvider = ({ children }) => {
  const [themeID, setThemeID] = useState();
  if (THEMES === undefined) {
    THEMES = require('./themes.json')
    AsyncStorage.setItem(STORAGE_KEY, THEMES[1].key);
  }

  useEffect(() => {
    (async () => {
      const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedThemeID) setThemeID(storedThemeID);
      else setThemeID(THEMES[1].key);
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {!!themeID ? children : null}
    </ThemeContext.Provider>
  );
};

/**
 * update theme object with new json file
 * @param {json file} themeData 
 * @param {set theme id} setTheme 
 */
export function updateTheme(themeData, setTheme) {
  THEMES = themeData

  setTheme(THEMES[0].key);
  AsyncStorage.setItem(STORAGE_KEY, THEMES[0].key);
}

export function withTheme(Component) {
  return props => {
    const { themeID, setThemeID } = useContext(ThemeContext);

    const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
    const setTheme = themeID => {
      AsyncStorage.setItem(STORAGE_KEY, themeID);
      setThemeID(themeID);
    };

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}

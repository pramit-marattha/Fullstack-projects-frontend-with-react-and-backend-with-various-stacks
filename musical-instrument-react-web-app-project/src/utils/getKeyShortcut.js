export const  getKeyShortcut = (keyboardMap, note) => {
    const keyShortcut = Object.keys(keyboardMap);
    return keyShortcut.filter(shortcut => keyboardMap[shortcut] === note);
  }

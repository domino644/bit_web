let he = require("he");

export const filterHTML = (text: string): string => {
  return text.replace(/(<([^>]+)>)/gi, "");
};

export const filterEntities = (text: string): string => {
  return he.decode(text);
};

//Сделать первую букву заглавной
export const textToUP = (name: any) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

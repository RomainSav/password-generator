export const generate = (length: number, uppercase: boolean, numbers: boolean, specials: boolean): string => {
  let characters = "abcdefghijklmnopqrstuvwxyz";

  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) characters += "0123456789";
  if (specials) characters += "!#$%&()*,-./:;<>=?@[]^_~+";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}
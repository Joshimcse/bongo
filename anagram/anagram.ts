const modifiedString = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z\d]/g, "")
    .split("")
    .sort()
    .join("");
};

export default function isAnagram(firstString: string, secondString: string) {
  return modifiedString(firstString) === modifiedString(secondString);
}
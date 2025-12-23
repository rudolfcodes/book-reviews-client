// Look inside of the text string for the coloredText prop text in that string
// and color that part of the text
const highlightText = (text: string, searchText?: string, color?: string) => {
  if (!searchText) return [text];
  const parts = text.split(new RegExp(`(${searchText})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === searchText.toLowerCase() ? (
      <span key={index} style={{ color }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

const capitalizeFirstLetter = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

export { highlightText, generateSlug, capitalizeFirstLetter };

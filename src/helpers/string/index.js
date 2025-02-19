export const date = (inputDate) => {
  const date = new Date(inputDate);

  const option = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };

  return `📅 ${date.toLocaleDateString("uk-UA", option).replaceAll("/", ".")}`;
};
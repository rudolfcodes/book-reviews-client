const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date
    .toLocaleDateString("en-US", options)
    .replace(",", "")
    .replace(" at ", " ");
};

export { formatDateTime };

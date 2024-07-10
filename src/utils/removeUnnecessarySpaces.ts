const removeUnnecessarySpaces = (value?: string): string => {
  return (value ?? "").replace(/\s+/g, ' ').trim()
};

export { removeUnnecessarySpaces };

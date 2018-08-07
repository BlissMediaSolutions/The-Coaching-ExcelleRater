import { isDefinedNotNull } from "./objUtil";

export const validateNonEmptyString = (
  input,
  minLength = 1,
  maxLength = Number.MAX_SAFE_INTEGER
) => {
  if (isDefinedNotNull(input)) {
    const string = input.trim();
    // check if defined and string
    if (string && typeof string === "string") {
      // check non empty String
      return string.length >= minLength && string.length < maxLength;
    }
  }
  return false;
};

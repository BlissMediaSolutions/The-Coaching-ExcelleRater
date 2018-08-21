export const getPropertyIfDefined = (obj, name) => {
  let newObject = obj;
  // check if type is object
  if (typeof newObject === "object") {
    // split name to get the fields of object to explore
    const fields = name.split(".");
    // for each field get the variable nested
    for (var i = 0; i < fields.length; i++) {
      if (newObject !== undefined && newObject !== null) {
        newObject = newObject[fields[i]];
      } else {
        return undefined;
      }
    }
  }
  return newObject;
};

export const isDefinedNotNull = obj => {
  return obj !== undefined && obj !== null;
};

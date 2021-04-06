/**
 * checks if the data is actually object.
 *
 * @public
 * @param {Object} value The data to check.
 * @returns {boolean} Returns `true` if the value is object
 */
const isObjectLike = (value) => {
  return (
    value !== null && Array.isArray(value) !== true && typeof value === "object"
  );
};

/**
 * checks if the arrays are equal.
 *
 * @public
 * @param {Array} array The array to be compared
 * @param {Array} other The array to be compared
 * @returns {boolean} Returns `true` if arrays are equal
 */
const isEqualArray = (array, other) => {
  if (array.length !== other.length) {
    return false;
  }

  if (array.length == 0 && other.length == 0) {
    return true;
  }

  let checkArray = false;
  for (let i = 0; i < array.length; i++) {
    checkArray = isEqual(array[i], other[i]);
  }
  return checkArray;
};

/**
 * checks if the objects are equal.
 *
 * @public
 * @param {Object} object The object to be compared
 * @param {Object} other The object to be compared
 * @returns {boolean} Returns `true` if objects are equal
 */
const isEqualObject = (object, other) => {
  const objectKeys = Object.keys(object);
  const otherKeys = Object.keys(other);

  if (objectKeys.length !== otherKeys.length) {
    return false;
  }

  if (objectKeys.length == 0 && otherKeys.length == 0) {
    return true;
  }

  for (const [key, value] of Object.entries(object)) {
    return isEqual(value, other[key]);
  }
};

/**
 * checks if two values are equal.
 *
 * @public
 * @param {Anything} value The value to be compared
 * @param {Anything} other The value to be compared
 * @returns {boolean} Returns `true` if values are equal
 */
const isEqual = (value, other) => {
  if (value === other) {
    return true;
  }

  if (isObjectLike(value) && isObjectLike(other)) {
    return isEqualObject(value, other);
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    return isEqualArray(value, other);
  }

  return false;
};


const _ = {
  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end == undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string) {
    return string.split(" ");
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = `${" ".repeat(
      startPaddingLength
    )}${string}${" ".repeat(endPaddingLength)}`;
    return paddedString;
  },
  has(object, key) {
    const hasValue = object[key];
    if (hasValue == undefined) {
      return false;
    }
    return true;
  },
  invert(object) {
    let invertedObject = {};
    for (key in object) {
      const originalValue = object[key];
      invertedObject = { originalValue: key };
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    undefined;
    return undefined;
  },
  drop(array, n = 1) {
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },
  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunk;
  },
};

// Do not write or modify code below this line.
module.exports = _;

// if you want to see more, the documentation is in here https://lodash.com/docs/4.17.15

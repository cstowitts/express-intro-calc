const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
    // if the conversion isn't successful, throw a BadRequestError and will
    // be handled in your route
    let nums = strNums.split(",");

    const convertedNums = nums.map((num) => +num);
    if (convertedNums.includes(NaN)) {
        throw new BadRequestError(`${num} is not a number.`);
    }

    return convertedNums;
}


module.exports = { convertStrNums };
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    return year % 4 === 0;
    //   if (year % 4 === 0) {
    //     if (year % 100 !== 0) {
    //       return true;
    //     }
    //     if (year % 400 === 0) {
    //       return true;
    //     }
    //     else {
    //         return false;
    //     }
    //   } else {
    //     return false;
    //   }
}
exports.default = leapYear;

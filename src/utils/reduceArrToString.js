export const reduceArrToString = (arr) => {
    return arr.reduce((result, data) => {
        result += data;
        return result;
    }, '');
}
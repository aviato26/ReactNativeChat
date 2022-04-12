

export default (date) => {
    // returning the month and day from date being passed in
    return `${date.getMonth() + 1}-${date.getDate()}`;
}
/* eslint-disable prefer-const */
module.exports = () => {
    let d = new Date();

    // Date
    let dDate = d.getUTCDate();
    let dMonth = (d.getUTCMonth() + 1);
    let dYear = d.getUTCFullYear();

    // Time
    let tHour = d.getUTCHours();
    let tMinute = d.getUTCMinutes();

    if (tHour < 10) {tHour = `0${tHour}`;}
    if (tMinute < 10) {tMinute = `0${tMinute}`;}

    return `${dDate}-${dMonth}-${dYear} ${tHour}:${tMinute}`;
};
export const parseDate = (date?: string) => {
    const parsedDate = { year: 0, month: 0, day: 0 }
    if (date) {
        parsedDate.year = parseInt(date.split("-")[0]);
        parsedDate.month = parseInt(date.split("-")[1]);
        parsedDate.day = parseInt(date.split("-")[2]);
    }
    return parsedDate;
}

export const createDate = (date: { year: number, month: number, day: number }) => {
    let newDate = date.year + '-';
    if (date.month.toString().length == 1) newDate += '0' + date.month + '-';
    else newDate += date.month + '-';

    if (date.day.toString().length == 1) newDate += '0' + date.day;
    else newDate += date.day;
    
    return newDate;
}
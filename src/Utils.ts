function stringToFormattedDateString(val: string) {
    return new Date(val).toISOString().split('T')[0];
}

function stringToDate(val: string): Date {
    return new Date(val);
}

function dateToYYMM(val: Date) {
    let month: any = val.getMonth() + 1
    month = month < 10 ? `0${month}` : month;
    return `${val.getFullYear()}-${month}`
}

function getCurrentYYMM() {
    return dateToYYMM(new Date())
}

export {stringToFormattedDateString, dateToYYMM, getCurrentYYMM, stringToDate};
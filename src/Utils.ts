function stringToFormattedDateString(val: string) {
    return new Date(val).toISOString().split('T')[0];
}

export {stringToFormattedDateString};
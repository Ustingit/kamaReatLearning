export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required.';
}

export const maxLengthCreator = (MaxLength) => (value) => {
    if (value && value.length > MaxLength) return `Max length is ${MaxLength} symbols.`;
    return undefined;
}

export const maxLength30 = value => {
    if (value && value.length > 30) return 'Max length is 30 symbols.';
    return undefined;
}
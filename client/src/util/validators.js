export const checkMaxLength = (value, len) =>
  value && value.length <= len
    ? undefined
    : `${len} karakterden az olmalidir`;

export const checkMinLength = (value, len) =>
  value && value.length >= len
    ? undefined
    : `${len} karakterden fazla olmalidir`;

export const checkEmail = value =>
(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) ? undefined : '@ - . gibi karakterler eksik';

export const checkValidChars = value =>
  /^[a-zA-Z0-9_-]+$/.test(value) ? undefined : 'gecersiz karakterler iceriyor';

export const checkIfTrimmed = value =>
  value.trim() === value ? undefined : 'cannot start or end with whitespace';

export const validUrl = value => {
  try {
    new URL(value);
    return undefined;
  } catch (error) {
    return 'must be a valid url';
  }
};

const max = len => value => checkMaxLength(value, len);
const min = len => value => checkMinLength(value, len);
const validEmail = value => checkEmail(value);
const validChars = value => checkValidChars(value);
const trimmed = value => checkIfTrimmed(value);

export const required = value => (value ? undefined : 'gerekli');
export const postType = value =>
  value === 'link' || value === 'text'
    ? undefined
    : 'must be link or text post';
    //duzenleme
export const emailValidator = [required, validEmail, trimmed];    
export const usernameValidator = [required, max(32), validChars, trimmed];
export const passwordValidator = [required, min(8), max(72)];
export const titleValidator = value =>
  required(value) || checkMaxLength(value, 100);
export const textPostValidator = value =>
  required(value) || checkMinLength(value, 4);
export const urlValidator = value => required(value) || validUrl(value);
export const typeValidator = value => required(value) || postType(value);

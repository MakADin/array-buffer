export class Validator {
  validateUsername(username) {
    const validCharsAndDigits = /^[a-zA-Z0-9_-]+$/;
    const maxThreeDigits = /\d{4,}/;
    const invalidStartEnd = /^[0-9_-]|[0-9_-]$/;

    return (
      validCharsAndDigits.test(username) &&
      !maxThreeDigits.test(username) &&
      !invalidStartEnd.test(username)
    );
  }
}

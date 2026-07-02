import { Validator } from "../src/Validator.js";

describe('Validator (100% coverage)', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('Валидность имени пользователя', () => {
    test('Должен принимать имя без символов и цифр', () => {
      expect(validator.validateUsername('alex')).toBe(true);
      expect(validator.validateUsername('Username')).toBe(true);
    });

    test('должен принимать имя с символами - и _ внутри имени', () => {
      expect(validator.validateUsername('alex-smith')).toBe(true);
      expect(validator.validateUsername('alex_smith')).toBe(true);
    });

    test('должен принимать имя с цифрами внутри имени не больше 3 подряд', () => {
      expect(validator.validateUsername('a1b')).toBe(true);
      expect(validator.validateUsername('a12b')).toBe(true);
      expect(validator.validateUsername('alex123smith')).toBe(true);
    });
  });

  describe('Запрещенные символы', () => {
    test('Отклонить кириллические буквы', () => {
      expect(validator.validateUsername('алекс')).toBe(false);
    });

    test('Отклонить спец. символы (точки, пробелы и !?)', () => {
      expect(validator.validateUsername('alex.smith')).toBe(false);
      expect(validator.validateUsername('alex smith')).toBe(false);
      expect(validator.validateUsername('alex!')).toBe(false);
    });
  });

  describe('Последовательность цифр', () => {
    test('Отклонить при наличии 4 цифр подряд', () => {
      expect(validator.validateUsername('alex1234smith')).toBe(false);
    });

    test('Отклонить при наличии более 4 цифр подряд', () => {
      expect(validator.validateUsername('a1234567b')).toBe(false);
    });
  });

  describe('Правило в начале и в конце имени', () => {
    test('Отклонить при наличии недопустимого символа в начале имени', () => {
      expect(validator.validateUsername('1alex')).toBe(false);
      expect(validator.validateUsername('-alex')).toBe(false);
      expect(validator.validateUsername('_alex')).toBe(false);
    });

    test('Отклонить при наличии недопустимого символа в конце имени', () => {
      expect(validator.validateUsername('alex1')).toBe(false);
      expect(validator.validateUsername('alex-')).toBe(false);
      expect(validator.validateUsername('alex_')).toBe(false);
    });
  });
});

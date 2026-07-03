import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
} from '../src/Сharacter.js';

describe('Проводим проверку создания персонажей', () => {
  test('Проверка создания Bowman', () => {
    const hero = new Bowman('Legolas');
    const expected = {
      name: 'Legolas',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    expect(hero).toEqual(expected);
  });

  test.each([
    [Swordsman, 'Swordsman', 40, 10],
    [Magician, 'Magician', 10, 40],
    [Daemon, 'Daemon', 10, 40],
    [Undead, 'Undead', 25, 25],
    [Zombie, 'Zombie', 40, 10],
  ])(
    'Корректное создание персонажа со статами %s',
    (ClassName, type, attack, defense) => {
      const hero = new ClassName('hero');
      expect(hero.type).toBe(type);
      expect(hero.attack).toBe(attack);
      expect(hero.defense).toBe(defense);
    },
  );
});

describe('Тест на валидацию ошибок', () => {
  test('Ошибка - имя короче 2 символов', () => {
    expect(() => new Bowman('l')).toThrow(
      'Имя должно быть строкой от 2 до 10 символов!',
    );
  });

  test('Ошибка - имя длиннее 10 символов', () => {
    expect(() => new Bowman('Legolas Vitalevich')).toThrow(
      'Имя должно быть строкой от 2 до 10 символов!',
    );
  });

  test('Неправильный тип героя', () => {
    expect(() => new Character('Legolas', 'Golem')).toThrow(
      'Некорректный тип героя.',
    );
  });
});

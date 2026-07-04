import { Magician, Daemon } from '../src/Сharacter.js';

describe('Проверка работы создания Magician и Daemon', () => {
  test('Рассчет по формуле с базовой атакой 100, дистанцией 2 клетки с эффектом дурманом Magician -> результат: attack = 85', () => {
    const hero = new Magician('Gendalf');
    hero.stoned = true;
    hero.distance = 2;
    hero.attack = 100;
    expect(hero.attack).toBe(85);
  });

  test('Рассчет по формуле с базовой атакой 100, дистанцией 2 клетки без эффекта дурмана-> результат: attack = 90', () => {
    const hero = new Magician('Gendalf');
    hero.distance = 2;
    hero.attack = 100;
    expect(hero.attack).toBe(90);
  });

  test('Дефолтные значение персонажа', () => {
    const hero = new Magician('Gendalf');
    expect(hero.attack).toBe(10);
    expect(hero.stoned).toBe(false);
    expect(hero.distance).toBe(1);
  });

  test('Проверка на слишком больше расстояние -> результат: attack = 0', () => {
    const hero = new Magician('Gendalf');
    hero.distance = 100;
    expect(hero.attack).toBe(0);
  });

  test('Проверка на отрицательное значение атаки -> результат: attack = 0', () => {
    const hero = new Magician('Gendalf');
    hero.attack = -1;
    expect(hero.attack).toBe(0);
  });

  test('Рассчет по формуле с базовой атакой 100, дистанцией 2 клетки с эффектом дурманом Daemon -> результат: attack = 85', () => {
    const hero = new Daemon('Sauron');
    hero.stoned = true;
    hero.distance = 2;
    hero.attack = 100;
    expect(hero.attack).toBe(85);
  });
});

describe('levelUp и damage методы', () => {
  test('levelUp - success', () => {
    const hero = new Magician('Gendalf');
    hero.levelUp();
    expect(hero.level).toBe(2);
    expect(hero.attack).toBe(12);
  });

  test('damage 15 - от health 100 вычесть 9 -> health = 91', () => {
    const hero = new Daemon('Sauron');
    hero.damage(15);
    expect(hero.health).toBe(91);
  });

  test('damage 1000 -> health = 0', () => {
    const hero = new Daemon('Sauron');
    hero.damage(1000);
    expect(hero.health).toBe(0);
  });

  test('health = 0 - Error "Нельзя повысить левел умершего"', () => {
    const hero = new Daemon('Sauron');
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow('Нельзя повысить левел умершего');
  });
});

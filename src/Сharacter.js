export class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов!');
    }

    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!types.includes(type)) {
      throw new Error('Некорректный тип героя.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defense = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level++;
    this.attack = Math.round(this.attack * 1.2);
    this.defense = Math.round(this.defense * 1.2);
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defense / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defense = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defense = 10;
  }
}

export class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
    this.distance = 1;
    this._baseAttack = 0;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._baseAttack = value;
  }

  get attack() {
    let currentAttack = this._baseAttack * ((11 - this.distance) / 10);
    if (this._stoned) {
      currentAttack -= Math.log2(this.distance) * 5;
    }
    return Math.max(0, Math.round(currentAttack));
  }
}

export class Magician extends MagicCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defense = 40;
  }
}

export class Daemon extends MagicCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defense = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defense = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defense = 10;
  }
}

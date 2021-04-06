export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
    this.type = this.constructor.name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Некорректное имя персонажа!');
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value !== this.constructor.name) {
      throw new Error('Некорректный тип персонажа!');
    }
    this._type = value;
  }
}

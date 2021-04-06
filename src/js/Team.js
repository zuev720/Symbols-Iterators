export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Метод должен добавлять выбранного персонажа в команду (объект класса Character).

  add(person) {
    for (const character of this.members) {
      if (character.name.toLowerCase() === person.name.toLowerCase()
        && character.type === person.type
        && character.level === person.level) {
        throw new Error('Этот персонаж уже находится в вашей команде!');
      }
    }
    this.members.add(person);
  }

  // Метод должен иметь возможность добавлять произвольное количество персонажей в команду

  addAll(...persons) {
    const arr = [];
    persons.reduce((result, person) => {
      result.forEach((character) => {
        arr.push(character.name);
      });
      if (!(arr.includes(person.name))
        && !(arr.includes(person.type))
        && !(arr.includes(person.level))) {
        result.add(person);
      }
      return result;
    }, this.members);
  }

  // Метод должен производить конвертацию this.members в массив

  toArray() {
    return [...this.members];
  }

  iterator() {
    const characters = this.toArray();
    const iteratorCharacters = {
      start: 0,
      end: characters.length - 1,
    };
    iteratorCharacters[Symbol.iterator] = function () {
      let current = this.start;
      const last = this.end;
      return {
        next() {
          if (current <= last) {
            return {
              done: false,
              // eslint-disable-next-line no-plusplus
              value: characters[current++],
            };
          }
          return {
            done: true,
          };
        },
      };
    };
    for (const character of iteratorCharacters) {
      console.log(character);
    }
  }
}

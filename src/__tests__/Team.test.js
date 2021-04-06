import Team from '../js/Team';
import Character from '../js/Character';

it('Метод toArray() должен возвращать массив объектов персонажей', () => {
  const team = new Team();
  team.add(new Character('dude'));
  team.add(new Character('bro'));
  const coolMan = new Character('bro');
  coolMan.level = 2;
  team.add(coolMan);
  expect(team.toArray()).toEqual([
    {
      _name: 'dude',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
    {
      _name: 'bro',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
    {
      _name: 'bro',
      health: 100,
      level: 2,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
  ]);
});

it('Метод add(person) должен выбрасывать ошибку при добавлении одинакового персонажа', () => {
  const error = 'Этот персонаж уже находится в вашей команде!';
  const team = new Team();
  expect(() => {
    team.add(new Character('dude'));
    team.add(new Character('bro'));
    team.add(new Character('Dude'));
  }).toThrowError(error);
});

it('Метод addAll(...persons) не должен добавлять одинаковых персонажей в хранилище', () => {
  const team = new Team();
  team.addAll(new Character('dude'),
    new Character('bro'),
    new Character('barney'),
    new Character('goodMan'),
    new Character('dude'),
    new Character('bro'));
  expect(team.toArray()).toEqual([
    {
      _name: 'dude',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
    {
      _name: 'bro',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
    {
      _name: 'barney',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
    {
      _name: 'goodMan',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
      _type: 'Character',
    },
  ]);
});

it('Метод iterator() экземпляра класса должен возвращать по одному объекты персонажей из хранилища', () => {
  const team = new Team();
  team.add(new Character('bro'),
    new Character('barney'),
    new Character('goodMan'),
    new Character('dude'),
    new Character('bro'));
  const receive = team.toArray().forEach((character) => console.log(character));
  expect(team.iterator()).toEqual(receive);
});

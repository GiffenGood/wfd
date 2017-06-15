export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
  power : string
  sidekick : boolean;
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    power : 'flying',
    sidekick : false,
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    power :'exageration',
    sidekick : true,
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    power : 'Magnetism',
    sidekick : false,
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];
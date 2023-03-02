import { Dog, Lion, Tiger } from './animals';

function AnimalsPhrases(): void {
  const dog = new Dog('jorge el dog');
  console.log(dog.speak('hola miguel'));

  const lion = new Lion('Rudolph the lion');
  console.log(lion.speak('I\'m a lion'));

  const tiger = new Tiger('Samid the tiger');
  console.log(tiger.speak('Lions suck'));
}

AnimalsPhrases();

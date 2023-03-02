class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  getname(): string {
    return this.name;
  }

  speak(phrase: string = 'I\'m an animal =)'): string {
    return phrase;
  }
}

export class Dog extends Animal {
  speak(phrase: string): string {
    return super.speak(phrase.replace(/ |$/g, ' borf ')).trim();
  }
}
export class Lion extends Animal {
  speak(phrase: string): string {
    return super.speak(phrase.replace(/ |$/g, ' roar ')).trim();
  }
}

export class Tiger extends Animal {
  speak(phrase: string): string {
    return super.speak(phrase.replace(/ |$/g, ' grrr ')).trim();
  }
}

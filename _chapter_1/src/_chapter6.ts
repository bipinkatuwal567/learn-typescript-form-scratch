class Coder {
    // secondLang: string; // TS will yell at us for not initializing it
    secondLang!: string; // Use of assertion because we don't want to initialize it

  constructor(
    public readonly name: string,
    public music: string,
    protected lang: string,
    private age: number
  ) {
    this.name = name;
    this.music = music;
    this.lang = lang;
    this.age = age;
  }
}

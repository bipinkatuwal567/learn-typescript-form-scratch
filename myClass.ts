// class User{
//     public email: string;
//     private name: string;
//     readonly city: string = "Kathmandu";

//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
  private _courseCount = 1;

  readonly city: string = "Pokhara";

  constructor(public email: string, private name: string, public id: number) {}

  get appleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number{
    return this._courseCount;
  }

  set courseCount(count){
    if(count < 1){
      throw new Error("User should have atleast one subject");
    }
    this._courseCount = count;
  }

}

const forest = new User("forest@fk.com", "forest", 5);
forest.city;

export {};

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
  readonly city: string = "Pokhara";

  constructor(public email: string, private name: string, public id: number) {}
}

const forest = new User("forest@fk.com", "forest", 5);
forest.city;

export {};

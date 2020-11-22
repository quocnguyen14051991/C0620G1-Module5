export class Customer{
  // tslint:disable-next-line:variable-name
  private id: number;
  // tslint:disable-next-line:variable-name
  private name: string;
  // tslint:disable-next-line:variable-name
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  get_id(): number {
    return this.id;
  }

  // tslint:disable-next-line:typedef
  set_id(value: number) {
    this.id = value;
  }

  get_name(): string {
    return this.name;
  }

  // tslint:disable-next-line:typedef
  set_name(value: string) {
    this.name = value;
  }

  get_age(): number {
    return this.age;
  }

  // tslint:disable-next-line:typedef
  set_age(value: number) {
    this.age = value;
  }
}

export class UndefinedTypeError extends Error {
  constructor(message: string = "Undefined type error") {
    super(message);
    this.name = "UndefinedTypeError";
  }
}

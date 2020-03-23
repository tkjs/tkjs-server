export class UndefinedTypeError extends Error {
  constructor(message: string = "Undefined type error") {
    super(message);
    this.name = "UndefinedTypeError";
  }
}

export class SessionNotFoundError extends Error {
  constructor(message: string = "") {
    super(message);
    this.name = "SessionNotFoundError";
  }
}

export class BadRequestError extends Error {
  constructor(message: string = "") {
    super(message);
    this.name = "BadRequestError";
  }
}

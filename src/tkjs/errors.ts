export class UndefinedTypeError extends Error {
  constructor(message: string = "Undefined type error") {
    super(message);
    this.name = "UndefinedTypeError";
  }
}

export class SessionNotFoundError extends Error {
  constructor(message: string = "You need to update session first") {
    super(message);
    this.name = "SessionNotFoundError";
  }
}

export class BadRequestError extends Error {
  constructor(message: string = "Bad request, it seems you forget something") {
    super(message);
    this.name = "BadRequestError";
  }
}

export class ExtractorNotFoundError extends Error {
  constructor(message: string = "It seems what you looking for is not found") {
    super(message);
    this.name = "ExtractorNotFoundError";
  }
}

export class NotFoundError extends Error {
  constructor(message: string = "It seems what you looking for is not found") {
    super(message)
    this.name = "NotFoundError"
  }
}

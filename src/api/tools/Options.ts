import { HTTP_METHODS } from "./enums";

interface Options {
  method: HTTP_METHODS;
}

class Options {
  constructor() {
    this.method = HTTP_METHODS.POST;
  }
}

export { Options };

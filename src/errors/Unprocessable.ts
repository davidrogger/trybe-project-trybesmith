export default class Unprocessable extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Unprocessable';
  }
}
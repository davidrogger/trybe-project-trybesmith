import { sign, verify } from 'jsonwebtoken';
import { User } from '../interface/user.interface';

const secret = process.env.SECRET || 'secret';

class JwToken {
  sign: typeof sign;

  verify: typeof verify;

  constructor() {
    this.sign = sign;
    this.verify = verify;
  }

  generateNew(payload: User): string {
    const token = this.sign(payload, secret);
    return token;
  }

  verifyData(token: string) {
    return this.verify(token, secret);
  }
}

export default JwToken;
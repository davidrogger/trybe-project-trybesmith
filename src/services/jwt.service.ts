import { sign, verify } from 'jsonwebtoken';
import Unauthorized from '../errors/Unauthorized';
import { User } from '../types/user.type';

const secret = process.env.SECRET || 'secret';

class JwToken {
  private sign: typeof sign;

  private verify: typeof verify;

  constructor() {
    this.sign = sign;
    this.verify = verify;
  }

  generateNew(payload: User): string {
    const token = this.sign(payload, secret);
    return token;
  }

  verifyData(token: string): User {
    try {
      const tokenData = this.verify(token, secret);
      return tokenData as User;
    } catch (err) {
      throw new Unauthorized('Invalid token');
    }
  }
}

export default JwToken;
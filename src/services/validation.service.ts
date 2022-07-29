import Joi, { Root, Schema } from 'joi';
import Unprocessable from '../errors/Unprocessable';
import { Index, NewProduct } from '../interface/product.interface';
import { NewUser } from '../interface/user.interface';

class Validate {
  joi: Root;

  constructor() {
    this.joi = Joi;
  }

  runSchema = (schema: Schema) => <T>(itemToScan: T): T => {
    const { error, value } = schema.validate(itemToScan);
    if (error) {
      if (error.message.includes('must be')) throw new Unprocessable(error.message);
      throw error;
    }
    return value;
  };

  id(id: Index): Index {
    return this.runSchema(this.joi.object({
      id: this.joi.number().integer().positive().required,
    }))<Index>(id);
  }

  productBody(newProduct: NewProduct): NewProduct {
    return this.runSchema(this.joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    }))<NewProduct>(newProduct);
  }

  userBody(newUser: NewUser) {
    return this.runSchema(this.joi.object({
      username: this.joi.string().min(3).required(),
      classe: this.joi.string().min(3).required(),
      level: this.joi.number().min(1).required(),
      password: this.joi.string().min(8).required(),
    }))<NewUser>(newUser);
  }
}

export default Validate;
import Joi, { Root, Schema } from 'joi';
import Unprocessable from '../errors/Unprocessable';
import { ProductOrder } from '../types/order.type';
import { Index, NewProduct } from '../types/product.type';
import { NewUser, UserLogin } from '../types/user.type';

class Validate {
  joi: Root;

  constructor() {
    this.joi = Joi;
  }

  runSchema = (schema: Schema) => <T>(itemToScan: T): T => {
    const { error, value } = schema.validate(itemToScan);
    if (error) {
      if (error.message.includes('must')) throw new Unprocessable(error.message);
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

  userLoginBody(user: UserLogin) {
    return this.runSchema(this.joi.object({
      username: this.joi.string().required(),
      password: this.joi.string().required(),
    }))<UserLogin>(user);
  }

  productOrderBody(products: ProductOrder) {
    return this.runSchema(this.joi.object({
      productsIds: this.joi.array() // https://joi.dev/api/?v=17.6.0#anyruleset---aliases-
        .$.has(this.joi.number()).rule({ message: '"productsIds" must include only numbers' })
        .required(),
    }))<ProductOrder>(products);
  }
}

export default Validate;
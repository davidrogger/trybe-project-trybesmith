import Joi, { Root, Schema } from "joi";
import Unprocessable from "../errors/Unprocessable";
import { Index, NewProduct } from "../interface/product.interface";

class Validate {
  joi: Root;

  constructor() {
    this.joi = Joi;
  }

  runSchema = (schema: Schema) => <T>(itemToScan: T): T => {
    const { error, value } = schema.validate(itemToScan);
    if (error) {
      if (error.message.includes('must be')) throw new Unprocessable(error.message);
      throw error
    };
    return value;
  }

  id(id: Index) {
    return this.runSchema(this.joi.object({
        id: this.joi.number().integer().positive().required
      }))<Index>(id);
  }

  productBody(newProduct: NewProduct) {
    return this.runSchema(Joi.object({
        name: Joi.string().min(3).required(),
        amount: Joi.string().min(3).required(),
      }))<NewProduct>(newProduct);
  }

};

export default Validate;
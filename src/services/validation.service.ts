import Joi, { Schema } from "joi";
import { Index, NewProduct } from "../interface/product.interface";

const runSchema= (schema: Schema) => <T>(itemToScan: T): T => {
  const { error, value } = schema.validate(itemToScan);
  if (error) throw error;
  return value;
}

const validate = {
  id: runSchema(Joi.object({
    id: Joi.number().integer().positive().required
  }))<Index>,
  productBody: runSchema(Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  }))<NewProduct>,
};

export default validate;
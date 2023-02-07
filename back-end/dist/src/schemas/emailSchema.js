import Joi from "joi";
export var emailSchema = Joi.object({
    email: Joi.string().email().required()
});

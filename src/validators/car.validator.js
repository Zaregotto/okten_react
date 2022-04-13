import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().min(2).max(20).required().messages({
        'string.empty':'Model не може бути пустим',
        'string.min':'Model має бути мінімум 2 символа',
        'string.max':'Model може бути максиму 20 символів'
    }),
    price:Joi.number().min(0).max(10000000).required().messages({
        'number.empty':'Price не може бути пустим',
        'number.max':'Price може бути максиму 1000000 значенням'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty':'Рік не може юути пустим',
        'number.min':'Рік не може бути меншим за 1990',
        'number.max':'Рік не може бути більший за 2022'
    })
});

export {carValidator}
const { body } = require('express-validator');
const { validateFields } = require('./validate-fields');

 
const validateCel = [
    body('recipient', 'Ingresa un numero celular valido con el indicador del pais +57 seguido de los 10 digitos sin espacios').notEmpty().isMobilePhone(),
    validateFields
];

module.exports = validateCel;
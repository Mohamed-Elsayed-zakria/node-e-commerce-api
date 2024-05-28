const { param, validationResult } = require('express-validator');
const validatorMiddelware = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }
    next();
};

module.exports = validatorMiddelware
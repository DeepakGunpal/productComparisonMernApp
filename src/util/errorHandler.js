//?----------------------------- error handler ----------------------------

const handleErrors = (err) => {
    let errors = {};
    // duplicate email error
    if (err.code === 11000) {
        errors.name = 'Product name not available'
        return errors;
    }
    // validation errors
    if (err.message.includes('product validation failed')) {
        // if (err.errors.properties) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
        // }
    }
    return errors;
}

module.exports = handleErrors;
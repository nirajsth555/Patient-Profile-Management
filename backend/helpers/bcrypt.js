const bcrypt = require('bcrypt');
const { error } = require('./constants');

const encrypt = async (toEncryptText, saltRounds = 10) => {
    try {
        const hashed = await bcrypt.hash(toEncryptText, saltRounds);
        return hashed;
    } catch (err) {
        throw err;
    }
}

const compare = async (hashedText, nonHashedText) => {
    try {
        const checked = await bcrypt.compare(nonHashedText, hashedText);
        return checked;
    } catch (err) {
        throw new Error(error.BCRYPT_D)
    }
}

module.exports = {
    encrypt,
    compare
}
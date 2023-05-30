const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { error } = require("../helpers/constants");

module.exports = {
    createUser: async (payload) => {
        try {
            const user = await prisma.user.create(
                {
                    data: payload
                }
            );
            return user;
        } catch (err) {
            throw err;
        }

    },

    findUser: async (payload) => {
        try {
            const user = await prisma.user.findUnique({
                where: payload
            });
            if (!user) {
                throw new Error(error.USER_NOT_FOUND)
            };
            return user;
        } catch (err) {
            throw err;
        }
    }
}
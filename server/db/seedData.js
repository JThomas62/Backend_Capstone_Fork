const {
    client,
    createGenre,
    createUser,
    createBook,
    createComment,
} = require("./index");

async function createInitialGenres() {
    try {
        console.log("Starting to create genres...");

        // await createGenre();

        console.log("Finished creating genres!");
    } catch (error) {
        console.error("Error creating genres!");
        throw error;
    }
}

async function createInitialUsers() {
    try {
        console.log("Starting to create users...");

        // await createUser();

        console.log("Finished creating users!");
    } catch (error) {
        console.error("Error creating users!");
        throw error;
    }
}

async function createInitialBooks() {
    try {
        console.log("Starting to create books...");

        // await createBook();

        console.log("Finished creating books!");
    } catch (error) {
        console.error("Error creating books!");
        throw error;
    }
}

async function createInitialComments() {
    try {
        console.log("Starting to create comments...");

        // await createComments();

        console.log("Finished creating comments!");
    } catch (error) {
        console.error("Error creating comments!");
        throw error;
    }
}

module.exports = {
    createInitialGenres,
    createInitialUsers,
    createInitialBooks,
    createInitialComments,
}
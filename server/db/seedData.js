const {
  client,
  createGenre,
  getAllGenres,
  createBook,
  getAllBooks,
  createUser,
  getAllUsers,
  createComment,
  getAllComments,
} = require("./index");

async function createInitialGenres() {
  try {
    console.log("Starting to create genres...");

    // Add more: await createGenre();

    await createGenre({
      name: "fiction",
    });
    await createGenre({
      name: "horror",
    });
    await createGenre({
      name: "cookbook",
    });
    await createGenre({
      name: "science fiction",
    });
    await createGenre({
      name: "poetry",
    });
    await createGenre({
      name: "classics",
    });
    await createGenre({
      name: "ebooks",
    });
    await createGenre({
      name: "historical fiction",
    });
    await createGenre({
      name: "young adult",
    });
    await createGenre({
      name: "fantasy",
    });
    await createGenre({
      name: "mystery",
    });
    await createGenre({
      name: "nonfiction",
    });
    await createGenre({
      name: "chidren's",
    });
    console.log("Finished creating genres!");
  } catch (error) {
    console.error("Error creating genres!");
    throw error;
  }
}

async function createInitialBooks() {
  try {
    console.log("Starting to create books...");

    // Add more: await createBook();

    await createBook({
      title: "Hucklberry Finn",
      author: "Mark Twain",
      rating: 4.33,
      description:
        "Adventures of Huckleberry Finn is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885.",
      genre_id: 1,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/Huckleberry_Finn_book.JPG",
      active: true,
    });
    await createBook({
      title: "Oh. It's You.: Love Poems by Cats",
      author: "Francesco Marciuliano",
      rating: 4.12,
      description:
        "Cats have so many ways to say I love you. Sometimes it's a gentle purr and a slow blink. Sometimes it's a tiny dead animal offered in tribute. And sometimes, it's expressed in that deepest of cat love languages: poetry.",
      genre_id: 2,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681807772i/123204599.jpg",
      active: false,
    });

    console.log("Finished creating books!");
  } catch (error) {
    console.error("Error creating books!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    // Add more: await createUser();

    await createUser({
      name: "Al Bert",
      email: "Al@gmail.com",
      username: "albert",
      password: "bertie99",
      status: "member",
    });
    await createUser({
      name: "Just Sandra",
      email: "Just@gmail.com",
      username: "sandra",
      password: "2sandy4me",
      status: "admin",
    });
    await createUser({
      name: "Joshua",
      email: "Josh@gmail.com",
      username: "dungeon",
      password: "master",
      status: "engineer",
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialComments() {
  try {
    console.log("Starting to create comments...");

    // Add more: await createComment();

    await createComment({
      user_id: 1,
      book_id: 1,
      content: "I enjoyed this book tremendously.",
      rating: 5.0,
    });

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
};

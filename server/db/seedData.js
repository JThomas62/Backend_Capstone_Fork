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
  deleteGenreById,
  addGenreToBook,
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
      name: "children's",
    });
    await createGenre({
      name: "contemporary",
    });
    await createGenre({
      name: "suspense",
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
      title: "The Adventures of Hucklberry Finn",
      author: "Mark Twain",
      rating: 4.33,
      description:
        "Huckleberry Finn escapes from his evil, drunken father who is trying to steal his treasure. Huck befriends Jim, a runaway slave and together they float towards freedom on a raft down the Mississippi River.",
      genre_id: 1,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1395132462i/223663.jpg",
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
    await createBook({
      title: "The Scarlet Alchemist",
      author: "Kylie Lee Baker",
      rating: 4.18,
      description:
        "Zilan dreams of becoming a royal alchemist, of providing for her family by making alchemical gold and gems for the wealthy to eat in order to stay young forever.",
      genre_id: 1,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676055441i/66098770.jpg",
      active: true,
    });
    await createBook({
      title: "Edenville",
      author: "Sam Rebelein",
      rating: 3.33,
      description:
        "An unsettling, immersive, and wildly entertaining debut novel from an exciting new voice in horror for fans of Paul Tremblay and Stephen Graham Jones.",
      genre_id: 2,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688416912i/75668276.jpg",
      active: false,
    });
    await createBook({
      title:
        "The Secret History of Christmas Baking: Recipes & Stories from Tomb Offerings to Gingerbread Boys",
      author: "Linda Raedisch",
      rating: 4.28,
      description:
        "Explore the Surprising and Sometimes Dark Origins of Beloved Holiday Bakes.",
      genre_id: 3,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680964558i/126804216.jpg",
      active: true,
    });
    await createBook({
      title: "These Burning Stars",
      author: "Bethany Jacobs",
      rating: 4.39,
      description:
        "A dangerous cat-and-mouse quest for revenge. An empire that spans star systems, built on the bones of a genocide. A carefully hidden secret that could collapse worlds, hunted by three women with secrets of their own.",
      genre_id: 4,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686947278i/75593500.jpg",
      active: false,
    });
    await createBook({
      title: "Beholder",
      author: "Ryan La Sala",
      rating: 4.12,
      description:
        "From Ryan La Sala, author of the tantalizingly twisted The Honeys and riotously imaginative Reverie, comes a chilling new contemporary fable about art, aesthetic obsession, and the gaze that peers back at us from behind our reflections.",
      genre_id: 2,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675956367i/61779957.jpg",
      active: false,
    });
    await createBook({
      title:
        "The Dictionary People: The Unsung Heroes Who Created the Oxford English Dictionary",
      author: "Sarah Ogilvie",
      rating: 4.21,
      description:
        "A history and celebration of the many far-flung volunteers who helped define the English language, word by word",
      genre_id: 2,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689802069i/193544124.jpg",
      active: false,
    });
    await createBook({
      title: "What the River Knows",
      author: "Isabel Ibañez",
      rating: 4.11,
      description:
        "Bolivian-Argentinian Inez Olivera belongs to the glittering upper society of nineteenth century Buenos Aires, and like the rest of the world, the town is steeped in old world magic that’s been largely left behind or forgotten.",
      genre_id: 10,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674234543i/65213381.jpg",
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
      status: "member",
    });
    await createUser({
      name: "Sam",
      email: "sammy@gmail.com",
      username: "sandman",
      password: "whitesand",
      status: "member",
    });
    await createUser({
      name: "Em",
      email: "me@gmail.com",
      username: "template",
      password: "copier",
      status: "admin",
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
      rating: 4.0,
    });
    await createComment({
      user_id: 2,
      book_id: 2,
      content: "I just love poetry and cats, so it's perfect!",
      rating: 4.05,
    });
    await createComment({
      user_id: 3,
      book_id: 3,
      content: "Fast moving story line with plenty of plot twists.",
      rating: 4.27,
    });
    await createComment({
      user_id: 4,
      book_id: 1,
      content: "Too scared to continue.",
      rating: 5.0,
    });
    console.log("Finished creating comments!");
  } catch (error) {
    console.error("Error creating comments!");
    throw error;
  }
}
async function createInitialBookGenres() {
  try {
    console.log("Starting CreateInitialBookGenres");
    await addGenreToBook({ book_id: 1, genre_id: 1 });
    await addGenreToBook({ book_id: 1, genre_id: 6 });
    await addGenreToBook({ book_id: 1, genre_id: 10 });
    await addGenreToBook({ book_id: 2, genre_id: 5 });
    await addGenreToBook({ book_id: 3, genre_id: 9 });
    await addGenreToBook({ book_id: 3, genre_id: 10 });
    await addGenreToBook({ book_id: 4, genre_id: 11 });
    await addGenreToBook({ book_id: 4, genre_id: 8 });
    await addGenreToBook({ book_id: 3, genre_id: 1 });
    await addGenreToBook({ book_id: 4, genre_id: 2 });
    await addGenreToBook({ book_id: 5, genre_id: 3 });
    await addGenreToBook({ book_id: 5, genre_id: 7 });
    await addGenreToBook({ book_id: 6, genre_id: 4 });
    await addGenreToBook({ book_id: 6, genre_id: 1 });
    await addGenreToBook({ book_id: 7, genre_id: 7 });
    await addGenreToBook({ book_id: 6, genre_id: 14 });
    await addGenreToBook({ book_id: 7, genre_id: 15 });
    await addGenreToBook({ book_id: 8, genre_id: 12 });
    await addGenreToBook({ book_id: 9, genre_id: 8 });
    await addGenreToBook({ book_id: 9, genre_id: 9 });
    await addGenreToBook({ book_id: 2, genre_id: 13 });
    console.log("Finished CreateInitialBookGenres");
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createInitialGenres,
  createInitialUsers,
  createInitialBooks,
  createInitialComments,
  createInitialBookGenres,
};

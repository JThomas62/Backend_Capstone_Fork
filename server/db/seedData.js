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
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546096879i/2956.jpg",
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
    await createBook({
      title: "The Reformatory",
      author: "Tananarive Due",
      rating: 4.56,
      description:
        "A gripping, page-turning novel set in Jim Crow Florida that follows Robert Stephens Jr. as he’s sent to a segregated reform school that is a chamber of terrors where he sees the horrors of racism and injustice, for the living, and the dead.",
      genre_id: 8,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686761184i/62919847.jpg",
      active: false,
    });
    await createBook({
      title: "Real Superfoods: Everyday Ingredients to Elevate Your Health",
      author: "Ocean Robbins",
      rating: 4.88,
      description:
        "Complete with over 65 recipes and full-color photos, a deep dive into the affordable and easily findable superfoods that can do the most good for the most people, from the co-founder of Food Revolution Network and author of 31-Day Food Revolution.",
      genre_id: 3,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682068645i/123505417.jpg",
      active: false,
    });
    await createBook({
      title: "Everyone on This Train Is a Suspect",
      author: "Benjamin Stevenson",
      rating: 4.19,
      description:
        "For fans of Richard Osman and Anthony Horowitz, a fiendishly fun locked room murder mystery from the author of the indie darling Everyone in My Family Has Killed Someone —this time set on a train full of mystery writers, agents, editors, and fans.",
      genre_id: 11,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692905897i/167006698.jpg",
      active: false,
    });
    await createBook({
      title: "The Nighthouse Keeper",
      author: "Lora Senf",
      rating: 4.39,
      description:
        "Evie once again leaves her world behind to rescue Blight Harbor’s ghosts in this second book in the bone-chilling middle grade Blight Harbor trilogy that’s reminiscent of Doll Bones and Small Spaces.",
      genre_id: 13,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676324224i/101140526.jpg",
      active: false,
    });
    await createBook({
      title: "Frizzy Haired Zuzu",
      author: "Medeia Sharif",
      rating: 4.33,
      description:
        "Zuzu loves riding her bike and dancing to all kinds of music. Her curly red hair would bounce when she danced. But Zuzu hates her hair. The older she gets, the bigger it grows. With her sisters and mother, she tries several hilarious—yet disastrous—solutions to tame her frizzy hair. ",
      genre_id: 13,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679463947i/61375743.jpg",
      active: false,
    });
    await createBook({
      title: "Treasure Island: Runaway Gold",
      author: "Jewell Parker Rhodes",
      rating: 3.97,
      description:
        "Bestselling and award-winning author Jewell Parker Rhodes reimagines the classic novel Treasure Island  by Robert Louis Stevenson in this thrilling adventure set in modern-day Manhattan, in which three children must navigate the city’s hidden history, dodge a threatening crew of skater kids, and decide who they can really trust in order to hunt down a long-buried treasure. ",
      genre_id: 13,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681319753i/75668247.jpg",
      active: false,
    });
    await createBook({
      title: "Shoot the Moon",
      author: "Isa Arsén",
      rating: 3.97,
      description:
        "Intelligent but isolated recent physics graduate Annie Fisk feels an undeniable pull toward space. Her childhood memories dimmed by loss, she has left behind her home, her family, and her first love in pursuit of intellectual fulfillment.",
      genre_id: 8,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685353197i/78299257.jpg",
      active: false,
    });
    await createBook({
      title: "Edison in the Hood",
      author: "Nadia Uddin",
      rating: 4.22,
      description:
        "When Aisha Malik’s mother died, she took a secret with her—one that destroyed her relationship with Aisha’s brother, Sam. But what if Aisha could revive her mother’s brain just long enough to reenact their last conversation and discover the truth?",
      genre_id: 1,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659716575i/61867357.jpg",
      active: false,
    });
    await createBook({
      title: "Bittersweet in the Hollow",
      author: "Kate Pearsall",
      rating: 4.1,
      description:
        "In this beautifully dark and enthralling YA, four sisters with unusual talents investigate a mysterious disappearance in their secluded Appalachian town. For fans of House of Hollow and Wilder Girls!",
      genre_id: 9,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675366363i/78292413.jpg",
      active: false,
    });
    await createBook({
      title: "Throne of Glass eBook Bundle: An 8 Book Bundle",
      author: "Sarah J. Maas",
      rating: 4.71,
      description:
        "When magic has gone from the world and a vicious king rules from his throne of glass, an assassin comes to the castle. She is a prisoner, but if she can defeat twenty-three killers, thieves, and warriors in a competition to find the greatest assassin in the land, she will become the king's champion and earn her freedom. ",
      genre_id: 11,
      image_url:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607171677i/56168468.jpg",
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
      status: "admin",
    });
    await createUser({
      name: "Sam",
      email: "sammy@gmail.com",
      username: "sandman",
      password: "whitesand",
      status: "admin",
    });
    await createUser({
      name: "Em",
      email: "me@gmail.com",
      username: "template",
      password: "copier",
      status: "admin",
    });
    await createUser({
      name: "Ingrid",
      email: "grid@gmail.com",
      username: "bagels",
      password: "cheese",
      status: "admin",
    });
    await createUser({
      name: "Judy",
      email: "sfo@gmail.com",
      username: "crochet",
      password: "knitting",
      status: "member",
    });
    await createUser({
      name: "Kate",
      email: "kite@gmail.com",
      username: "cloudy",
      password: "bluish",
      status: "member",
    });
    await createUser({
      name: "Lazaro",
      email: "doc@gmail.com",
      username: "doctor",
      password: "intern",
      status: "member",
    });
    await createUser({
      name: "Charllie",
      email: "char@gmail.com",
      username: "cheese",
      password: "mouse",
      status: "member",
    });
    await createUser({
      name: "Debbie",
      email: "deb@gmail.com",
      username: "donuts",
      password: "coffee",
      status: "member",
    });
    await createUser({
      name: "Elvis",
      email: "pres@gmail.com",
      username: "rocknroll",
      password: "famous",
      status: "member",
    });
    await createUser({
      name: "Frankie",
      email: "sina@gmail.com",
      username: "golden",
      password: "bridge",
      status: "member",
    });
    await createUser({
      name: "Greg",
      email: "tree@gmail.com",
      username: "magnolia",
      password: "grands",
      status: "member",
    });
    await createUser({
      name: "Henry",
      email: "hen@gmail.com",
      username: "prince",
      password: "sceptre",
      status: "member",
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
    await addGenreToBook({ book_id: 10, genre_id: 2 });
    await addGenreToBook({ book_id: 10, genre_id: 8 });
    await addGenreToBook({ book_id: 10, genre_id: 11 });
    await addGenreToBook({ book_id: 11, genre_id: 3 });
    await addGenreToBook({ book_id: 12, genre_id: 1 });
    await addGenreToBook({ book_id: 12, genre_id: 11 });
    await addGenreToBook({ book_id: 12, genre_id: 15 });
    await addGenreToBook({ book_id: 13, genre_id: 2 });
    await addGenreToBook({ book_id: 13, genre_id: 10 });
    await addGenreToBook({ book_id: 13, genre_id: 13 });
    await addGenreToBook({ book_id: 13, genre_id: 11 });
    await addGenreToBook({ book_id: 14, genre_id: 13 });
    await addGenreToBook({ book_id: 15, genre_id: 13 });
    await addGenreToBook({ book_id: 15, genre_id: 10 });
    await addGenreToBook({ book_id: 15, genre_id: 11 });
    await addGenreToBook({ book_id: 16, genre_id: 1 });
    await addGenreToBook({ book_id: 16, genre_id: 4 });
    await addGenreToBook({ book_id: 17, genre_id: 1 });
    await addGenreToBook({ book_id: 17, genre_id: 4 });
    await addGenreToBook({ book_id: 18, genre_id: 9 });
    await addGenreToBook({ book_id: 18, genre_id: 15 });
    await addGenreToBook({ book_id: 18, genre_id: 15 });
    await addGenreToBook({ book_id: 19, genre_id: 7 });
    await addGenreToBook({ book_id: 19, genre_id: 9 });
    await addGenreToBook({ book_id: 19, genre_id: 10 });

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
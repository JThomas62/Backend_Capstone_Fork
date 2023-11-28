CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    rating DECIMAL(3,2),
    description TEXT,
    genre_id INT NOT NULL,
    image_url VARCHAR(255),
    active BOOLEAN,
    CONSTRAINT fk_genre_id FOREIGN KEY(genre_id) REFERENCES genres(genre_id)
);
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    status VARCHAR(20)
);
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    comment TEXT NOT NULL,
    rating DECIMAL(3,2),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books(book_id)
);
CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    genre_id INT NOT NULL,
    CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books(book_id),
    CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES genres(genre_id),
    CONSTRAINT bookGenres_book_Id_genre_Id_unique UNIQUE (book_id, genre_id)
);
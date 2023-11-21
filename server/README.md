11.19.2023
BookGenres endpoints:

To get all BookGenres:
http://localhost:3006/api/v1/bookgenres
method: GET
Returns alll the BookGenres.

To get all genres for a particular book:
http://localhost:3006/api/v1/bookgenres/:book_id
method: GET
Returns array of genres.

To add genre to a book:
http://localhost:3006/api/v1/bookgenres/:book_id
method: POST
body: {genre_id}
Returns the added bookgenre.

To delete a genre from a book:
http://localhost:3006/api/v1/bookgenres/:book_id
method: DELETE
body: {genre_id}
Returns the deleted bookgenre.

To get all comments for a specific book_id:
http://localhost:3006/api/v1/comments/book/1
method: GET
Returns array of comments belonging to a specific book.
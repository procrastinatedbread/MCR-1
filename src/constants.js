export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/books") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            books: [
              {
                id: 1,
                title: "The Hitchhiker's Guide to the Galaxy",
                author: "Douglas Adams",
                category: "read",
                image: "https://covers.openlibrary.org/b/id/1535305-L.jpg"
              },
              {
                id: 2,
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                category: "read",
                image: "https://covers.openlibrary.org/b/id/54953-L.jpg"
              },
              {
                id: 3,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                category: "read",
                image: "https://covers.openlibrary.org/b/id/617917-L.jpg"
              },
              {
                id: 4,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                category: "reading",
                image: "https://covers.openlibrary.org/b/id/443276-L.jpg"
              },
              {
                id: 5,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                category: "reading",
                image: "https://covers.openlibrary.org/b/id/900209-L.jpg"
              },
              {
                id: 6,
                title: "1984",
                author: "George Orwell",
                category: "reading",
                image: "https://covers.openlibrary.org/b/id/1000127-L.jpg"
              },
              {
                id: 7,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                category: "wantToRead",
                image: "https://covers.openlibrary.org/b/id/255356-L.jpg"
              },
              {
                id: 8,
                title: "The Grapes of Wrath",
                author: "John Steinbeck",
                category: "wantToRead",
                image: "https://covers.openlibrary.org/b/id/1233856-L.jpg"
              },
              {
                id: 9,
                title: "The Handmaid's Tale",
                author: "Margaret Atwood",
                category: "none",
                image: "https://covers.openlibrary.org/b/id/430511-L.jpg"
              },
              {
                id: 10,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                category: "none",
                image: "https://covers.openlibrary.org/b/id/652394-L.jpg"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

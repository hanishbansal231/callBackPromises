const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  ];

  function detailBook(books,callback){
   let titles = books.map(book => book.title);
   titles.sort();
   callback(titles);
  }

  detailBook(books,function(titles){
    console.log(titles.join(", "));
  });
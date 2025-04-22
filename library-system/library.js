class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Book borrowed: ${this.title}`);
    } else {
      console.log(`Book is not available: ${this.title}`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`Book returned: ${this.title}`);
  }
}

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  borrow(book) {
    if (book.isAvailable) {
      book.borrowBook();
      this.borrowedBooks.push(book);
      console.log(`${this.name} borrowed "${book.title}"`);
    } else {
      console.log(`${this.name} cannot borrow "${book.title}" as it is not available`);
    }
  }

  return(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
      console.log(`${this.name} returned "${book.title}"`);
    } else {
      console.log(`${this.name} does not have "${book.title}" to return`);
    }
  }
}

// Test the system
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
const book2 = new Book("1984", "George Orwell", "0987654321");

const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);

user1.borrow(book1);
user2.borrow(book1); // Should show not available
user2.borrow(book2);

user1.return(book1);
user2.borrow(book1); // Now should be available

user2.return(book2);
user2.return(book1);

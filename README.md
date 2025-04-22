# Library System

This project implements a simple library system using JavaScript classes.

## Description

- The `Book` class represents a book with properties: title, author, isbn, and availability status.
- The `User` class represents a user with properties: name, id, and a list of borrowed books.
- Users can borrow books if they are available and return books they have borrowed.

## Demo Output

The system demonstrates borrowing and returning books with console logs indicating the actions and availability status.

Example output:

```
Book borrowed: The Great Gatsby
Alice borrowed "The Great Gatsby"
Book is not available: The Great Gatsby
Bob cannot borrow "The Great Gatsby" as it is not available
Book borrowed: 1984
Bob borrowed "1984"
Book returned: The Great Gatsby
Alice returned "The Great Gatsby"
Book borrowed: The Great Gatsby
Bob borrowed "The Great Gatsby"
Book returned: 1984
Bob returned "1984"
Book returned: The Great Gatsby
Bob returned "The Great Gatsby"

class BookList {
    constructor() {
        this.books = [];
        this.currentRead = 0;
    }
    add(books = []) {
        this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook() {
        return this.books[this.currentRead];
    }
    getNextBook() {
        this.books[this.currentRead + 1];
        return this.books[this.currentRead];
    }
    getPrevBook() {
        this.books[this.currentRead - 1];
        return this.books[this.currentRead];
    }
    changeCurrentBook(newIndex) {
        this.currentRead = newIndex;
    }
}

class Book {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

let book1 = new Book(`Look`, `Fiction`, `Dorjee Lhatso`);
let book2 = new Book(`Hear`, `Non-fiction`, `Tenzin Chung`);
let book3 = new Book(`Watch`, `Science-fiction`, `Nelson Bennings`);
let book4 = new Book(`Mew`, `Historical-fiction`, `Sung Khang`);
let book5 = new Book(`Bark`, `Autobiography`, `G.H. Blart`);
let book6 = new Book(`Catch`, `Satire`, `Supriya Roy`);
let book7 = new Book(`Fly`, `Satire`, `Supriya Roy`);
let book8 = new Book(`Run`, `Satire`, `Supriya Roy`);

let list = new BookList();
list.add([book1, book2, book3, book4, book5, book6, book7, book8]);
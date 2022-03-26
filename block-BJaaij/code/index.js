class BookList {
    constructor(bookArr, currentRead) {
        this.bookArr = bookArr;
        this.currentRead = currentRead;
    }
    add(bookArray) {
        this.bookArr.push(bookArray);
        return this.bookArr;
    }
    getCurrentBook() {
        return this.bookArr[this.currentRead];
    }
    getNextBook() {
        return this.bookArr[this.currentRead + 1];
    }
    getPrevBook() {
        return this.bookArr[this.currentRead - 1];
    }
    changeCurrentBook(newIndex) {
        this.currentRead = newIndex;
    }
}

class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

let book1 = new Book(`Look`, `Fiction`, `Dorjee Lhatso`, false, 1648272593621)
let book2 = new Book(`Hear`, `Non-fiction`, `Tenzin Chung`, false, 1648222393621)
let book3 = new Book(`Watch`, `Science-fiction`, `Nelson Bennings`, false, 1448272593621)
let book4 = new Book(`Mew`, `Historical-fiction`, `Sung Khang`, false, 1648272593621)
let book5 = new Book(`Bark`, `Autobiography`, `G.H. Blart`, false, 1148272193621)
let book6 = new Book(`Catch`, `Satire`, `Supriya Roy`, false, 1141112193621)

let list = new BookList([book1, book2, book3, book4, book5], 2);
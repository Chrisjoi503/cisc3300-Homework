CREATE DATABASE `homework_9`;
USE homework_9;

CREATE TABLE `library`
(
    `id` 				int(11)	NOT NULL AUTO_INCREMENT,
    `name` 				varchar(80)	NOT NULL ,
     primary key (`id`)
);

CREATE TABLE `books`
(
    `id` 					int(11) NOT NULL AUTO_INCREMENT,
    `name` 					varchar(80)	NOT NULL ,
     primary key (`id`)
    
);

CREATE TABLE `libraryBook`
(
    `id` 					int(11)	NOT NULL AUTO_INCREMENT,
    `libraryId` 			int (11) NOT NULL,
    `bookId` 				int (11) NOT NULL,
     primary key (`id`)	
     
);


INSERT INTO library (name)
VALUES ('Manhattan Library');
INSERT INTO library (name)
VALUES ('Brooklyn Library');
INSERT INTO library (name)
VALUES ('Bronx Library');
INSERT INTO library (name)
VALUES ('Queens Library');
INSERT INTO library (name)
VALUES ('Staten Island Library');


INSERT INTO books (name)
VALUES ('Biscuits');

INSERT INTO books (name)
VALUES ('The Lost Kitten');

INSERT INTO books (name)
VALUES ('Little Stuart');

INSERT INTO books (name)
VALUES ('Corduroy');

INSERT INTO books (name)
VALUES ('The City of Ember');

INSERT INTO books (name)
VALUES ('Pete the Cat');

INSERT INTO books (name)
VALUES ('Faceless');

INSERT INTO books (name)
VALUES ('Ember in the Ashes');

INSERT INTO books (name)
VALUES ('Apothecary');


INSERT INTO libraryBook(libraryId, bookId)
VALUES (1, 2);

INSERT INTO libraryBook(libraryId, bookId)
VALUES (2, 3);

INSERT INTO libraryBook(libraryId, bookId)
VALUES (3, 5);

INSERT INTO libraryBook(libraryId, bookId)
VALUES (4, 7);

INSERT INTO libraryBook(libraryId, bookId)
VALUES (5, 8);


SELECT name
FROM library
WHERE id=1;

SELECT name
FROM books 
WHERE name like '%the%';

SELECT * 
FROM books
ORDER BY name asc;

SELECT name from books join libraryBook on books.id=libraryBook.bookId;

UPDATE books SET name = 'Pete the Dog' WHERE id = 6;

DELETE FROM books where id = 1;

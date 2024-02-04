import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = [
    {
      bookId: 1,
      title: 'Book 1',
      genre: {
        genreId: 101,
        name: 'Fiction',
        rack_number: 'A1',
        floor: 1,
        description: 'A collection of fictional stories.',
      },
      isbn: '123456789',
      publication_year: 2020,
      created_at: new Date('2022-02-10T10:30:00'),
      availableQuantity: 5,
      publisher: 'Publisher A',
    },
    {
      bookId: 2,
      title: 'Book 2',
      genre: {
        genreId: 102,
        name: 'Science Fiction',
        rack_number: 'B2',
        floor: 2,
        description: 'Stories involving futuristic science and technology.',
      },
      isbn: '987654321',
      publication_year: 2019,
      created_at: new Date('2022-02-12T15:45:00'),
      availableQuantity: 8,
      publisher: 'Publisher B',
    },
  ];
  
}

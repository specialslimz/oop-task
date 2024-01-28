
///////// Question 3
let Movies = [
  {
    id: 1,
    name: "batman",
    genre: "fiction",
    price: 300,
    rating: 10.0,
  },
  {
    id: 2,
    name: "superman",
    genre: "fiction",
    price: 200,
    rating: 10.0,
  },
  {
    id: 3,
    name: "ironman",
    genre: "fiction",
    price: 20,
    rating: 5.0,
  },
  {
    id: 4,
    name: "man",
    genre: "horror",
    price: 15,
    rating: 75.0,
  },
];

let rentedMovies = [];

class Movie {
  constructor(id, name, genre, year, price) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.year = year;
    this.price = price;
  }

  rentMovie(id) {
    const selectedMovie = Movies.find((movie) => movie.id === id);

    if (selectedMovie) {
      rentedMovies.push(selectedMovie);
    } else {
      console.log(
        `Movie with id: ${id} is not  available in the movies lists\n`
      );
    }
  }

  deleteMovie(id) {
    rentedMovies = rentedMovies.filter((movie) => movie.id !== id);
    console.log(`you have deleted movie with id ${id}\n`);
    return rentedMovies;
  }

  checkRentStatus() {
    if (rentedMovies.length === Movies.length) {
      console.log("All movies are rented out \n");
    } else {
      console.log("Not all movies are rented out \n");
    }
  }
  viewRentedMovies() {
    console.log(rentedMovies);
  }
}
const movie1 = new Movie();
movie1.rentMovie(1);
movie1.rentMovie(2);
movie1.rentMovie(3);
movie1.rentMovie(4);
// movie1.deleteMovie(1);
movie1.checkRentStatus();
// movie1.rentMovie(5);

console.log(rentedMovies);

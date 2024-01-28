//////// question 1////////////

class Travel {
  ticket = 2;
  location = "canada";
  transport = "airplane";

  static passengers = 5;

  static accessStatic() {
    return console.log(Travel.passengers);
  }
  displayTicket() {
    console.log(`you have ${this.ticket} tickets`);
  }
  displayLocation() {
    console.log(`You are going to ${this.location}`);
  }
}

const destination = new Travel();
destination.ticket = 10;
Travel.passengers = 20;
destination.location = "nigeria";
destination.displayLocation();
destination.displayTicket();
Travel.accessStatic();

//////// question 2///////////////
class Statistics {
  constructor(data) {
    this.data = data;
    this.number = data.length;
  }

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.number;
  }

  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    return sortedData.length % 2 === 0
      ? (sortedData[middle - 1] + sortedData[middle]) / 2
      : sortedData[middle];
  }

  mode() {
    const frequencyTable = {};
    let maxFrequency = 0;
    let mode = null;

    for (const value of this.data) {
      if (!frequencyTable[value]) {
        frequencyTable[value] = 1;
      } else {
        frequencyTable[value]++;
      }

      if (frequencyTable[value] > maxFrequency) {
        maxFrequency = frequencyTable[value];
        mode = value;
      }
    }

    return mode;
  }

  range() {
    const min = Math.min(...this.data);
    const max = Math.max(...this.data);
    return max - min;
  }

  variance() {
    let mean = this.mean();
    const sumOfSquaredDeviations = this.data.reduce(
      (acc, value) => acc + Math.pow(value - mean, 2),
      0
    );
    return Math.floor(sumOfSquaredDeviations / this.number);
  }

  standardDeviation() {
    return Math.floor(Math.sqrt(this.variance()));
  }

  quantileDeviation(quantile) {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const index = Math.floor((quantile * this.number) / 100);
    const quantileValue = sortedData[index];
    const sumOfAbsoluteDeviations = this.data.reduce(
      (acc, value) => acc + Math.abs(value - quantileValue),
      0
    );
    return sumOfAbsoluteDeviations / this.number;
  }

  absoluteDeviation(centralValue) {
    const sumOfAbsoluteDeviations = this.data.reduce(
      (acc, value) => acc + Math.abs(value - centralValue),
      0
    );
    return sumOfAbsoluteDeviations / this.number;
  }
}

// Example usage:
const data = [1, 2, 22, 8, 9, 23, 4, 6, 8, 10];
const stats = new Statistics(data);

console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("Variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());
console.log("Quantile Deviation:", stats.quantileDeviation(50));
console.log(
  "Absolute Deviation (mean):",
  stats.absoluteDeviation(stats.mean())
);

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

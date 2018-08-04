class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }  
  get title() {
    return this._title;
  }  
  get isCheckedOut() {
    return this._isCheckedOut;
  } 
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  } 
  getAverageRating() {
    var avg = 0 ;
    let sum = this.ratings.reduce((currentSum,rating) => currentSum + rating, 0);
    const length = this._ratings.length;
    avg = sum/length;
    return avg.toFixed(2);
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut
  } 
  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor (title,author,pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }  
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  printBook() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
    console.log(`Average Rating: ${this.getAverageRating()}`);
    console.log(`Checked Out: ${this.isCheckedOut}`);
    console.log("");
  }
}

class Movie extends Media {
  constructor (title,director,runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
  addMovieCast(castName) {
    this.movieCast.push(castName);
  }
  printMovie() {
    console.log(`Title: ${this.title}`);
    console.log(`Director: ${this.director}`);
    console.log(`Time: ${this.runTime}`);
    console.log(`Casts: ${this.movieCast}`);
    console.log(`Average Rating: ${this.getAverageRating()}`);
    console.log(`Checked Out: ${this.isCheckedOut}`);
    console.log("");
  }
}

class CD extends Media {
  constructor (title,artist,songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  } 
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  printCD() {
    console.log(`Title: ${this.title}`);
    console.log(`Artist: ${this.artist}`);
    console.log(`Songs: ${this.songs}`);
    console.log(`Average Rating: ${this.getAverageRating()}`);
    console.log(`Checked Out: ${this.isCheckedOut}`);
    console.log("");
  }
}

const princeCD = new CD('Purple Rain','Prince','Darling Nikki');
princeCD.addRating(100);
princeCD.addRating(75);
princeCD.toggleCheckOutStatus();
princeCD.printCD();


const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.printBook();


const speed = new Movie('Speed','Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addMovieCast('Vin Disel');
speed.addMovieCast('Angelina Jolie');
speed.printMovie();

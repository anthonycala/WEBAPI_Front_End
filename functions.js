

let displayOption = prompt("Found " + Title + " " + Director + " " + Genre + " . Do you want to know the movies 'Title', 'Director', or 'Genre'? Type the option you want or 'restart' or 'quit'");

switch(displayOption){
  case "Title":
  // TODO: Title of the movie
  break;
  case "Director":
  // TODO: Director
  break;
  case "Genre":
  // TODO: get genre
  break;
  case "restart":
  app(movie); // restart
  break;
  case "quit":
  return; // stop execution
  default:
  return mainMenu(movie, movie);
  // ask again
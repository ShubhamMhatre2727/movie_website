import "./LatestRelease.css";

export default function LatestRelease({setIsPreview}) {
  
  const movies = [
    {
      title: "Ahsoka",
      description: "After the fall of the Galactic Empire, former Jedi Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.",
      poster: "src/assets/latest release/ahsoka poster.jpg",
      background: "https://m.media-amazon.com/images/M/MV5BYmU4ODRlMTAtZWNiNS00NzdhLTkwYmQtMGNjN2Q2OTBlM2ZjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX1230_.jpg",
      rating: 7.7,
      genre: ["Action","Adventure","Drama","Fantasy","Sci-Fi"],
    },
    {
      title: "Bad Boys: Ride or Die",
      description: "This Summer, the world's favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy but this time with a twist: Miami's finest are now on the run.",
      poster: "src/assets/latest release/bad boys poster.webp",
      background:"https://m.media-amazon.com/images/M/MV5BOGJjOWRkNzEtMTdhMS00NDRlLTgxNDUtNGMxZTM0OTIyOTk1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX495_.jpg",
      rating: 7.2,
      genre: ["Action","Adventure","Comedy","Crime","Thriller"],
    },
    {
      title: "Civil War",
      description:"A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
      poster: "src/assets/latest release/civil war poster.webp",
      background:"https://m.media-amazon.com/images/M/MV5BNTUxMmZmODgtOTY1YS00NjE4LThmMjYtMjhjMDYzZGJmNTNiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX606_.jpg",
      rating: 7.0,
      genre: ["Adventure", "Action", "Thriller"],
    },
    {
      title: "Furiosa",
      description:"The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.",
      poster: "src/assets/latest release/furiosa poster.webp",
      rating: 7.6,
      genre: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      title: "Godzilla X Kong:The New Empire",
      poster: "src/assets/latest release/godzilla x k0ng poster.webp",
      rating: 7.2,
      genre: ["Action", "Adventure", "Drama"],
    },
    {
      title: "Inside Out 2",
      poster: "src/assets/latest release/inside out 2 poster.webp",
      rating: 7.2,
      genre: ["Adventure", "Animation"],
    },
    {
      title: "Kung Fu Panda",
      poster: "src/assets/latest release/kung fu panda poster.webp",
      rating: 7.2,
      genre: ["Adventure", "Animation"],
    },
    {
      title: "Kingdom of The Planet of the Apes",
      poster: "src/assets/latest release/planet of apes poster.webp",
      rating: 7.4,
      genre: ["Action", "Adventure", "Drama"],
    },
    {
      title: "The Watchers",
      poster: "src/assets/latest release/the watchers poster.webp",
      rating: 7.2,
      genre: ["Action", "Horror", "Drama"],
    },
  ];

  var i = 0;
  var MAX_LENGHT = Math.floor(movies.length / 2) * 190;

  const ul = document.querySelector(".latest-release ul");
  function backward() {
    (i > 0) && (i = i - 190);
    ul.scroll(i, 0);
  }
  function forward() {
    (i < MAX_LENGHT) && (i += 190);
    ul.scroll(i, 0);
  }
  return (
    <div className="latest-release">
      <h2>Latest Release</h2>
      <div className="backward" onClick={backward}>
        <span>&lt;</span>
      </div>
      <ul>
        {movies.map((movie, index) => {
          return (
            <li onClick={()=>setIsPreview(movie)}>
              <img
                src={movie.poster}
                alt=""
              />
              <h4>{movie.title}</h4>
              <small>⭐{movie.rating} | {movie.genre.join(", ")}</small>
            </li>
          );
        })}
      </ul>
      <div className="forward" onClick={forward}>
        <span>&gt;</span>
      </div>
    </div>
  );
}

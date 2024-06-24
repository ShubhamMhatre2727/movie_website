import "./LatestRelease.css";

export default function LatestRelease() {

  const movies = [
    {
      title: "Ahsoka",
      poster:"src/assets/latest release/ahsoka poster.jpg",
      rating: 7.7,
      genre: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      title: "Bad Boys: Ride or Die",
      poster: "src/assets/latest release/bad boys poster.webp",
      rating: 7.2,
      genre: ["Action", "Crime", "Drama"],
    },
    {
      title: "Civil War",
      poster: "src/assets/latest release/civil war poster.webp",
      rating: 7.0,
      genre: ["War", "Action", "Drama"],
    },
    {
      title: "Furiosa",
      poster: "src/assets/latest release/furiosa poster.webp",
      rating: 7.6,
      genre: ["Action", "Adventure", "Drama"],
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
  var MAX_LENGHT = Math.floor(movies.length/2) * 190;
  
  const ul = document.querySelector(".latest-release ul");
  function backward() {
    i > 0 && (i = i - 190);
    ul.scroll(i, 0);
  }
  function forward() {
    i < MAX_LENGHT && (i += 190);
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
            <li>
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

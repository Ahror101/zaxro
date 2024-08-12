import React from "react";
import "./styles.scss";

function App() {
  const movies = [
    {
      title: "Location Unknown",
      year: 2021,
      rating: 4.2,
      duration: "1hr 38min",
      genres: ["Italian", "Drama", "Indie"],
      poster: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg",
      cast: [
        {
          name: "Marco Andrews",
          image: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg",
        },
        {
          name: "Rebecca Floyd",
          image: "https://i.postimg.cc/8P7X7r7r/cast-12.jpg",
        },
        {
          name: "Antonio Herrera",
          image: "https://i.postimg.cc/2SvHwRFk/cast-13.jpg",
        },
      ],
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
    },
    {
      title: "Air",
      year: 2020,
      rating: 4,
      duration: "24min",
      genres: ["Romance", "Comedy", "Short"],
      poster: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg",
      cast: [
        {
          name: "Angelina Whyte",
          image: "https://i.postimg.cc/yY2QcYRp/cast-21.jpg",
        },
        {
          name: "Ivan Benson",
          image: "https://i.postimg.cc/R0BgpsXc/cast-22.jpg",
        },
      ],
      description: "Two strangers meet together on a plane flying to the alps.",
    },
    {
      title: "End Credits",
      year: 2021,
      rating: 4.7,
      duration: "1hr 41min",
      genres: ["Teen", "Comedy", "Drama"],
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg",
      cast: [
        {
          name: "Jessica Enduro",
          image: "https://i.postimg.cc/xd3twv4B/cast-31.jpg",
        },
        {
          name: "Charles Garcia",
          image: "https://i.postimg.cc/C1MmSZy5/cast-32.jpg",
        },
      ],
      description:
        "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
    },
    {
      title: "End Credits",
      year: 2021,
      rating: 4.7,
      duration: "1hr 41min",
      genres: ["Teen", "Comedy", "Drama"],
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg",
      cast: [
        {
          name: "Jessica Enduro",
          image: "https://i.postimg.cc/xd3twv4B/cast-31.jpg",
        },
        {
          name: "Charles Garcia",
          image: "https://i.postimg.cc/C1MmSZy5/cast-32.jpg",
        },
      ],
      description:
        "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
    },
    {
      title: "End Credits",
      year: 2021,
      rating: 4.7,
      duration: "1hr 41min",
      genres: ["Teen", "Comedy", "Drama"],
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg",
      cast: [
        {
          name: "Jessica Enduro",
          image: "https://i.postimg.cc/xd3twv4B/cast-31.jpg",
        },
        {
          name: "Charles Garcia",
          image:
            "https://avatars.mds.yandex.net/get-altay/5480011/2a0000017e3feeb7438f5b22c34829b08118/L_height",
        },
      ],
      description:
        "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
    },
    {
      title: "End Credits",
      year: 2021,
      rating: 4.7,
      duration: "1hr 41min",
      genres: ["Teen", "Comedy", "Drama"],
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg",
      cast: [
        {
          name: "Jessica Enduro",
          image:
            "https://avatars.mds.yandex.net/get-altay/5480011/2a0000017e3feeb7438f5b22c34829b08118/L_height",
        },
        {
          name: "Charles Garcia",
          image:
            "https://avatars.mds.yandex.net/get-altay/5480011/2a0000017e3feeb7438f5b22c34829b08118/L_height",
        },
      ],
      description:
        "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
    },
  ];

  return (
    <div data-aos="zoom-in-up">
      <div id="mahsulotlar" className="wrapper">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <div className="poster">
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="details">
              <h1>{movie.title}</h1>
              <h2>
                {movie.year} • PG • {movie.duration}
              </h2>
              <div className="rating">
                <span>{movie.rating}/5</span>
              </div>
              <div className="tags">
                {movie.genres.map((genre, index) => (
                  <span className="tag" key={index}>
                    {genre}
                  </span>
                ))}
              </div>
              <p className="desc">{movie.description}</p>
              <div className="cast">
                <h3>Cast</h3>
                <ul>
                  {movie.cast.map((actor, index) => (
                    <li key={index}>
                      <img
                        src={actor.image}
                        alt={actor.name}
                        title={actor.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

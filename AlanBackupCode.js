// Use this sample to create your own voice commands
intent("(Thank you|Thanks|Cheers|Much appreciated| Alright)(Raymond|)", (p) => {
  p.play(`No problem my dude.`);
});

let savedMovies = [];

// Most popular movies

intent(
  "(Show me|Give me|Check|Find|Which are) (the most|) $(popular* (.*)) (movies|movie|)",
  (p) => {
    let MOVIES_API_URL = "";

    if (p.popular.value.toLowerCase() == "popular") {
      MOVIES_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
    } else {
      p.play("Sorry mate, I didn't quite understand what you want.");
      return;
    }

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results } = JSON.parse(body);
      const movies = results.slice(0, 10);

      if (!movies.length) {
        p.play("I guess there are no popular movies in theater.");
        return;
      }

      savedMovies = movies;

      p.play({ command: "popularMovies", movies });
      p.play(`Here are the most ${p.popular.value} movies in theaters.`);

      p.play("Would you like to hear the titles?");
      p.then(confirmationTitle);
    });
  }
);

// Right now in theaters

intent("Show me movies in $(theaters* (.*)).", (p) => {
  let MOVIES_API_URL = "";

  if (p.theaters.toLowerCase() == "theaters") {
    const dateNow = new Date();
    const currentDate = dateNow.toISOString();
    const dateOld = new Date(dateNow.setDate(dateNow.getDate() - 14));
    const prevDate = dateOld.toISOString();
    MOVIES_API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${prevDate}&primary_release_date.lte=${currentDate}&sort_by=popularity.desc&api_key=${API_KEY}`;
  } else {
    p.play("Sorry mate, I didn't quite understand what you want.");
    return;
  }

  api.request(MOVIES_API_URL, (error, response, body) => {
    const { results } = JSON.parse(body);
    const movies = results.slice(0, 10);

    if (!movies.length) {
      p.play("I guess there are no popular movies in theater.");
      return;
    }

    savedMovies = movies;

    p.play({ command: "newMovies", movies });
    p.play(`Here are the movies in ${p.theaters.value} now.`);

    p.play("Would you like to hear the titles?");
    p.then(confirmationTitle);
  });
});

intent("Tell me info about the movie $(search* (.*))", (p) => {
  let MOVIES_API_URL = `https://api.themoviedb.org/3/search/movie?query=${p.search.value}&api_key=${API_KEY}`;

  api.request(MOVIES_API_URL, (error, response, body) => {
    const { results: movies } = JSON.parse(body);

    if (!movies.length) {
      p.play("Sorry, please try searching for another movie.");
      return;
    }

    savedMovies = movies;

    p.play({ command: "searchMovie", movies });
    p.play(`Here is the movie ${p.search.value}.`);

    p.play("Would you like to hear more about this movie?");
    p.then(confirmationOverview);
  });
});

const confirmationTitle = context(() => {
  intent("yes", async (p) => {
    for (let i = 0; i < savedMovies.length; i++) {
      p.play({ command: "highlight", movie: savedMovies[i] });
      p.play(`${savedMovies[i].title}`);
    }
  });
  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

const confirmationOverview = context(() => {
  intent("yes", async (p) => {
    p.play({ command: "highlight", movie: savedMovies[0] });
    p.play(`${savedMovies[0].title}. ${savedMovies[0].overview}`);
  });
  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

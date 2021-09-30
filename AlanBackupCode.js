// Use this sample to create your own voice commands
intent("(Thank you|Thanks|Cheers|Much appreciated| Alright)(Raymond|)", (p) => {
  p.play(`No problem, my dude.`);
});

intent("Wake up", (p) => {
  p.play({ command: "wakeUp" });
  p.play(`Ok dude, I'm up. So... you want to see a movie, that's cool.`);
});

let savedMovies = [];

// Most popular movies
intent(
  "(Show me|Give me|Check|Find|Which are) (the most|) $(popular* (.*)) (movies|movie|)",
  (p) => {
    let MOVIES_API_URL = "";

    if (p.popular.value.toLowerCase() == "popular") {
      MOVIES_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&region=US`;
    } else {
      p.play("Sorry mate, I didn't quite understand what you want.");
      return;
    }

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results } = JSON.parse(body);
      const movies = results.slice(0, 9);

      if (!movies.length) {
        p.play("I guess there are no popular movies.");
        return;
      }

      savedMovies = movies;

      p.play({ command: "popularMovies", movies });
      p.play(`Here are the most ${p.popular.value} movies.`);

      p.play("Would you like to hear the titles?");
      p.then(confirmationTitle);
    });
  }
);

// Right now in theaters
intent(
  "(Show me|Tell me|Find|) (which|) movies (are|) in $(theaters* (.*)). (now|right now| this week|this month|)",
  (p) => {
    let MOVIES_API_URL = "";

    if (
      p.theaters.toLowerCase() == "theaters" ||
      p.theaters.toLowerCase() == "theater"
    ) {
      const dateNow = new Date();
      const currentDate = dateNow.toISOString();
      const dateOld = new Date(dateNow.setDate(dateNow.getDate() - 14));
      const prevDate = dateOld.toISOString();
      MOVIES_API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${prevDate}&primary_release_date.lte=${currentDate}&sort_by=popularity.desc&api_key=${API_KEY}&region=US`;
    } else {
      p.play("Sorry mate, I didn't quite understand what you want.");
      return;
    }

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results } = JSON.parse(body);
      const movies = results.slice(0, 9);

      if (!movies.length) {
        p.play("I guess there are no movies in theater right now.");
        return;
      }

      savedMovies = movies;

      p.play({ command: "newMovies", movies });
      p.play(`Here are the movies in ${p.theaters.value} now.`);

      p.play("Would you like to hear the titles?");
      p.then(confirmationTitle);
    });
  }
);

// Search for movie
intent(
  "(Tell me|Show me| What do you know)(more|info|) about (movie|) $(search* (.*))",
  (p) => {
    let MOVIES_API_URL = `https://api.themoviedb.org/3/search/movie?query=${p.search.value}&api_key=${API_KEY}&region=US`;

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results: movies } = JSON.parse(body);

      if (!movies.length) {
        p.play("Sorry, please try searching for another movie.");
        return;
      }

      p.play(`Ok, I'm searching for the movie ${p.search.value}.`);

      MOVIES_API_URL = `https://api.themoviedb.org/3/movie/${movies[0].id}?api_key=${API_KEY}&language=en-US`;

      api.request(MOVIES_API_URL, (error, response, body) => {
        const movies = JSON.parse(body);
        savedMovies = movies;
        p.play({ command: "searchMovies", movies });
        p.play("Here you go. Would you like to hear more about this movie?");
        p.then(confirmationOverview);
      });
    });
  }
);

const confirmationTitle = context(() => {
  intent("yes", async (p) => {
    for (let i = 0; i < savedMovies.length; i++) {
      p.play({ command: "highlight", movies: savedMovies[i] });
      p.play(`${savedMovies[i].title}`);
    }
  });
  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

const confirmationOverview = context(() => {
  intent("yes", async (p) => {
    p.play({ command: "highlight", movies: savedMovies });
    p.play(
      `${savedMovies.title} it's a ${savedMovies.genres[0]?.name} produced by ${
        savedMovies.production_companies[0]?.name
      } and was first released in ${new Date(
        savedMovies.release_date
      ).getFullYear()}. Here's the story: ${savedMovies.overview}`
    );
  });
  intent("no", (p) => {
    p.play("Sure, sounds good to me. Would you like to hear my opinion?");
    p.then(confirmationReview);
  });
});

const confirmationReview = context(() => {
  intent("yes", async (p) => {
    if (savedMovies.vote_average > 7) {
      p.play(`${savedMovies.title} it's great.`);
    } else if (savedMovies.vote_average > 5 && savedMovies.vote_average <= 7) {
      p.play(`${savedMovies.title} it's okay.`);
    } else {
      p.play(`This movie is trash.`);
    }
  });
  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

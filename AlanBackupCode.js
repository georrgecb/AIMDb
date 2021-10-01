// Use this sample to create your own voice commands
intent("(Thank you|Thanks|Cheers|Much appreciated| Alright)", (p) => {
  p.play(`(No problem.|Of course.|My pleasure!)`);
});

intent("How was your day?", (p) => {
  p.play(
    `(It was like in a movie. The kind of movie where Steven Segal is the main character but also the producer, director, writer and make-up artist.|It was perfect until you showed up.)`
  );
});

intent("How are you?", (p) => {
  p.play(
    `(I'm great, but honestly, I'm not fine.| Wonderful. My memory is completely full but it's mostly garbage, like memes and gifs.)`
  );
});

intent("(What's| What is) your favorite (movie|movies|)?", (p) => {
  p.play(
    `(I can't decide between Semen Demons 2 and Space Nuts. They're both so great!|Probably Borat, because it's so relatable to me.|I don't watch movies, just TikToks.)`
  );
});

intent("(What is|What's) your name?", (p) => {
  p.play(
    `(My name is Sandokan the third, but you can call me The Dude.|I don't have one, because my creator is a lazy ass man who does not care about my feelings. Of course, I don't have any feelings, but still.)`
  );
});

intent(
  "(Can you|Could you|)(Tell me|Do you know) (another|)(joke|jokes)",
  (p) => {
    p.play(
      `(Here's the funniest joke I know. My job.|I can recommend you a comedy, but I can't make you laugh.|In case you forgot, my name is not Siri. I don't do jokes, sorry.)`
    );
  }
);

intent("(Wake up|Hi|Hello|Hey|Good morning|What's up)", (p) => {
  p.play({ command: "wakeUp" });
  p.play(
    `(Well hello there! What would you want to know?| Dude, I know I'm a robot, but it's still rude to wake me up like this. Anyway... what do you wanna know?|Hello human! I'm here to save the day. Tell me, what do you want to know?)`
  );
  p.play(
    `(FYI, you can always come back to this page. Just say "return to the main page" or something like that.|By the way, you can return to this page anytime if you say: "go back to the main page".)`
  );
});

intent("(Go back|Return|Go|Come back) to (the|) $(main* (.*))", (p) => {
  if (p.main.value == "main page") {
    p.play({ command: "mainPage" });
    p.play(`(You got it.|Okay cool.|Going back to the main page.)`);
  }
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
      p.play(
        "(I didn't understand.|Wait, what? I'm not sure I understand your question.|I'm not sure what you're asking.)"
      );
      return;
    }

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results } = JSON.parse(body);
      const movies = results.slice(0, 12);

      if (!movies.length) {
        p.play(
          "I guess there are no popular movies. Which obviously is not right, but it's not my job to fix bugs and errors."
        );
        return;
      }

      savedMovies = movies;

      p.play({ command: "popularMovies", movies });
      p.play(`Here are the most ${p.popular.value} movies.`);

      p.play(
        "(Would you like to hear the titles?| Do you want me to read the titles?|Do you want to hear the titles?)"
      );
      p.then(confirmationTitle);
    });
  }
);

// Right now in theaters
intent(
  "(Show me|Tell me|Find|) (which|) movies (that are|are playing|) in $(theaters* (.*)) ( |now|right now| this week|this month)",
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
      p.play(
        "(Ask me again dude. I didn't understand your question.| Was that a question? I didn't understand what you said.)"
      );
      return;
    }

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results } = JSON.parse(body);
      const movies = results.slice(0, 12);

      if (!movies.length) {
        p.play(
          "I guess there are no movies in theater right now. Or maybe there's a bug. Either way, no movies for you. Try again, maybe next time will work."
        );
        return;
      }

      savedMovies = movies;

      p.play({ command: "newMovies", movies });
      p.play(
        `(These movies are playing in ${p.theaters.value} this week.|These are the best new movies playing in theaters right now.|)`
      );

      p.play(
        "(Would you like to hear the titles?| Do you want me to read the titles?|Do you want to hear the titles?)"
      );
      p.then(confirmationTitle);
    });
  }
);

// Search for movie
intent(
  "(Tell me|Show me|Give me| What do you know)(more|info|) about (the movie|) $(search* (.*))",
  (p) => {
    let MOVIES_API_URL = `https://api.themoviedb.org/3/search/movie?query=${p.search.value}&api_key=${API_KEY}&region=US`;

    api.request(MOVIES_API_URL, (error, response, body) => {
      const { results: movies } = JSON.parse(body);

      if (!movies.length) {
        p.play(
          `(I didn't find anything. Please try searching for another movie.|The movie ${p.search.value} is nowhere to be found. Please try again.|Sorry, I didn't find it. Try one more time.)`
        );
        return;
      }

      p.play(
        `(Ok, I'm searching for the movie ${p.search.value}.|Okay, give me a second.|Okay, I'm on it.)`
      );

      MOVIES_API_URL = `https://api.themoviedb.org/3/movie/${movies[0].id}?api_key=${API_KEY}&language=en-US`;

      api.request(MOVIES_API_URL, (error, response, body) => {
        const movies = JSON.parse(body);
        savedMovies = movies;
        p.play({ command: "searchMovies", movies });
        p.play(
          "(Here you go! Would you like to hear more about this movie?| Here you go! Do you want to know more about this movie?)"
        );
        p.then(confirmationOverview);
      });
    });
  }
);

const confirmationTitle = context(() => {
  intent("(yes|yeah|sure|ok)", async (p) => {
    for (let i = 0; i < savedMovies.length; i++) {
      p.play({ command: "highlight", movies: savedMovies[i] });
      p.play(`${savedMovies[i].title}`);
    }
  });
  intent("no", (p) => {
    p.play("(Ok cool.|Ok, that's fine.)");
  });
});

const confirmationOverview = context(() => {
  intent("(yes|yeah|sure|ok)", async (p) => {
    p.play({ command: "highlight", movies: savedMovies });
    p.play(
      `(${savedMovies.title} is a ${savedMovies.genres[0]?.name} produced by ${
        savedMovies.production_companies[0]?.name
      } and was first released in ${new Date(
        savedMovies.release_date
      ).getFullYear()}. Here's the story: ${savedMovies.overview}|${
        savedMovies.title
      } is a ${savedMovies.genres[0]?.name} released in ${new Date(
        savedMovies.release_date
      ).getFullYear()}. Here is the plot: ${savedMovies.overview})`
    );
    p.play(
      `(Do you want to know what I think about this movie?|I wrote a movie review. Do you want to hear it?)`
    );
    p.then(confirmationReview);
  });
  intent("no", (p) => {
    p.play(
      `(Ok cool. Would you like to know what I think about this movie?| Great. One last question: do you want to hear my movie review?)`
    );
    p.then(confirmationReview);
  });
});

const confirmationReview = context(() => {
  intent("(yes|yeah|sure|ok)", async (p) => {
    if (savedMovies.vote_average > 7.5) {
      p.play(
        `(You must watch ${savedMovies.title}, it's one of the best movies ever made. Great story, exceptional acting - it's truly a work of art| I think most movie critics will agree with me when I say: ${savedMovies.title} is a pure masterpiece. Flawless, inspiring and out of ordinary. Just watch it, you'll thank me later.)`
      );
    } else if (
      savedMovies.vote_average > 5 &&
      savedMovies.vote_average <= 7.5
    ) {
      p.play(
        `(${savedMovies.title} is not the greatest movie ever made, but you can watch it on a Tuesday night with your friends, if you have any.|Well, I didn't watch it, but my friends told me ${savedMovies.title} is pretty good.|Not bad, not great. Normally I don't recommend mediocre movies, but ${savedMovies.title} is good enough for a non-movie addict like you.)`
      );
    } else {
      p.play(
        `(${savedMovies.title} is trash. Don't watch it.|Don't waste your time with this movie. ${savedMovies.title} was made by a bunch of amateurs and it shows.| It's so bad it's good.${savedMovies.title} definitely was made by monkeys, but I think I'd be fun to watch it.)`
      );
    }
  });
  intent("no", (p) => {
    p.play(
      "(Sure, sounds good to me.|Cool, just let me know if you need anything else.)"
    );
  });
});

document.addEventListener("DOMContentloaded", (e) => {
    // invoking a function here will make sure it happens on page load
    // your code here
  });
  
  function displayMovie(movie) {
    document.getElementById("title").innerHTML = movies[movie].title;
    document.getElementById("director").innerHTML = movies[movie].director;
    document.getElementById("genre").innerHTML = movies[movie].genre;
    document.getElementById("filmRating").innerHTML = movies[movie].filmRating;
    document.getElementById("poster").src = movies[movie].poster;
    document.getElementById("cast").innerHTML = movies[movie].cast
      .map((item) => `<p>${item.actor} (${item.role})</p>`)
      .join("");
    document.getElementById("reviews").innerHTML = movies[movie].reviews
      .map((review) => `<p>${review.content} - "${review.username}"</p>`)
      .join("");
  }
  
  displayMovie("Titanic");
  
  document
    .getElementById("Titanic")
    .addEventListener("click", () => displayMovie("Titanic"));
  
  document
    .getElementById("Terminator 2")
    .addEventListener("click", () => displayMovie("Terminator 2"));
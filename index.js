document.addEventListener('DOMContentloaded', (e) => {
});

function displayMovie(movie) {
    document.getElementById("title").innerHTML = movies[movie].title;
    document.getElementById("director").innerHTML = movies[movie].director;
    document.getElementById("genre").innerHTML = movies[movie].genre;
    document.getElementById("filmRating").innerHTML = movies[movie].filmRating;
    document.getElementById("cast").innerHTML = movies[movie].cast.map(item => `${item.actor}-${item.role}`);
    document.getElementById("poster").src = movies[movie].poster;
}
displayMovie("Titanic")
document.getElementById('Titanic')
.addEventListener('click', () => displayMovie ("Titanic"));
document.getElementById('Terminator 2')
.addEventListener('click', () => displayMovie ("Terminator 2"));
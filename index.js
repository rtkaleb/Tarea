async function fetchMovies() {
    try {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        const movies = await res.json();
        const container = document.getElementById('movies');

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
          <img src="${movie.image}" alt="Portada de ${movie.title}">
          <div class="info">
            <h2>${movie.title}</h2>
            <p><strong>Año:</strong> ${movie.release_date}</p>
            <p>${movie.description.slice(0, 200)}...</p>
          </div>
        `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error('Error al cargar películas:', err);
    }
}

fetchMovies();
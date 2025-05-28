let allMovies = [];

async function fetchMovies() {
    try {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        allMovies = await res.json();
        renderMovies(allMovies);
    }

    catch (err) {
        const container = document.getElementById('movies');
        container.innerHTML = `
          <p style="color:red; font-weight:bold;">⚠ No se pudieron cargar las películas. Intenta más tarde.</p>
        `;
        console.error('Error al cargar películas:', err);
      }
    }
    
    function renderMovies(movies) {
      const container = document.getElementById('movies');
      container.innerHTML = '';
    
      movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <img src="${movie.image}" alt="Portada de ${movie.title}">
          <div class="info">
            <h2>${movie.title}</h2>
            <p><strong>Año:</strong> ${movie.release_date}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Duración:</strong> ${movie.running_time} min</p>
            <p>${movie.description.slice(0, 200)}...</p>
          </div>
        `;
        container.appendChild(card);
      });
    }
    

    document.getElementById('search').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allMovies.filter(movie =>
          movie.title.toLowerCase().includes(query)
        );
        renderMovies(filtered);
      });
      
      fetchMovies();
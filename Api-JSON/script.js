document.getElementById('fetchButton').addEventListener('click', fetchDogInformation);

function fetchDogInformation() {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10&include_breeds=true', {
        headers: {
            'x-api-key': 'live_9gidymcFBZPiWcVDCXw6xKe8j8PYumP2xoebTIhZjTWwdaihm82Ks3PTRyawufzZ'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = ''; 
        data.forEach(item => {
            const dog = item.breeds[0];
            if (dog) {
                const card = document.createElement('div');
                card.className = 'dog-card';

                const img = document.createElement('img');
                img.src = item.url;
                card.appendChild(img);

                const name = document.createElement('h2');
                name.textContent = dog.name;
                card.appendChild(name);

                const lifeSpan = document.createElement('p');
                lifeSpan.textContent = `Life Span: ${dog.life_span}`;
                card.appendChild(lifeSpan);

                const temperament = document.createElement('p');
                temperament.textContent = `Temperament: ${dog.temperament}`;
                card.appendChild(temperament);

                gallery.appendChild(card);
            }
        });
    })
    .catch(error => console.error('Error fetching dog information:', error));
}
// apikey

const apikey = 'Pw443SApnmUHoLSDEhZd0fZhbKZKTeLt';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
    .then(res => res.json())
    .thsn(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}).catch(console.error)
export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Pw443SApnmUHoLSDEhZd0fZhbKZKTeLt&q=${category}&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;
        //Aquí agrego un catch para capturar errores
    } catch (error) {
        console.error('Error gifs:', error);
        return [];
    }
};

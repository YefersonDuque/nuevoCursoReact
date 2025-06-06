import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log(images, isLoading);
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className="card-gird">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )

}


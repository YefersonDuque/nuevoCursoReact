import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece']);
    console.log(categories);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return alert('Intentas agregar uno que ya esta añadido, intenta con otro.');
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category} />))}
        </>
    );
};

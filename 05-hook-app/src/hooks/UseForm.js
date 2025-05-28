import { useState } from "react";

export const UseForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onINputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onReseatForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onINputChange,
        onReseatForm

    }
}


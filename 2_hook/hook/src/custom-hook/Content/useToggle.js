import { useState } from "react";

const useToggle = (initValue) => {
    const [isShow, setIsShow] = useState(true);

    const handleToggle = () => {
        setIsShow(!isShow)
    }

    return [isShow, handleToggle]
}

export default useToggle;
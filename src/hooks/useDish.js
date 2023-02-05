import { useContext } from "react"
import DishContext from "../contexts/DishProvider"

const useDish = () => {
    return useContext(DishContext);
}

export default useDish;
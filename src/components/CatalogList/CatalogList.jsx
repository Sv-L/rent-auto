import useLocalStorageReducer from "hooks/useLocalStorageReducer";
import List from "components/List";
import { getItem } from "helpers/getItem";
import { useSelector } from "react-redux";
import { getCatalog, getMake } from "../../redux/catalog/selectors";


const CatalogList = ({make}) => {
    const [favorites, setFavorites] = useLocalStorageReducer([], 'favorites'); 
    const catalog = useSelector(getCatalog);
    const selectedMake = useSelector(getMake)
    const filteredCars = make ? selectedMake : catalog;

    const addToFavoritesOrRemove = (e) => {
        const buttonId = e.currentTarget.closest("button").id;
        const id = parseInt(buttonId)

        if (getItem(id,favorites)) {
            setFavorites({ type: 'delete', data: id })
        } else {
            setFavorites({ type: 'add', data: getItem(id, catalog) })
        }  
    }
    
    return (
        <List onClick={addToFavoritesOrRemove} favorites={favorites} arr={filteredCars}/>
    )
}
export default CatalogList
import useLocalStorageReducer from 'hooks/useLocalStorageReducer';
import List from 'components/List';

const FavoriteList = () => {
  const [favorites, setFavorites] = useLocalStorageReducer([], 'favorites');

  const remove = e => {
    const buttonId = e.currentTarget.closest('button').id;
    const id = parseInt(buttonId);
    setFavorites({ type: 'delete', data: id });
  };

  return <List onClick={remove} favorites={favorites} />;
};
export default FavoriteList;

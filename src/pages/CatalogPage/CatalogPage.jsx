import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCatalog,
  fetchSelectedMake,
} from '../../redux/catalog/operations';
import CatalogList from 'components/CatalogList';
import {
  getDisablet,
  getError,
  getIsLoading,
} from '../../redux/catalog/selectors';
import { Button, ButtonLoadMore } from './CatalogPage.styled';
import Filter from 'components/Filter';
import Error from 'components/Error';
import Loader from 'components/Loader';
import Container from 'components/Container';

const CatalogPage = () => {
  const disablet = useSelector(getDisablet);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const [page, setPage] = useState(1);
  const [make, setSelectedMake] = useState('');

  useEffect(() => {
    dispatch(fetchCatalog({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (make !== '') {
      dispatch(fetchSelectedMake({ make }));
    }
  }, [dispatch, make]);

  const handlClickLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  return (
    <Container>
      <Filter selectedOption={make} onOptionChange={handleMakeChange} />
      {error && <Error message={error} />}
      <CatalogList make={make} />
      {isLoading && <Loader />}
      {!isLoading && (
        <ButtonLoadMore onClick={handlClickLoadMore} disabled={disablet}>
          Load more
        </ButtonLoadMore>
      )}
    </Container>
  );
};
export default CatalogPage;

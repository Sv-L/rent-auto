import { ColorRing } from 'react-loader-spinner';
import { LoaderStyles } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyles>
      <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#fff', '#000', '#fff', '#000', '#fff']}
      />
    </LoaderStyles>
  );
};

export default Loader;

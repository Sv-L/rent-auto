import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { getItem } from 'helpers/getItem';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { getAdress } from 'helpers/getAdress';
import PopUp from 'components/PopUp';
import {
  ButtonFavoriteStyles,
  ButtonLearnMoreStyles,
  DescriptionWrapStyles,
  ListStyles,
  TitelWrapStyles,
} from './List.styled';

const List = ({ onClick, favorites, arr = favorites }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onShowModal = id => {
    const selectedItem = getItem(id, arr);
    setIsShowModal(selectedItem);
  };

  return (
    <>
      <ListStyles>
        {arr.map(
          ({
            id,
            year,
            make,
            model,
            type,
            img,
            functionalities,
            rentalPrice,
            rentalCompany,
            address,
          }) => {
            const addresse = getAdress(address);

            return (
              <li key={id}>
                <ButtonFavoriteStyles onClick={onClick} id={id}>
                  {getItem(id, favorites) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart style={{ fill: 'rgba(255, 255, 255, 0.8)' }} />
                  )}
                </ButtonFavoriteStyles>
                <img src={img} alt="car" />
                <TitelWrapStyles>
                  <p>
                    {make} <span>{model}</span>, {year}
                  </p>
                  <p>{rentalPrice}</p>
                </TitelWrapStyles>
                <DescriptionWrapStyles>
                  <p>{addresse.city}</p>
                  <p>{addresse.cantry}</p>
                  <p>{rentalCompany}</p>
                  <p>{type}</p>
                  <p>{model}</p>
                  <p>{id}</p>
                  <p>{functionalities[0]}</p>
                </DescriptionWrapStyles>
                <ButtonLearnMoreStyles onClick={() => onShowModal(id)}>
                  Learm more
                </ButtonLearnMoreStyles>
              </li>
            );
          }
        )}
      </ListStyles>
      {isShowModal && (
        <Modal closeModal={setIsShowModal}>
          <PopUp children={isShowModal} />
        </Modal>
      )}
    </>
  );
};
export default List;

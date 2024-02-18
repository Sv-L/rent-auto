import { DescriptionWrapStyles } from 'components/List/List.styled';
import {
  AccessoriesStyles,
  DescrStyles,
  PopUpStyles,
  PopUpTitleStyles,
  RentalStyles,
} from './PopUp.styled';

const { getAdress } = require('helpers/getAdress');

const PopUp = ({
  children: {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const addresse = getAdress(address);
  const conditions = rentalConditions.split('\n');
  const formattedMileage = mileage.toLocaleString();

  return (
    <PopUpStyles>
      <img src={img} alt="car" />
      <PopUpTitleStyles>
        {make} <span>{model}</span>, {year}
      </PopUpTitleStyles>

      <DescriptionWrapStyles>
        <p>{addresse.city}</p>
        <p>{addresse.cantry}</p>
        <p>id: {id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
      </DescriptionWrapStyles>
      <DescrStyles>{description}</DescrStyles>
      <h3>Accessories and functionalities:</h3>
      <AccessoriesStyles>
        {accessories.map(acces => (
          <li key={acces}>
            <p>{acces}</p>
          </li>
        ))}
      </AccessoriesStyles>
      <ul>
        {functionalities.map(funct => (
          <li key={funct}>
            <DescrStyles>{funct}</DescrStyles>
          </li>
        ))}
      </ul>
      <h3>Rental Conditions:</h3>

      <RentalStyles>
        {conditions.map(cond => (
          <li key={cond[0]}>
            <p>{cond}</p>
          </li>
        ))}
        <li>
          <p>
            Miliage:<span>{formattedMileage}</span>{' '}
          </p>
        </li>
        <li>
          <p>
            Price:<span>{rentalPrice}</span>{' '}
          </p>
        </li>
      </RentalStyles>
      <a href="tel:+380730000000">Rental Car</a>
    </PopUpStyles>
  );
};
export default PopUp;

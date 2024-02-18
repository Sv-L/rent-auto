import { DescriptionWrapStyles } from 'components/List/List.styled';

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
    <>
      <img src={img} alt="car" />
      <p>
        {make} <span>{model}</span>, {year}
      </p>

      <DescriptionWrapStyles>
        <p>{addresse.city}</p>
        <p>{addresse.cantry}</p>
        <p>id: {id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
      </DescriptionWrapStyles>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <ul>
        {accessories.map(acces => (
          <li key={acces}>
            <p>{acces}</p>
          </li>
        ))}
      </ul>
      <ul>
        {functionalities.map(funct => (
          <li key={funct}>
            <p>{funct}</p>
          </li>
        ))}
      </ul>
      <h3>Rental Conditions:</h3>
      <ul>
        {conditions.map(cond => (
          <li key={cond[0]}>
            <p>{cond}</p>
          </li>
        ))}
      </ul>
      <p>Miliage: {formattedMileage}</p>
      <p>Price: {rentalPrice}</p>
      <a href="tel:+380730000000">Rental Car</a>
    </>
  );
};
export default PopUp;

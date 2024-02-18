import makes from '../../makes.json';
import { FilterStyles } from './Filter.styled';

const Filter = ({ selectedOption, onOptionChange }) => {
  return (
    <FilterStyles value={selectedOption} onChange={onOptionChange}>
      <option value="">Select a brand</option>
      {makes.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </FilterStyles>
  );
};
export default Filter;

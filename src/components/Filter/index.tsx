import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import MyCheckbox from './MyCheckbox';
import { filterCatalog } from '../../store/reducers/thunks';

import './styles.scss';

const Filter: React.FC = () => {
  //const [checkboxes, setCheckboxes] = useState<Object>({});
  const { filters } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e: any) => {
    const { name } = e.target;
    let dstCheckbox = {};
    const value = !Object.getOwnPropertyDescriptor(filters, name)?.value;

    Object.assign(dstCheckbox, filters);
    Object.defineProperty(dstCheckbox, name, { value: value });

    dispatch(filterCatalog(dstCheckbox));
  };

  //console.log(filters);
  //console.log(Object.keys(filters));

  const createCheckbox = (option: string) => {
    const isValue = Object.getOwnPropertyDescriptor(filters, option)?.value;

    return (
      <MyCheckbox
        label={option}
        isSelected={isValue}
        onCheckboxChange={handleCheckboxChange}
        key={option}
        value={isValue}
      />
    );
  };

  return (
    <div className="filter">
      <div className="filter__input">
        {Object.keys(filters).map(createCheckbox)}
      </div>
    </div>
  );
};

export default Filter;

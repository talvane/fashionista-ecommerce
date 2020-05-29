import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import MyCheckbox from './MyCheckbox';
import { filterCatalog } from '../../store/reducers/thunks';

import './styles.scss';

let OPTIONS = [''];

const Filter: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<Object>({});
  const { filters } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    OPTIONS = filters;

    return setCheckboxes(
      OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        {}
      )
    );
  }, [filters]);

  useEffect(() => {
    dispatch(filterCatalog(checkboxes));
  }, [dispatch, checkboxes]);

  const handleCheckboxChange = (e: any) => {
    const { name } = e.target;
    let dstCheckbox = {};
    const value = !Object.getOwnPropertyDescriptor(checkboxes, name)?.value;

    Object.assign(dstCheckbox, checkboxes);
    Object.defineProperty(dstCheckbox, name, { value: value });

    setCheckboxes(dstCheckbox);
  };

  const createCheckbox = (option: string) => {
    const isValue = Object.getOwnPropertyDescriptor(checkboxes, option)?.value;

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
      <div className="filter__input">{OPTIONS.map(createCheckbox)}</div>
    </div>
  );
};

export default Filter;

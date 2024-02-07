import React from 'react';
import { Input, Label } from './Filter.styled';
import { setFilter } from '../../redux//filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(selectContactsFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        value={filter}
        placeholder="Enter contact name"
        onChange={changeFilter}
      />
    </Label>
  );
};

export default Filter;

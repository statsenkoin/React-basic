import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  //   const filter = useSelector(state => state.filters.status);
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={handleFilterChange}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={handleFilterChange}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={handleFilterChange}
      >
        Completed
      </Button>
    </div>
  );
};

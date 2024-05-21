import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Pagination.css';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Pagination = ({ hasNextPage, hasPrevPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const handleNextPage = () => {
    setSearchParams({ page: page + 1 });
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  };

  return (
    <div className="pagination-buttons">
      <button className='ctrl' onClick={handlePreviousPage} disabled={!hasPrevPage}><WestIcon/></button>
      <span>{page}</span>
      <button className='ctrl' onClick={handleNextPage} disabled={!hasNextPage}><EastIcon/></button>
    </div>
  );
};

export default Pagination;


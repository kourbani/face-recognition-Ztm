import React from 'react';

const Rank = ({name , entries}) => {
  return (
    <div>
      <div className='black f3'>
        {`${name}, your current entries are...`}
      </div>
      <div className='black f1'>
        {entries}
      </div>
    </div>
  );
};

export default Rank;
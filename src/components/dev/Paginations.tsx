import React from 'react';
import Pagination from '~components/atom/Pagination';

const Paginations: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Paginations</h2>
      <section
        style={{
          marginTop: '10px',
          padding: '10px'
        }}
      >
        <Pagination currPage={1} totalPage={100} />
      </section>
    </div>
  );
};

export default Paginations;

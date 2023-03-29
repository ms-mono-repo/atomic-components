import React from 'react';
import Loading from '~components/atom/Loading';

const LoadingContent: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Loading</h2>
      <Loading />
    </div>
  );
};

export default LoadingContent;

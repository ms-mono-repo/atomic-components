import React, { useState } from 'react';

import FeatherIcon from '~components/atom/Feather';
import Svg from '~components/atom/Svg';

const Logo: React.FC = () => {
  return (
    <header className="header">
      <article className="header__inner">
        {/* wemix play logo */}
        <h1 className="header-logo">
          <Svg iconName="wemixplay-console" style={{ width: '230px', height: '26px' }} />
        </h1>
      </article>
    </header>
  );
};
export default Logo;

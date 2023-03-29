import React, { useState } from 'react';
import { setCookie } from 'react-use-cookie';

const Cookie: React.FC = () => {
  const [cookieClose, setCookieClose] = useState<boolean>(true);
  const onClickClose = () => setCookieClose((curr) => !curr);
  return (
    <aside className={`cookie ${cookieClose ? 'close' : ''}`}>
      <article className="cookie__inner">
        <h1 className="cookie__title">Your Cookie Preferences</h1>
        <p className="cookie__desc">
          Welcome to WEMIX!
          <br />
          We use cookies to allow you to visit our website and use its functions. Some cookies are
          strictly necessary for the operation of our website and cannot be deactivated. Other
          cookies help us to improve your experience with our website by providing us with
          statistics or enabling us to remember your preferences. <br />
          You can allow the use of all cookies or just essential cookies by clicking one of the
          below. You can change your preference at any time in the Cookie Settings and learn more
          about cookies and how we use them by clicking here:{' '}
          <a href="#" target="_blank" className="cookie__link">
            Cookie Policy.
          </a>
        </p>
        <button className="btn-cookie" onClick={onClickClose}>
          Allow all cookies
        </button>
      </article>
    </aside>
  );
};

export default Cookie;

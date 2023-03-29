import React, { useState } from 'react';

const Dropdowns: React.FC = () => {
  const [sideLangMenuVisible, setSideLangMenuVisible] = useState(false);
  const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Dropdowns</h2>
      <section
        style={{
          marginTop: '10px',
          padding: '10px'
        }}
      >
        <p
          style={{
            marginBottom: '5px',
            padding: '10px',
            border: '1px solid #eaecf0',
            color: '#344054'
          }}
        >
          <strong
            style={{
              fontSize: '15px',
              color: '#344054',
              display: 'block',
              marginBottom: '5px',
              fontWeight: 500
            }}
          >
            .dropdown-menu(필수 클래스명)
          </strong>
          {/* <span
            style={{
              fontSize: '13px',
              color: '#fe4e93',
              display: 'block',
              marginBottom: '5px',
              paddingTop: '5px'
            }}
          >
            <strong
              style={{
                fontSize: '14px',
                color: '#344054',
                fontWeight: 500,
                paddingRight: '5px'
              }}
            ></strong>
          </span> */}
        </p>
        {/* 기본 드롭다운  */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          기본 드롭다운 메뉴
        </h3>
        <article
          style={{
            width: '300px',
            marginTop: '24px'
          }}
        >
          <div className={`dropdown-menu ${dropdownMenuVisible ? 'expand' : ''} `}>
            <button
              className="btn-dropdown"
              onClick={() => {
                if (!dropdownMenuVisible) {
                  setDropdownMenuVisible(dropdownMenuVisible);
                }
                setDropdownMenuVisible(!dropdownMenuVisible);
              }}
            >
              Select team member
            </button>
            <ul className="dropdown-list">
              <li className="dropdown-list__item">
                <button className="dropdown-list__item__link">English</button>
              </li>
              <li className="dropdown-list__item">
                <button className="dropdown-list__item__link">한국어</button>
              </li>
            </ul>
          </div>
        </article>
        {/* 언어 드롭다운  */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          언어 드롭다운 메뉴
        </h3>
        <article
          style={{
            width: '100px',
            marginTop: '12px'
          }}
        >
          {/* Footer Language */}
          <div className={`dropdown-menu ${sideLangMenuVisible ? 'expand' : ''} `}>
            <button
              className="btn-dropdown btn-lang"
              onClick={() => {
                if (!sideLangMenuVisible) {
                  setSideLangMenuVisible(sideLangMenuVisible);
                }
                setSideLangMenuVisible(!sideLangMenuVisible);
              }}
            >
              한국어
            </button>
            <ul className="dropdown-list">
              <li className="dropdown-list__item">
                <button className="dropdown-list__item__link">English</button>
              </li>
              <li className="dropdown-list__item">
                <button className="dropdown-list__item__link">한국어</button>
              </li>
            </ul>
          </div>
        </article>
        <article>
          {/* <SearchDropdownBox
            list={[]}
            defaultItem={''}
            indicator={''}
            onClickItem={function (item: Record<string, any>): void {
              throw new Error('Function not implemented.');
            }}
          /> */}
        </article>
      </section>
    </div>
  );
};

export default Dropdowns;

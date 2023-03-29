import React from 'react';

const Tabs: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Tabs</h2>
      <section
        style={{
          marginTop: '10px',
          padding: '10px'
        }}
      >
        <p
          style={{
            marginBottom: '30px',
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
            .tab(필수 클래스명)
          </strong>
          <span
            style={{
              fontSize: '13px',
              color: '#fe4e93',
              display: 'block',
              marginBottom: '5px'
            }}
          >
            <strong
              style={{
                fontSize: '14px',
                color: '#344054',
                fontWeight: 500,
                paddingRight: '5px'
              }}
            >
              active
            </strong>
            .tab__item.active
          </span>
        </p>
        <article>
          <ul className="tab">
            <li className="tab__item active">
              <a href="#" className="tab__item__link">
                tab1
              </a>
            </li>
            <li className="tab__item">
              <a href="#" className="tab__item__link">
                tab2
              </a>
            </li>
            <li className="tab__item">
              <a href="#" className="tab__item__link">
                tab3
              </a>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Tabs;

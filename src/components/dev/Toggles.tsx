import React from 'react';

const Toggles: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Toggles</h2>

      <section
        style={{
          marginTop: '10px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          flexDirection: 'column'
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
            switch(필수 클래스명)
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
              사이즈
            </strong>
            switch-sm (width:36px,height:20px), switch-md (width:44px,height:24px)
          </span>
        </p>
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Size (sm)
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <label className="switch switch-sm">
            <input type="checkbox" className="switch-input" />
          </label>
          <label className="switch switch-sm">
            <input type="checkbox" className="switch-input" disabled />
          </label>
          <label className="switch switch-sm">
            <input type="checkbox" className="switch-input" disabled checked />
          </label>
          <div className="label-box">
            <label className="switch switch-sm">
              <input type="checkbox" className="switch-input" />
              <span className="switch__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="switch switch-sm">
              <input type="checkbox" className="switch-input" disabled />
              <span className="switch__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
        </article>
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Size (md)
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <label className="switch switch-md">
            <input type="checkbox" className="switch-input" />
          </label>
          <label className="switch switch-md">
            <input type="checkbox" className="switch-input" disabled />
          </label>
          <label className="switch switch-md">
            <input type="checkbox" className="switch-input" disabled checked />
          </label>
          <div className="label-box">
            <label className="switch switch-md">
              <input type="checkbox" className="switch-input" />
              <span className="switch__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="switch switch-md">
              <input type="checkbox" className="switch-input" disabled />
              <span className="switch__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Toggles;

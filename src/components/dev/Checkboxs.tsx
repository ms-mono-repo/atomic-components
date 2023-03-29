import React from 'react';

const Checkboxs: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Checkboxs</h2>
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
            .checkbox(필수 클래스명)
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
            .checkbox-sm (width,height:16px), .checkbox-md (width,height:20px)
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
            display: 'inline-flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <label className="checkbox checkbox-sm">
            <input type="checkbox" />
          </label>
          <label className="checkbox checkbox-sm">
            <input type="checkbox" disabled />
          </label>
          <label className="checkbox checkbox-sm">
            <input type="checkbox" disabled checked />
          </label>
          <label className="checkbox checkbox-sm">
            <input type="checkbox" />
          </label>
          <label className="checkbox checkbox-sm">
            <input type="checkbox" />
            <span className="checkbox__label">Remember me</span>
          </label>
          <label className="checkbox checkbox-sm">
            <input type="checkbox" disabled />
            <span className="checkbox__label">Remember me</span>
          </label>
          <label className="checkbox checkbox-sm">
            <input type="checkbox" disabled checked />
            <span className="checkbox__label">Remember me</span>
          </label>
          <div className="label-box">
            <label className="checkbox checkbox-sm">
              <input type="checkbox" />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="checkbox checkbox-sm">
              <input type="checkbox" disabled />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="checkbox checkbox-sm">
              <input type="checkbox" disabled checked />
              <span className="checkbox__label">Remember me</span>
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
          <label className="checkbox checkbox-md">
            <input type="checkbox" />
          </label>
          <label className="checkbox checkbox-md">
            <input type="checkbox" disabled />
          </label>
          <label className="checkbox checkbox-md">
            <input type="checkbox" disabled checked />
          </label>
          <label className="checkbox checkbox-md">
            <input type="checkbox" />
            <span className="checkbox__label">Remember</span>
          </label>
          <label className="checkbox checkbox-md">
            <input type="checkbox" disabled />
            <span className="checkbox__label">Remember</span>
          </label>
          <label className="checkbox checkbox-md">
            <input type="checkbox" disabled checked />
            <span className="checkbox__label">Remember</span>
          </label>
          <div className="label-box">
            <label className="checkbox checkbox-md">
              <input type="checkbox" />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="checkbox checkbox-md">
              <input type="checkbox" disabled />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="checkbox checkbox-md">
              <input type="checkbox" disabled checked />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Checkboxs;

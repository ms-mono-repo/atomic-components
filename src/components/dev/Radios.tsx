import React from 'react';

const Radios: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Radios</h2>
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
            .radio(필수 클래스명)
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
            .radio-sm (width,height:16px), .radio-md (width,height:20px)
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
          <label className="radio radio-sm">
            <input type="radio" name="radiosm" />
          </label>
          <label className="radio radio-sm">
            <input type="radio" name="radiosm" />
          </label>
          <label className="radio radio-sm">
            <input type="radio" name="radiosm2" disabled />
          </label>
          <label className="radio radio-sm">
            <input type="radio" name="radiosm2" disabled checked />
            <span className="radio__label">Remember me</span>
          </label>
          <label className="radio radio-sm">
            <input type="radio" disabled />
            <span className="radio__label">Remember me</span>
          </label>
          <label className="radio radio-sm">
            <input type="radio" disabled checked />
            <span className="radio__label">Remember me</span>
          </label>
          <div className="label-box">
            <label className="radio radio-sm">
              <input type="radio" />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="radio radio-sm">
              <input type="radio" disabled />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="radio radio-sm">
              <input type="radio" disabled checked />
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
            display: 'inline-flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <label className="radio radio-md">
            <input type="radio" name="radioMd" />
          </label>
          <label className="radio radio-md">
            <input type="radio" name="radioMd" />
          </label>
          <label className="radio radio-md">
            <input type="radio" disabled />
          </label>
          <label className="radio radio-md">
            <input type="radio" disabled checked />
          </label>
          <label className="radio radio-md">
            <input type="radio" />
            <span className="radio__label">Remember me</span>
          </label>
          <label className="radio radio-md">
            <input type="radio" disabled />
            <span className="radio__label">Remember me</span>
          </label>
          <label className="radio radio-md">
            <input type="radio" disabled checked />
            <span className="radio__label">Remember me</span>
          </label>
          <div className="label-box">
            <label className="radio radio-md">
              <input type="radio" />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="radio radio-md">
              <input type="radio" disabled />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
          <div className="label-box">
            <label className="radio radio-md">
              <input type="radio" disabled checked />
              <span className="checkbox__label">Remember me</span>
            </label>
            <p className="label-box__desc">Save my login details for next time.</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Radios;

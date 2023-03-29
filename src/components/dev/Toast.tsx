import React, { useState } from 'react';
import Svg from '~components/atom/Svg';
const Toast: React.FC = () => {
  const [toastFullFailVisible, setToastFullFailVisible] = useState(false);
  const [toastFullSuccessVisible, setToastFullSuccessVisible] = useState(false);
  const [toastFailVisible, setToastFailVisible] = useState(false);
  const [toastSuccessVisible, setToastSuccessVisible] = useState(false);
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Toast</h2>
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
            .toast(필수 클래스명)
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
            .toast-full (width :100%)
            <br />
            .toast-success (성공)
            <br />
            .toast-fail (실패)
          </span>
        </p>
        <article style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 10 }}>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              if (!toastFullSuccessVisible) {
                setToastFullSuccessVisible(toastFullSuccessVisible);
              }
              setToastFullSuccessVisible(!toastFullSuccessVisible);
            }}
          >
            Toast Full Success
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              if (!toastFullFailVisible) {
                setToastFullFailVisible(toastFullFailVisible);
              }
              setToastFullFailVisible(!toastFullFailVisible);
            }}
          >
            Toast Full Fail
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              if (!toastSuccessVisible) {
                setToastSuccessVisible(toastSuccessVisible);
              }
              setToastSuccessVisible(!toastSuccessVisible);
            }}
          >
            Toast Success
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              if (!toastFailVisible) {
                setToastFailVisible(toastFailVisible);
              }
              setToastFailVisible(!toastFailVisible);
            }}
          >
            Toast Fail
          </button>
        </article>

        <aside className="toast-wrap">
          <div className="toast-wrap__inner">
            <article
              className={`toast toast-full toast-success ${
                toastFullSuccessVisible ? 'expand' : 'hide'
              } `}
            >
              <span className="toast__icon">
                <Svg iconName="success" style={{ width: '20px', height: '20px' }} />
              </span>
              <div className="toast__box">
                <strong className="toast__box__title">Enter your message here</strong>
                <p className="toast__box__desc">Email 혹은 Password가 일치하지 않습니다.</p>
              </div>
              <button
                className="btn btn-link-gray btn-x"
                onClick={() => {
                  if (!toastFullSuccessVisible) {
                    setToastFullSuccessVisible(toastFullSuccessVisible);
                  }
                  setToastFullSuccessVisible(!toastFullSuccessVisible);
                }}
              >
                <Svg iconName="toast-x" style={{ width: '24px', height: '24px' }} />
              </button>
            </article>
            <article
              className={`toast toast-full toast-fail ${toastFullFailVisible ? 'expand' : 'hide'} `}
            >
              <span className="toast__icon">
                <Svg iconName="fail" style={{ width: '20px', height: '20px' }} />
              </span>
              <div className="toast__box">
                <strong className="toast__box__title">Enter your message here</strong>
              </div>
              <button
                className="btn btn-link-gray btn-x"
                onClick={() => {
                  if (!toastFullFailVisible) {
                    setToastFullFailVisible(toastFullFailVisible);
                  }
                  setToastFullFailVisible(!toastFullFailVisible);
                }}
              >
                <Svg iconName="toast-x" style={{ width: '24px', height: '24px' }} />
              </button>
            </article>
            <article
              className={`toast toast toast-success ${toastSuccessVisible ? 'expand' : 'hide'} `}
            >
              <span className="toast__icon">
                <Svg iconName="success" style={{ width: '20px', height: '20px' }} />
              </span>
              <div className="toast__box">
                <strong className="toast__box__title">Enter your message here</strong>
                <p className="toast__box__desc">Email 혹은 Password가 일치하지 않습니다.</p>
              </div>
              <button
                className="btn btn-link-gray btn-x"
                onClick={() => {
                  if (!toastSuccessVisible) {
                    setToastSuccessVisible(toastSuccessVisible);
                  }
                  setToastSuccessVisible(!toastSuccessVisible);
                }}
              >
                <Svg iconName="toast-x" style={{ width: '24px', height: '24px' }} />
              </button>
            </article>
            <article className={`toast toast-fail ${toastFailVisible ? 'expand' : 'hide'} `}>
              <span className="toast__icon">
                <Svg iconName="fail" style={{ width: '20px', height: '20px' }} />
              </span>
              <div className="toast__box">
                <strong className="toast__box__title">Enter your message here</strong>
              </div>
              <button
                className="btn btn-link-gray btn-x"
                onClick={() => {
                  if (!toastFailVisible) {
                    setToastFailVisible(toastFailVisible);
                  }
                  setToastFailVisible(!toastFailVisible);
                }}
              >
                <Svg iconName="toast-x" style={{ width: '24px', height: '24px' }} />
              </button>
            </article>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Toast;

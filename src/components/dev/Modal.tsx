import React, { useState } from 'react';
import Modal from '~components/atom/Modal';
import FeatherIcon from '~components/atom/Feather';

const DevModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Modal</h2>
      <section
        style={{
          marginTop: '10px',
          padding: '10px'
        }}
      >
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Modal
        </button>

        <button
          className="btn btn-sm btn-line"
          onClick={() => {
            setAlertVisible(!alertVisible);
          }}
        >
          Modal
        </button>
      </section>

      {visible && (
        <Modal
          classNames={[`${visible ? 'expand' : ''}`]}
          onClose={() => {
            setVisible(!visible);
          }}
        >
          <>
            <header className="modal-header">
              <h1 className="modal-header__title">기본 언어 변경</h1>
              <p className="modal-header__desc">프로젝트를 검색하여 사용자에 권한을 추가합니다.</p>
            </header>
            <section className="modal-content"></section>
            <footer className="modal-footer">
              <button
                className="btn btn-line btn-md"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                취소하기
              </button>
              <button className="btn btn-primary btn-md">추가하기</button>
            </footer>
          </>
        </Modal>
      )}

      {alertVisible && (
        <Modal
          classNames={[`wemix-modal--alert ${alertVisible ? 'expand' : ''}`]}
          onClose={() => {
            setAlertVisible(!alertVisible);
          }}
        >
          <>
            <header className="modal-header">
              <h1 className="modal-header__title">실패</h1>
              <p className="modal-header__desc">로그인을 다시 시도해주세요</p>
            </header>
            <section className="modal-content"></section>
            <footer className="modal-footer">
              <button className="btn btn-primary btn-md">확인</button>
              <button
                className="btn btn-line btn-md"
                onClick={() => {
                  setAlertVisible(!alertVisible);
                }}
              >
                취소
              </button>
            </footer>
            <button
              className="close-btn btn btn-xl btn-link-gray"
              onClick={() => {
                setAlertVisible(!alertVisible);
              }}
            >
              <FeatherIcon iconName="x" />
            </button>
          </>
        </Modal>
      )}
    </div>
  );
};

export default DevModal;

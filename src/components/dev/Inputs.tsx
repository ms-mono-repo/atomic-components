import React, { useState } from 'react';
import Image from 'next/image';
import Svg from '~components/atom/Svg';
import FileUploaderImage from '~components/atom/FileUploaderImage';
import FileUploader from '~components/atom/FileUploader';

const Inputs: React.FC = () => {
  const [dropdownDateVisible, setDropdownDateVisible] = useState(false);
  const [dropCountryVisible, setDropCountryVisible] = useState(false);
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Inputs</h2>
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
            .form-item(필수 클래스명)
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
              Rows (horizontal)
            </strong>
            .form-item.form-row
          </span>
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
              Cols (vertical)
            </strong>
            .form-item.form-col
          </span>
        </p>
        {/* Form Input Rows */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Form Rows
        </h3>
        <article style={{ marginTop: '40px' }}>
          <fieldset>
            <legend className="blind">form 영역</legend>
            {/* PC IP Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label" htmlFor="pcIp">
                PC IP *
              </label>
              {/* input */}
              <div className="input-box">
                <input type="text" id="pcIp" className="input-text" />
                <p className="input-hint">
                  <span className="input-hint__text">This is a hint text to help user.</span>
                  <span className="input-hint__count">12/80</span>
                </p>
              </div>
            </div>
            {/* Mobile IP Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label" htmlFor="moIp">
                Mobile IP
              </label>
              {/* input */}
              <div className="input-box">
                <input type="text" id="moIp" className="input-text" />
                <p className="input-hint">
                  <span className="input-hint__text">This is a hint text to help user.</span>
                  <span className="input-hint__count">12/80</span>
                </p>
              </div>
            </div>
            {/* 코멘트 Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label" htmlFor="comment">
                코멘트
              </label>
              {/* input */}
              <div className="input-box">
                <textarea id="comment" className="textarea" rows={8}></textarea>
                <p className="input-hint">
                  <span className="input-hint__text">This is a hint text to help user.</span>
                  <span className="input-hint__count">12/80</span>
                </p>
              </div>
            </div>
            {/* 이벤트 1회당 진행 기간 Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label" htmlFor="event">
                이벤트 1회당 진행 기간 *
              </label>
              {/* input */}
              <div className="input-box">
                <div className="input-box__col2">
                  <input type="text" id="event" className="input-text" />

                  <div className={`dropdown-menu ${dropdownDateVisible ? 'expand' : ''} `}>
                    <button
                      className="btn-dropdown"
                      onClick={() => {
                        if (!dropdownDateVisible) {
                          setDropdownDateVisible(dropdownDateVisible);
                        }
                        setDropdownDateVisible(!dropdownDateVisible);
                      }}
                    >
                      일
                    </button>
                    <ul className="dropdown-list">
                      <li className="dropdown-list__item is-select">
                        <button className="dropdown-list__item__link">일</button>
                      </li>
                      <li className="dropdown-list__item">
                        <button className="dropdown-list__item__link">분</button>
                      </li>
                      <li className="dropdown-list__item">
                        <button className="dropdown-list__item__link">주</button>
                      </li>
                      <li className="dropdown-list__item">
                        <button className="dropdown-list__item__link">월</button>
                      </li>
                      <li className="dropdown-list__item">
                        <button className="dropdown-list__item__link">년</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="input-hint">
                  <span className="input-hint__text">
                    해당기간이 지난 후 이벤트를 생성해야 이벤트가 발생됩니다. ex. 1회당 이벤트 진행
                    기간이 1주일 일때, 6월 3일에 이벤트 생성을 시도해도 새로운 이벤트는 생성되지
                    않으며, 시작 시간 기준 1주일 후인 6월 8일 00:00:00 이후에 새로운 이벤트가
                    생성됩니다.
                  </span>
                </p>
              </div>
            </div>
            {/* Contract Address Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label" htmlFor="officialsite">
                Contract Address *
              </label>
              {/* input */}
              <div className="input-box input-copy">
                <input
                  type="text"
                  id="contractAddress"
                  className="input-text"
                  disabled
                  defaultValue="ddd"
                />
                <button className="btn btn-link-gray btn-sm">
                  <Svg iconName="copy" />
                </button>
              </div>
            </div>
            {/* Official Site Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label" htmlFor="officialsite">
                Official Site *
              </label>
              {/* input */}
              <div className="input-box">
                <input type="text" id="officialsite" className="input-text" />
              </div>
            </div>
            {/* 서비스 타입 Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label">서비스 타입 *</label>
              {/* input */}
              <div className="input-box">
                <div className="input-col">
                  <label className="radio radio-sm">
                    <input type="radio" name="s-type" />
                    <span className="radio__label">온보딩</span>
                  </label>
                  <label className="radio radio-sm">
                    <input type="radio" name="s-type" />
                    <span className="radio__label">퍼블리싱</span>
                  </label>
                </div>
                <p className="input-hint">
                  <span className="input-hint__text">
                    해당기간이 지난 후 이벤트를 생성해야 이벤트가 발생됩니다. ex. 1회당 이벤트 진행
                    기간이 1주일 일때, 6월 3일에 이벤트 생성을 시도해도 새로운 이벤트는 생성되지
                    않으며, 시작 시간 기준 1주일 후인 6월 8일 00:00:00 이후에 새로운 이벤트가
                    생성됩니다.
                  </span>
                </p>
              </div>
            </div>
            {/* 장르 Item */}
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label">장르 *</label>
              {/* input */}
              <div className="input-box">
                <div className="input-row">
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">RPG</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Auction</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Strategy</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Casual</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Puzzle</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">AOS/MOBA</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Sports</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">TCG</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Defense</span>
                  </label>
                  <label className="checkbox checkbox-sm">
                    <input type="checkbox" />
                    <span className="checkbox__label">Shooting</span>
                  </label>
                </div>
                <p className="input-hint">
                  <span className="input-hint__text">
                    해당기간이 지난 후 이벤트를 생성해야 이벤트가 발생됩니다. ex. 1회당 이벤트 진행
                    기간이 1주일 일때, 6월 3일에 이벤트 생성을 시도해도 새로운 이벤트는 생성되지
                    않으며, 시작 시간 기준 1주일 후인 6월 8일 00:00:00 이후에 새로운 이벤트가
                    생성됩니다.
                  </span>
                </p>
              </div>
            </div>
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label">토큰 아이콘 *</label>
              {/* input */}
              <div className="input-box">
                <FileUploaderImage onChangeFiles={(file) => console.log(file)} />
              </div>
            </div>
            <div className="form-item form-row">
              {/* label */}
              <label className="form-label">첨부 파일 *</label>
              {/* input */}
              <div className="input-box">
                {/* 첨부 파일 */}
                <FileUploader onChangeFiles={(file) => console.log(file)} />
                {/* <div className="attachment">
                  <input
                    className="input-text"
                    ref={uploadName}
                    value="첨부파일"
                    placeholder="첨부파일"
                    disabled
                  />
                  <label onChange={onChangUpload}>
                    파일 찾기
                    <input type="file" ref={fileInput} />
                  </label>
                </div>
                <button className="btn btn-md btn-line" onClick={onClickRemove}>
                  삭제
                </button> */}
              </div>
            </div>
          </fieldset>
        </article>
        {/* Form Input col */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Form Cols
        </h3>
        <article style={{ marginTop: '40px' }}>
          <fieldset>
            <legend className="blind">form 영역</legend>
            {/*  회사명 Item */}
            <div className="form-item form-col">
              {/* label */}
              <label className="form-label" htmlFor="company">
                회사명
              </label>
              {/* input */}
              <div className="input-box">
                <input
                  type="text"
                  id="company"
                  className="input-text"
                  defaultValue="Wemade Co., Ltd."
                />
              </div>
            </div>
            {/*  웹사이트 Item */}
            <div className="form-item form-col">
              {/* label */}
              <label className="form-label" htmlFor="website">
                웹사이트
              </label>
              {/* input */}
              <div className="input-box">
                <input
                  type="text"
                  id="website"
                  className="input-text"
                  defaultValue="Wemade Co., Ltd."
                />
              </div>
            </div>
            {/*  성 이름 Item */}
            <div className="form-item form-col-2">
              <div className="form-col">
                {/* label */}
                <label className="form-label" htmlFor="firstName">
                  성
                </label>
                {/* input */}
                <div className="input-box">
                  <input type="text" id="firstName" className="input-text" />
                </div>
              </div>
              <div className="form-col">
                {/* label */}
                <label className="form-label" htmlFor="lastName">
                  이름
                </label>
                {/* input */}
                <div className="input-box">
                  <input type="text" id="lastName" className="input-text" />
                </div>
              </div>
            </div>
            {/*  주소 Item */}
            <div className="form-item form-col">
              {/* label */}
              <label className="form-label" htmlFor="address">
                주소
              </label>
              {/* input */}
              <div className="input-box error">
                <input type="text" id="address" className="input-text" />
              </div>
            </div>
            {/*  국가 선택 Item */}
            <div className="form-item form-col">
              {/* label */}
              <label className="form-label" htmlFor="country">
                국가
              </label>
              {/* input */}
              <div className="input-box">
                <div className={`dropdown-menu ${dropCountryVisible ? 'expand' : ''} `}>
                  <button
                    className="btn-dropdown"
                    onClick={() => {
                      if (!dropCountryVisible) {
                        setDropCountryVisible(dropCountryVisible);
                      }
                      setDropCountryVisible(!dropCountryVisible);
                    }}
                  >
                    <span className="btn-dropdown__country">
                      <Image
                        src="/static/assets/png/unitedStates.png"
                        alt="United States"
                        width={20}
                        height={20}
                      />
                      United States
                    </span>
                  </button>
                  <ul className="dropdown-list">
                    <li className="dropdown-list__item">
                      <button className="dropdown-list__item__link">
                        <Image
                          src="/static/assets/png/unitedStates.png"
                          alt="United States"
                          width={20}
                          height={20}
                        />
                        United States
                      </button>
                    </li>
                    <li className="dropdown-list__item">
                      <button className="dropdown-list__item__link">
                        <Image
                          src="/static/assets/png/unitedStates.png"
                          alt="United States"
                          width={20}
                          height={20}
                        />
                        United States
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </article>
        {/* Login */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Login
        </h3>
        <form className="login">
          <fieldset className="login-box">
            {/* 로그인 타이틀 */}
            <legend className="login-box__title">Login</legend>
            {/* 이메일 입력 */}
            <div className="login-box__input">
              <label className="login-box__input__label" htmlFor="email">
                Email
              </label>
              <input type="email" className="input-text" id="email" autoComplete="off" />
            </div>
            {/* 비밀번호 입력 */}
            <div className="login-box__input">
              <label className="login-box__input__label" htmlFor="pw">
                Password
              </label>
              <input type="password" className="input-text" id="pw" autoComplete="off" />
            </div>
            {/* 이메일 저장 및 비밀번호 찾기 */}
            <div className="login-box__input">
              <label className="checkbox checkbox-sm">
                <input type="checkbox" />
                <span className="checkbox__label">이메일 저장</span>
              </label>
              <button className="btn btn-link-primary">비밀번호 찾기</button>
            </div>
            {/* Sign in 버튼 */}
            <div className="login-box__btn-area">
              <button className="btn btn-primary btn-full btn-xl">Sign in</button>
            </div>
            {/* join 버튼 */}
            <div className="login-box__join-area">
              <p className="login-box__join-area__desc">계정이 없으신가요?</p>
              <button className="btn btn-link-primary btn-sm">가입하기</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Inputs;

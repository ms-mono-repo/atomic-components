import React from 'react';
import Svg from '~components/atom/Svg';
import FeatherIcon from '~components/atom/Feather';

const Tables: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Tables</h2>
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
            .table(필수 클래스명)
          </strong>
          <span
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
            >
              테두리가 있는 테이블
            </strong>
            .table-border
          </span>
          <span
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
            >
              테두리가 없는 테이블
            </strong>
            .table-borderless
          </span>
          <span
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
            >
              간격이 좁은 테이블
            </strong>
            .table-sm
          </span>
          <span
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
            >
              스트라이프 테이블
            </strong>
            .table-striped
          </span>
          <span
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
            >
              마우스 오버 테이블
            </strong>
            .table-hover
          </span>
          <span
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
            >
              캡션이 있는 테이블
            </strong>
            .caption-top(caption top 위치), .caption-bottom(caption bottom 위치)
          </span>
          <span
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
            >
              tr 에 클래스 추가하면 전체 색이 변경 됩니다.
            </strong>
            tr.table-primary (기본색) tr.table-gray (회색) tr.table-blue (블루) tr.table-error
            (error)
          </span>
          <span
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
            >
              스크롤 테이블
            </strong>
            .table-scroll (thead 고정 theade.cell-fix-top, td 고정 td..cell-fix th..cell-fix)
          </span>
        </p>
        {/* 기본 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          기본 테이블
        </h3>
        <article>
          <table className="table">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* 테두리가 있는 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          테두리가 있는 테이블
        </h3>
        <article>
          <table className="table table-bordered">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <thead>
              <tr className="table-gray">
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* 테두리가 없는 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          테두리가 없는 테이블
        </h3>
        <article>
          <table className="table table-borderless">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* 간격이 좁은 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          간격이 좁은 테이블
        </h3>
        <article>
          <table className="table table-sm">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* 스트라이프 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          스트라이프 테이블
        </h3>
        <article>
          <table className="table table-striped">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* 마우스오버 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          마우스오버 테이블
        </h3>
        <article>
          <table className="table table-hover">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* 캡션 위에 있는 테이블 */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          캡션 위에 있는 테이블
        </h3>
        <article>
          <table className="table table-hover caption-top">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
            </colgroup>
            <caption>table 제목</caption>
            <thead>
              <tr>
                <th scope="col">
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    프로젝트
                  </div>
                </th>
                <th scope="col">상태</th>
                <th scope="col">유저 동접 수</th>
                <th scope="col">최근 업데이트 날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb1.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__image">
                        <img src="/static/assets/thumb/thumb2.jpg" />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">MIR4</h4>
                        <p className="cell-info__box__desc">@MIR4</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-error badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    점검중
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="switch switch-sm">
                      <input type="checkbox" className="switch-input" />
                    </label>
                    <div className="cell-info">
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        <p className="cell-info__box__desc">@olivia</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-gray badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    비활성
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-row">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                    <div className="cell-info">
                      <span className="cell-info__icon">
                        <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                      </span>
                      <div className="cell-info__box">
                        <h4 className="cell-info__box__title">Olivia Rhye</h4>
                        {/*  <p className="cell-info__box__desc">@olivia</p> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success badge-sm badge-icon-left">
                    <Svg
                      iconName="dot"
                      style={{ width: '6px', height: '6px' }}
                      className="badge-dot"
                    />
                    라이브
                  </span>
                </td>
                <td>310,896</td>
                <td>2022년 12월 25일</td>
                <td>
                  <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* Table Scroll */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Table Scroll
        </h3>
        <article>
          <div className="table-scroll">
            <table className="table table-hover">
              <colgroup>
                <col className="col1" />
                <col className="col2" />
                <col className="col3" />
                <col className="col4" />
                <col className="col5" />
              </colgroup>
              <thead className="cell-fix-top">
                <tr>
                  <th scope="col" className="cell-fix">
                    <div className="cell-row">
                      <label className="checkbox">
                        <input type="checkbox" />
                      </label>
                      프로젝트
                    </div>
                  </th>
                  <th scope="col">상태</th>
                  <th scope="col">유저 동접 수</th>
                  <th scope="col">최근 업데이트 날짜</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cell-fix">
                    <div className="cell-row">
                      <label className="checkbox">
                        <input type="checkbox" />
                      </label>
                      <div className="cell-info">
                        <span className="cell-info__image">
                          <img src="/static/assets/thumb/thumb1.jpg" />
                        </span>
                        <div className="cell-info__box">
                          <h4 className="cell-info__box__title">Olivia Rhye</h4>
                          {/*  <p className="cell-info__box__desc">@olivia</p> */}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-gray badge-sm badge-icon-left">
                      <Svg
                        iconName="dot"
                        style={{ width: '6px', height: '6px' }}
                        className="badge-dot"
                      />
                      비활성
                    </span>
                  </td>
                  <td>310,896</td>
                  <td>2022년 12월 25일</td>
                  <td>
                    <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                  </td>
                </tr>
                <tr>
                  <td className="cell-fix">
                    <div className="cell-row">
                      <label className="checkbox">
                        <input type="checkbox" />
                      </label>
                      <div className="cell-info">
                        <span className="cell-info__image">
                          <img src="/static/assets/thumb/thumb2.jpg" />
                        </span>
                        <div className="cell-info__box">
                          <h4 className="cell-info__box__title">MIR4</h4>
                          <p className="cell-info__box__desc">@MIR4</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-success badge-sm badge-icon-left">
                      <Svg
                        iconName="dot"
                        style={{ width: '6px', height: '6px' }}
                        className="badge-dot"
                      />
                      라이브
                    </span>
                  </td>
                  <td>310,896</td>
                  <td>2022년 12월 25일</td>
                  <td>
                    <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                  </td>
                </tr>
                <tr>
                  <td className="cell-fix">
                    <div className="cell-row">
                      <label className="checkbox">
                        <input type="checkbox" />
                      </label>
                      <div className="cell-info">
                        <div className="cell-info__box">
                          <h4 className="cell-info__box__title">Olivia Rhye</h4>
                          <p className="cell-info__box__desc">@olivia</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-error badge-sm badge-icon-left">
                      <Svg
                        iconName="dot"
                        style={{ width: '6px', height: '6px' }}
                        className="badge-dot"
                      />
                      점검중
                    </span>
                  </td>
                  <td>310,896</td>
                  <td>2022년 12월 25일</td>
                  <td>
                    <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                  </td>
                </tr>
                <tr>
                  <td className="cell-fix">
                    <div className="cell-row">
                      <label className="switch switch-sm">
                        <input type="checkbox" className="switch-input" />
                      </label>
                      <div className="cell-info">
                        <div className="cell-info__box">
                          <h4 className="cell-info__box__title">Olivia Rhye</h4>
                          <p className="cell-info__box__desc">@olivia</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-gray badge-sm badge-icon-left">
                      <Svg
                        iconName="dot"
                        style={{ width: '6px', height: '6px' }}
                        className="badge-dot"
                      />
                      비활성
                    </span>
                  </td>
                  <td>310,896</td>
                  <td>2022년 12월 25일</td>
                  <td>
                    <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                  </td>
                </tr>
                <tr>
                  <td className="cell-fix">
                    <div className="cell-row">
                      <label className="checkbox">
                        <input type="checkbox" />
                      </label>
                      <div className="cell-info">
                        <span className="cell-info__icon">
                          <Svg iconName="user" style={{ width: '20px', height: '20px' }} />
                        </span>
                        <div className="cell-info__box">
                          <h4 className="cell-info__box__title">Olivia Rhye</h4>
                          {/*  <p className="cell-info__box__desc">@olivia</p> */}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-success badge-sm badge-icon-left">
                      <Svg
                        iconName="dot"
                        style={{ width: '6px', height: '6px' }}
                        className="badge-dot"
                      />
                      라이브
                    </span>
                  </td>
                  <td>310,896</td>
                  <td>2022년 12월 25일</td>
                  <td>
                    <Svg iconName="link-arrow" style={{ width: '16px', height: '16px' }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Tables;

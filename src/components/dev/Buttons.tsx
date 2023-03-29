import React from 'react';

const Buttons: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Button</h2>
      <section
        style={{
          marginTop: '10px',
          padding: '10px',
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
            .btn(필수 클래스명)
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
              컬러
            </strong>
            .btn-primary, .btn-secondary, .btn-error, .btn-line, .btn-link-primary, .btn-link-gray
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
              사이즈
            </strong>
            .btn-sm (height:36px), .btn-md (height:40px), .btn-lg(height:44px), .btn-xl
            (height:48px), .btn-2xl (height:60px)
          </span>
        </p>
        {/* Primary */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          primary
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-sm btn-primary">button</button>
          <button className="btn btn-md btn-primary">button</button>
          <button className="btn btn-lg btn-primary">button</button>
          <button className="btn btn-xl btn-primary">button</button>
          <button className="btn btn-2xl btn-primary" disabled>
            button
          </button>
          <button className="btn btn-full btn-primary">button</button>
        </article>
        {/* secondary */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Secondary
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-sm btn-secondary">buttony</button>
          <button className="btn btn-md btn-secondary">button</button>
          <button className="btn btn-lg btn-secondary">button</button>
          <button className="btn btn-xl btn-secondary">button</button>
          <button className="btn btn-full btn-secondary">button</button>
        </article>

        {/* black */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Black
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-sm btn-black">buttony</button>
          <button className="btn btn-md btn-black">button</button>
          <button className="btn btn-lg btn-black">button</button>
          <button className="btn btn-xl btn-black">button</button>
          <button className="btn btn-full btn-black">button</button>
        </article>

        {/* error */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Error
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-sm btn-error">button</button>
          <button className="btn btn-md btn-error">button</button>
          <button className="btn btn-lg btn-error">button</button>
          <button className="btn btn-xl btn-error">button</button>
          <button className="btn btn-full btn-error">button</button>
        </article>
        {/* line */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Line
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-sm btn-line">button</button>
          <button className="btn btn-md btn-line">button</button>
          <button className="btn btn-lg btn-line">button</button>
          <button className="btn btn-xl btn-line">button</button>
          <button className="btn btn-full btn-line">button</button>
        </article>
        {/* link Primary */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Link Primary
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-sm btn-link-primary">button</button>
          <button className="btn btn-md btn-link-primary">button</button>
          <button className="btn btn-lg btn-link-primary">button</button>
          <button className="btn btn-xl btn-link-primary">button</button>
          <button className="btn btn-full btn-link-primary">button</button>
        </article>
        {/* Link Gray */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Link Gray
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          {/* default */}
          <button className="btn btn-sm btn-link-gray">button</button>
          <button className="btn btn-md btn-link-gray">button</button>
          <button className="btn btn-lg btn-link-gray">button</button>
          <button className="btn btn-xl btn-link-gray">button</button>
          <button className="btn btn-full btn-link-gray">button</button>
        </article>
        {/* Link loding icon */}
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
            btn(필수 클래스명)
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
              컬러
            </strong>
            btn-primary, btn-secondary, btn-error, btn-line, btn-link-primary,btn-link-gray
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
              사이즈
            </strong>
            btn-sm (height:36px), btn-md (height:40px), btn-lg(height:44px),btn-xl
            (height:48px),btn-2xl (height:60px)
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
              아이콘 위치
            </strong>
            btn-icon-left (왼쪽), btn-icon-right (오른쪽)
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
          Link loding icon
        </h3>
        {/* link loding icon */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          loding
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-lg btn-primary btn-icon-right" disabled>
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-primary btn-icon-right">
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-secondary btn-icon-left">
            {/* svg */}
            button
          </button>
          <button className="btn btn-lg btn-line btn-icon-right">
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-link-primary btn-icon-right">
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-link-gray btn-icon-left">
            {/* svg */}
            button
          </button>
          <button className="btn btn-sm btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-md btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-xl btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-2xl btn-primary">
            {/* svg */}
          </button>
        </article>
        {/* Dot icon */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Dot
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button className="btn btn-lg btn-primary btn-icon-right" disabled>
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-primary btn-icon-right">
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-secondary btn-icon-left">
            {/* svg */}
            button
          </button>
          <button className="btn btn-lg btn-line btn-icon-right">
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-link-primary btn-icon-right">
            button
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-link-gray btn-icon-left">
            {/* svg */}
            button
          </button>
          <button className="btn btn-sm btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-md btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-lg btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-xl btn-primary">
            {/* svg */}
          </button>
          <button className="btn btn-2xl btn-primary">
            {/* svg */}
          </button>
        </article>
      </section>
    </div>
  );
};

export default Buttons;

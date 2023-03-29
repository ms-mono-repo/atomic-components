import React from 'react';

const Badges: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Badge</h2>
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
            .badge(필수 클래스명)
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
            .badge-primary, .badge-gray, .badge-error, .badge-warning, .badge-success,
            .badge-blue-gray
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
            .badge-sm (height:22px), .badge-md (height:24px), .badge-lg(height:28px)
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
              아이콘
            </strong>
            .badge-icon-left, .badge-icon-right, .badge-icon-only
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
          Primary
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-primary badge-sm">badge</span>
          <span className="badge badge-primary badge-md">badge </span>
          <span className="badge badge-primary badge-lg">badge </span>
          <span className="badge badge-primary badge-lg badge-icon-left">
            {/* g iconName="dot" style={{ width: '6px', height: '6px' }} className="badge-dot" /> */}
            badge
          </span>
          <span className="badge badge-primary badge-lg badge-icon-right">
            badge
            {/* g iconName="badge-x" style={{ width: '12px', height: '12px' }} className="badge-x" /> */}
          </span>
          <span className="badge badge-primary badge-lg badge-icon-right">
            badge
            {/* g
              iconName="badge-arrow"
              style={{ width: '12px', height: '12px' }}
              className="badge-arrow"
            /> */}
          </span>
          <span className="badge badge-primary badge-lg badge-icon-only">
            {/* g
              iconName="badge-add"
              style={{ width: '12px', height: '12px' }}
              className="badge-add"
            /> */}
          </span>
        </article>
        {/* Gray */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Gray
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-gray badge-sm">badge</span>
          <span className="badge badge-gray badge-md">badge</span>
          <span className="badge badge-gray badge-lg">badge</span>
          <span className="badge badge-gray badge-lg badge-icon-left">
            {/* g iconName="dot" style={{ width: '6px', height: '6px' }} className="badge-dot" /> */}
            badge
          </span>
          <span className="badge badge-gray badge-lg badge-icon-right">
            badge
            {/* g iconName="badge-x" style={{ width: '12px', height: '12px' }} className="badge-x" /> */}
          </span>
          <span className="badge badge-gray badge-lg badge-icon-right">
            badge
            {/* g
              iconName="badge-arrow"
              style={{ width: '12px', height: '12px' }}
              className="badge-arrow"
            /> */}
          </span>
          <span className="badge badge-gray badge-lg badge-icon-only">
            {/* g
              iconName="badge-add"
              style={{ width: '12px', height: '12px' }}
              className="badge-add"
            /> */}
          </span>
        </article>
        {/* Error */}
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
          <span className="badge badge-error badge-sm">badge</span>
          <span className="badge badge-error badge-md">badge</span>
          <span className="badge badge-error badge-lg">badge</span>
          <span className="badge badge-error badge-lg badge-icon-left">
            badge
          </span>
          <span className="badge badge-error badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-error badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-error badge-lg badge-icon-only">
          </span>
        </article>
        {/* Warning */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Warning
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-warning badge-sm">badge</span>
          <span className="badge badge-warning badge-md">badge</span>
          <span className="badge badge-warning badge-lg">badge</span>
          <span className="badge badge-warning badge-lg badge-icon-left">
            badge
          </span>
          <span className="badge badge-warning badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-warning badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-warning badge-lg badge-icon-only">
          </span>
        </article>
        {/* Success */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Success
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-success badge-sm">badge</span>
          <span className="badge badge-success badge-md">badge</span>
          <span className="badge badge-success badge-lg">badge</span>
          <span className="badge badge-success badge-lg badge-icon-left">
            badge
          </span>
          <span className="badge badge-success badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-success badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-success badge-lg badge-icon-only">
          </span>
        </article>
        {/* Blue Gray */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Blue Gray
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-blue-gray badge-sm">badge</span>
          <span className="badge badge-blue-gray badge-md">badge</span>
          <span className="badge badge-blue-gray badge-lg">badge</span>
          <span className="badge badge-blue-gray badge-lg badge-icon-left">
          </span>
          <span className="badge badge-blue-gray badge-lg badge-icon-right">
          </span>
          <span className="badge badge-blue-gray badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-blue-gray badge-lg badge-icon-only">
          </span>
        </article>

        {/* Light Purple */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Light Purple
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-light-purple badge-sm">badge</span>
          <span className="badge badge-light-purple badge-md">badge</span>
          <span className="badge badge-light-purple badge-lg">badge</span>
          <span className="badge badge-light-purple badge-lg badge-icon-left">
          </span>
          <span className="badge badge-light-purple badge-lg badge-icon-right">
          </span>
          <span className="badge badge-light-purple badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-light-purple badge-lg badge-icon-only">
          badge
          </span>
        </article>

        {/* Light Blue */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Light Blue
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-light-blue badge-sm">badge</span>
          <span className="badge badge-light-blue badge-md">badge</span>
          <span className="badge badge-light-blue badge-lg">badge</span>
          <span className="badge badge-light-blue badge-lg badge-icon-left">
            badge
          </span>
          <span className="badge badge-light-blue badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-light-blue badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-light-blue badge-lg badge-icon-only">
          badge
          </span>
        </article>

        {/* Light Yellow */}
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            marginTop: '10px',
            marginBottom: '5px',
            color: '#101828'
          }}
        >
          Light Yellow
        </h3>
        <article
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <span className="badge badge-light-yellow badge-sm">badge</span>
          <span className="badge badge-light-yellow badge-md">badge</span>
          <span className="badge badge-light-yellow badge-lg">badge</span>
          <span className="badge badge-light-yellow badge-lg badge-icon-left">
          </span>
          <span className="badge badge-light-yellow badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-light-yellow badge-lg badge-icon-right">
            badge
          </span>
          <span className="badge badge-light-yellow badge-lg badge-icon-only">
          badge
          </span>
        </article>
      </section>
    </div>
  );
};

export default Badges;

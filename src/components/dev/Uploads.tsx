import React from 'react';

import FileUploaderImage from '~components/atom/FileUploaderImage';
import FileUploader from '~components/atom/FileUploader';

const Uploads: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h2 className="page-title">Uploads</h2>
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
            FileUploaderImage(다중 이미지 업로드 컴포넌트)
            <br />
            <br />
            FileUploader(단일 파일 업로드 컴포넌트)
          </strong>
        </p>

        <div className="form-item form-row">
          <FileUploaderImage onChangeFiles={(file) => console.log(file)} />
        </div>
        <div className="form-item form-row">
          {/* 첨부 파일 */}
          <FileUploader onChangeFiles={(file) => console.log(file)} />
        </div>
      </section>
    </div>
  );
};

export default Uploads;

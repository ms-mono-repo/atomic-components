import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';

const DatePickers: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h1 style={{ fontSize: '30px' }}>DatePickers</h1>
      <section
        style={{
          marginTop: '10px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        <Calendar />
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </section>
    </div>
  );
};

export default DatePickers;

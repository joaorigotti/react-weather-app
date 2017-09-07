import React from 'react';
import DateHelper from '../helpers/DateHelper';

const HeaderTableComponent = () => {
  return (
    <thead className="caption-table">
      <tr>
        <th className="title"></th>
        {
          DateHelper.getNextFiveDaysFrom(new Date()).map((date, i) => {
            return (<th className="title" key={i}>{DateHelper.dateToDateCaption(date)}</th>);
          })
        }
      </tr>
    </thead>
  );
}

export default HeaderTableComponent;

import React from 'react';
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';

function Languages({val, set, title, placeholder}) {
  const changed = (value) => {
    console.log(value);
    set(value)
}

  return (
    <div>
      <label className='heading'>{title}</label>
      <SelectSearch
        options={languages}
        search
        multiple
        placeholder={placeholder}
        className='select-search select-search--multiple'
        name='learnlangs'
        value={val}
        onChange={changed}
        key={languages.value}
      />
    </div>
  );
}

export default Languages;

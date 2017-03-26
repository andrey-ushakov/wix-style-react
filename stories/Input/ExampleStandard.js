import React from 'react';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '15px 200px',
  width: '200px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div className="ltr" style={style}><br/><Input help title="title" helpMessage="HELP ME" placeholder="place holder" theme="amaterial"/></div>
    <br/>
    <div className="ltr" style={style}><Input error errorMessage="Error message" title="title" placeholder="place holder" theme="amaterial"/></div>
    <div className="ltr" style={style}>Hover<Input help helpMessage="help me"/></div>
    <div className="ltr" style={style}>With placeholder<Input error errorMessage="Error message" placeholder="Search..."/></div>
    <div className="ltr" style={style}>Disabled<br/><Input theme="material"/></div>
    <div className="ltr" style={style}>Disabled with search<br/><Input magnifyingGlass disabled placeholder="disabled with search"/></div>
  </div>;

import React from 'react';
import 'antd/dist/reset.css'; // ou 'antd/dist/antd.css' se for AntD 4
import ContactSection from './components/ContactSection';

const App = () => (
  <div style={{ fontFamily: 'sans-serif' , overflow: 'hidden'}}>
    <ContactSection />
  </div>
);

export default App;

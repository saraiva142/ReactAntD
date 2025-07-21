import { Row, Col } from 'antd';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import CardImg from './CardImg';

const ContactSection = () => (
  <div style={{ background: '#f9fbfc', padding: '4rem', borderRadius: '1rem' }}>
    <Row gutter={48} justify="center">
      <Col xs={24} md={12} style={{justify: 'center', alignItems: 'center'}}>
        <ContactHeader />
        <ContactInfo />
        <CardImg />
      </Col>
      <Col xs={24} md={12} style={{paddingTop: '2rem'}}>
        <ContactForm />
      </Col>
    </Row>
  </div>
);

export default ContactSection;

import { Form, Input, Select, Button } from 'antd';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        width: 400,
      }}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Arnold Schwarzenegger" />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input placeholder="email@example.com" />
      </Form.Item>

      <Form.Item name="industry" label="Industry" rules={[{ required: true }]}>
        <Select placeholder="Select...">
          <Select.Option value="automotive">Automotive</Select.Option>
          <Select.Option value="estremeSports">Extreme Sports</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="message" label="Message">
        <TextArea rows={4} placeholder="Type your message..." />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">
          Get a Solution
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;

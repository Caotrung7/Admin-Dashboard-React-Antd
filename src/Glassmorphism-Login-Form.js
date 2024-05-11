import {
  FacebookFilled,
  GoogleCircleFilled,
  GoogleOutlined,
  GoogleSquareFilled,
  LoginOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import './App.css';
import { Button, Divider, Form, Input, Typography, message } from 'antd';

function App() {
  const login = () => {
    message.success('Login Successful!');
  };

  return (
    <div className="appBg">
      <Form className="loginForm" onFinish={login}>
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item
          label="Email"
          name={'myemail'}
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={'myPassword'}
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: 'black' }}>Or login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined className="ggIcon" onClick={login} />
          <FacebookFilled className="fbIcon" onClick={login} />
          <TwitterOutlined className="ttIcon" onClick={login} />
        </div>
      </Form>
    </div>
  );
}

export default App;

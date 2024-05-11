import { BellFilled, BellOutlined, MailOutlined } from '@ant-design/icons';
import { Badge, Drawer, Image, List, Space, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { getComments, getOrders } from '~/API';

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={60}
        src="https://down-bs-vn.img.susercontent.com/3c75415ba24d01441377d710554859ca_tn.webp"
      ></Image>
      <Typography.Title>AT+ DASHBOARD</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 28 }}
            onClick={() => {
              setCommentOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellOutlined
            style={{ fontSize: 28 }}
            onClick={() => {
              setNotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comment"
        open={commentOpen}
        onClose={() => {
          setCommentOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}

export default AppHeader;

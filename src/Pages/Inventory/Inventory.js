import { Avatar, Rate, Space, Table, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { getInventory } from '~/API';

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Image',
            dataIndex: 'thumbnail',
            render: (link) => {
              return <Avatar size={50} shape="square" src={link} />;
            },
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            render: (value) => {
              return <Rate value={value} allowHalf disabled />;
            },
          },
          {
            title: 'Brand',
            dataIndex: 'brand',
          },
          {
            title: 'Stock',
            dataIndex: 'stock',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            render: (value) => <span>${value}</span>,
          },
          {
            title: 'Discount',
            dataIndex: 'discountPercentage',
            render: (value) => <span style={{ color: 'red' }}>{value}%</span>,
          },
        ]}
        dataSource={dataSource}
        loading={loading}
        pagination={{ pageSize: 7 }}
      ></Table>
    </Space>
  );
}
export default Inventory;

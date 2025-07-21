import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
const cardStyle = {
  width: 520,
};
const imgStyle = {
  display: 'block',
  width: '40%',
  borderRadius: '4%',
};
const CardImg = () => (
  <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}}>
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://i.pinimg.com/736x/68/4d/b5/684db51ddfd96d32ae6db3dc406ca34c.jpg"
        style={imgStyle}
      />
      <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
        <Typography.Title level={4}>
          “Radical sports photography is a high-impact visual field and adrenaline-fueled creative industry.”
        </Typography.Title>
        <Button  href="https://ant.design" target="_blank">
          Get Started
        </Button>
      </Flex>
    </Flex>
  </Card>
);
export default CardImg;
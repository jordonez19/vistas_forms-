import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer style={{ borderRadius: 10, background: '#fff', padding: 25, height: 'auto', textAlign: 'center', marginTop: 10, boxShadow: ' 0 0 25px rgba(0, 0, 0, 0.346)' }} theme="light"  >
            <Row justify="center">
                <Col span={24}>
                    <p>© 2024 Your Company Name. All rights reserved.</p>
                    <p>Contact Us: contact@example.com</p>
                    <p>Address: 123 Main Street, City, Country</p>
                </Col>
            </Row>
        </Footer>
    );
};

export default CustomFooter;

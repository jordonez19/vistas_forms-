import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer style={{ borderRadius:10, background: '#fff', padding:25, height: 'auto', textAlign: 'center' }} theme="light"  >
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

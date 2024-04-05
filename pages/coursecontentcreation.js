import React from 'react';
import { Form, Input, Button, Upload, message, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import MainContent from '../components/layout/MainContent';
import FormContentComponent from '@/components/FormContentComponent';

const CourseContentCreation = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    // Aquí puedes realizar cualquier acción necesaria con los valores del formulario, como enviarlos a tu backend.
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // URL para simular carga de archivos
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <MainContent>
      <div className='flex-form '>
        <h2 className="text-center">Course Content Creation</h2>
        <Form
          form={form}
          name="course_content_creation_form"
          onFinish={onFinish}
          labelAlign="left"
          style={{ width: "100%" }}
          layout='vertical'
          className='text-center'
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input the title!' }]}
            style={{ width: "100%" }}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input the description!' }]}
            style={{ width: "100%" }}
          >
            <Input.TextArea style={{ width: "100%" }} />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label className='my-2'>Reading Material</label>
              <Form.Item
                name="reading_material"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                style={{ width: "100%" }}
              >
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col span={12}>
              <label className='my-2'>Video</label>
              <Form.Item
                name="video"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                style={{ width: "100%" }}
              >
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label className='my-2'>Assignment</label>
              <Form.Item
                name="assignment"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                style={{ width: "100%" }}
              >
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col span={12}>
              <label className='my-2'>Other Resources</label>
              <Form.Item
                name="other_resources"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                style={{ width: "100%" }}
              >
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button className='custom_btn' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainContent>
  );
};

export default CourseContentCreation;

import React from 'react';
import { Form, Input, Button, Upload, message, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import MainContent from '../components/layout/MainContent';
import { useAlert } from './useAlert';
import FormContentComponent from '../components/FormContentComponent';

const TechnicalSupportForm = () => {
  const [form] = Form.useForm();
  const { handleSuccessAlert } = useAlert();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    handleSuccessAlert('Submitted TechnicalSupportForm');
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
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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
      <FormContentComponent title={"Technical Support"}>
        <Form
          form={form}
          name="technical_support_form"
          onFinish={onFinish}
          labelAlign="left"
          style={{ width: "100%" }}
          layout='vertical'
        >
          <Form.Item
            label="Contact Email "
            name="contact_info"
            rules={[{ required: true, message: 'Please provide your contact email!' }]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name the problem"
            name="name_problem"
            rules={[{ required: true, message: 'Please provide the name problem!' }]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Describe the problem"
            name="problem_description"
            rules={[{ required: true, message: 'Please describe the problem!' }]}
            style={{ width: "100%" }}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Attach screenshots (if necessary)"
            name="screenshots"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            style={{ width: "100%" }}
          >
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button className='custom_btn' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormContentComponent>
    </MainContent>
  );
};

export default TechnicalSupportForm;

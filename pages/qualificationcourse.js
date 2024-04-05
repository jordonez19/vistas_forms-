import React from 'react';
import { Form, Select, Button } from 'antd';
import MainContent from '../components/layout/MainContent';

const { Option } = Select;

const QualificationCourse = () => {

  const onFinish = (values) => {
    console.log('Form values:', values);
  };


  return (

    <MainContent>
      <div className='card p-5 w-75 mt-5 m-auto'>
        <h2 className="text-center">Qualification Course</h2>
        <Form
          name="course_qualification_form"
          onFinish={onFinish}
          layout="vertical"
        >

          <Form.Item
            name={`question1`}
            label="¿Cómo calificarías la claridad de los objetivos del curso?"
            rules={[{ required: true, message: 'Please select a rating!' }]}
          >
            <Select placeholder="Select rating">
              <Option value="1"> Poor</Option>
              <Option value="2"> Fair</Option>
              <Option value="3"> Good</Option>
              <Option value="4"> Very Good</Option>
              <Option value="5"> Excellent</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={`question2`}
            label="¿Qué opinas sobre la organización y estructura del contenido del curso?"
            rules={[{ required: true, message: 'Please select a rating!' }]}
          >
            <Select placeholder="Select rating">
              <Option value="1"> Poor</Option>
              <Option value="2"> Fair</Option>
              <Option value="3"> Good</Option>
              <Option value="4"> Very Good</Option>
              <Option value="5"> Excellent</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={`question3`}
            label="¿La duración del curso fue adecuada para cubrir el material de manera efectiva?"
            rules={[{ required: true, message: 'Please select a rating!' }]}
          >
            <Select placeholder="Select rating">
              <Option value="1"> Poor</Option>
              <Option value="2"> Fair</Option>
              <Option value="3"> Good</Option>
              <Option value="4"> Very Good</Option>
              <Option value="5"> Excellent</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={`question4`}
            label="¿La calidad de los materiales didácticos (libros, presentaciones, etc.) fue satisfactoria?"
            rules={[{ required: true, message: 'Please select a rating!' }]}
          >
            <Select placeholder="Select rating">
              <Option value="1"> Poor</Option>
              <Option value="2"> Fair</Option>
              <Option value="3"> Good</Option>
              <Option value="4"> Very Good</Option>
              <Option value="5"> Excellent</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={`question5`}
            label="¿Cómo evaluarías la relevancia del contenido del curso para tus necesidades o intereses?"
            rules={[{ required: true, message: 'Please select a rating!' }]}
          >
            <Select placeholder="Select rating">
              <Option value="1"> Poor</Option>
              <Option value="2"> Fair</Option>
              <Option value="3"> Good</Option>
              <Option value="4"> Very Good</Option>
              <Option value="5"> Excellent</Option>
            </Select>
          </Form.Item>
          <div className='text-center'>
            <button className='custom_btn mx-auto ' htmlType="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </MainContent>
  );
};

export default QualificationCourse;

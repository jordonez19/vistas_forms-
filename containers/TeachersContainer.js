// TeachersContainer.js
import FormContentComponent from '@/components/FormContentComponent';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TeachersContainer = () => {
    const handleSubmit = () => {
        alert('submitted teachers');
    };
    const handleChange = (value) => {
        console.log(`Selected ${value}`);
    };

    return (
        <>
            <FormContentComponent
                title={'New Teacher'}
                onSubmit={handleSubmit}
            >
                <input
                    className="input_form"
                    name="name"
                    placeholder='name'
                    type='text'
                />

                <input
                    className="input_form"
                    name="email"
                    placeholder='email'
                    type='text'
                />

                <input
                    className="input_form"
                    name="born_date"
                    placeholder='born_date'
                    type='text'
                />

                <select className="input_form" name="gender">
                    <option value="">Select a gender</option>
                    <option value="man">Man</option>
                    <option value="female">Female</option>
                </select>

                <input
                    className="input_form"
                    name="phone"
                    placeholder='phone'
                    type='text'
                />

                <input
                    className="input_form"
                    name="address"
                    placeholder='address'
                    type='text'
                />

                <input
                    className="input_form"
                    name="city"
                    placeholder='city'
                    type='text'
                />

                <input
                    className="input_form"
                    name="country"
                    placeholder='country'
                    type='text'
                />

                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '90%', padding: 10 }}
                    placeholder="Select subjects"
                    defaultValue={[]}
                    className="input_form"
                    onChange={handleChange}
                >
                    <Option value="mathematics">Mathematics</Option>
                    <Option value="science">Science</Option>
                    <Option value="history">History</Option>
                    <Option value="literature">Literature</Option>
                    <Option value="language">Language Arts</Option>
                    <Option value="art">Art</Option>
                    <Option value="music">Music</Option>
                    <Option value="physical_education">Physical Education</Option>
                </Select>

            </FormContentComponent>
        </>
    );
};

export default TeachersContainer;

import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const AvatarComponent = ({ submit }) => {
    return (
        <div className='text-center'>
            <Avatar size={84} icon={<UserOutlined />} />
            <button className='btn' onClick={submit}>Upload</button>
        </div>
    )
}

export default AvatarComponent

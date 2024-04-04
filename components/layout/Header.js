import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header } = Layout;

const CustomHeader = () => {
    const router = useRouter();

    // Get the pathname of the current route
    const currentPath = router.pathname;

    return (
        <Header style={{ borderRadius: 10, background: '#fff', padding: '5px 5px 0 ', height: 'auto' }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" selectedKeys={[currentPath]}>
                <Menu.Item key="/">
                    <Link href="/" passHref>
                        home
                    </Link>
                </Menu.Item>
                <Menu.Item key="/students">
                    <Link href="/students" passHref>
                        students
                    </Link>
                </Menu.Item>
                <Menu.Item key="/teachers">
                    <Link href="/teachers" passHref>
                        teachers
                    </Link>
                </Menu.Item>
                <Menu.Item key="/signup">
                    <Link href="/signup" passHref>
                        signup
                    </Link>
                </Menu.Item>
                <Menu.Item key="/signin">
                    <Link href="/signin" passHref>
                        signin
                    </Link>
                </Menu.Item>
                <Menu.Item key="/course">
                    <Link href="/course" passHref>
                        course
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default CustomHeader;

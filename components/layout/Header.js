import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const CustomHeader = () => {
    const router = useRouter();

    // Get the pathname of the current route
    const currentPath = router.pathname;

    return (
        <Header style={{
            borderRadius: 10, background: '#fff', padding: '5px 5px 0 ', height: 'auto', boxShadow: ' 0 0 25px rgba(0, 0, 0, 0.346)'
        }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" style={{ textTransform: 'uppercase', fontWeight: 600 }} selectedKeys={[currentPath]}>
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
                <Menu.Item key="/profile">
                    <Link href="/profile" passHref>
                        profile
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default CustomHeader;

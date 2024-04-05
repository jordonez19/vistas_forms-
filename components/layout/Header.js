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
        <Header className="slideInDown"
            style={{
                borderRadius: 10,
                background: '#fff',
                padding: '5px 5px 0 ',
                height: 'auto',
                boxShadow: ' 0 0 3px rgba(0, 0, 0, 0.346)'
            }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" style={{ textTransform: 'uppercase', fontWeight: 600 }} selectedKeys={[currentPath]}>
                <Menu.Item key="/">
                    <Link href="/" passHref>
                        <span>home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/students">
                    <Link href="/students" passHref>
                        <span>students</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/teachers">
                    <Link href="/teachers" passHref>
                        <span>teachers</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/signup">
                    <Link href="/signup" passHref>
                        <span>signup</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/signin">
                    <Link href="/signin" passHref>
                        <span>signin</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/course">
                    <Link href="/course" passHref>
                        <span>course</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/profile">
                    <Link href="/profile" passHref>
                        <span>profile</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/qualificationcourse">
                    <Link href="/qualificationcourse" passHref>
                        <span>qualificationcourse</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/coursecontentcreation">
                    <Link href="/coursecontentcreation" passHref>
                        <span>coursecontentcreation</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/technicalsupport">
                    <Link href="/technicalsupport" passHref>
                        <span>technicalsupport</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default CustomHeader;

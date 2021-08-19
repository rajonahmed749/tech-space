import React from 'react';
import { Carousel, Button, notification ,Divider} from 'antd';
import {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
} from '@ant-design/icons';

const Header = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    // const openNotification = () => {
    //     notification.open({
    //         message: 'Notification Title',
    //         description:
    //             'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //         onClick: () => {
    //             console.log('Notification Clicked!');
    //         },
    //     });
    // };
    const openNotification = placement => {
        notification.info({
            message: `Notification ${placement}`,
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement,
        });
    };
    return (
        <div>
            <Divider dashed />
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>

                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>

                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>

                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <Button type="primary" onClick={openNotification}>
                Open the notification box
            </Button>
            <Button type="primary" onClick={() => openNotification('topLeft')}>
                <RadiusUpleftOutlined />
                topLeft
            </Button>
            <Button type="primary" onClick={() => openNotification('topRight')}>
                <RadiusUprightOutlined />
                topRight
            </Button>
        </div>
    );
};

export default Header;
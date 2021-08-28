import { Col, Row } from 'antd';
import React from 'react';
import { Card } from 'antd';
import modern from "../../assets/images/modern-design.jpg";
import clean from "../../assets/images/clean-design.jpg";
import support from "../../assets/images/great-support.jpg";
import customize from "../../assets/images/easy-customise.jpg";
import features from "../../assets/images/unlimited-features.jpg";
import advance from "../../assets/images/advanced-option.jpg";


const Feature = () => {
    const { Meta } = Card;
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card hoverable cover={<img alt="modern" src={modern} />}>
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={<img alt="clean" src={clean} />}>
                            <Meta title="Clean and Elegant" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={<img alt="example" src={support} />}>
                            <Meta title="Great support" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={<img alt="example" src={customize} />}>
                            <Meta title="Easy to customize" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={<img alt="example" src={features} />}>
                            <Meta title="Unlimited features" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={<img alt="example" src={advance} />}>
                            <Meta title="Advance topics" />
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Feature;
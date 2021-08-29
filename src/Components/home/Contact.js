import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

const Contact = () => {


    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in touch</h2>
                    <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item name="Full name"
                        rules={[{ required: true, message: 'Please input your Full name!' }]}
                    >
                        <Input placeholder="Full name" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="Subject" >
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item name="Telephone" >
                        <Input placeholder="Telephone" />
                    </Form.Item>
                    <Form.Item name="Message" >
                        <TextArea rows={4} placeholder="Type message" />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox>
                            I have read the agreement
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Contact;
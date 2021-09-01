import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const Work = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>
                <Modal title="Classical romantic song" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/gvyUuxdRdR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default Work;
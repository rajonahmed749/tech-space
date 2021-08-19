import React, { useState } from 'react';
import { Typography } from 'antd';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';
const Learning = () => {
    const { Paragraph } = Typography;
    const [editableStr, setEditableStr] = useState('This is an editable text.');
    return (
        <div>
            {/* editable paragraph */}
            <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
        </div>
    );
};

export default Learning;
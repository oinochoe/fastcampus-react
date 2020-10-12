import React, { useState } from 'react';
import Checkbox from './Components/CheckBox';

function AppCssModule() {
    const [check, setCheck] = useState(false);
    const onChange = (e) => {
        setCheck(e.target.checked);
    };
    return (
        <div>
            <Checkbox onChange={onChange} checked={check}>
                다음 약관에 모두 동의
            </Checkbox>
        </div>
    );
}

export default AppCssModule;

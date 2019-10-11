// SurveyField contains logic to render a single label and input

import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
    // the above ({ input, label, meta }) destructures the input object off of props passed in (props.input)
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: "5px" }}/>
            <div className="red-text" style={{ marginBottom: "20px" }}>
                {touched && error}
            </div>
        </div>
    )
};

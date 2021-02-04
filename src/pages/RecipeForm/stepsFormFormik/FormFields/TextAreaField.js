import React from 'react';
import {at} from 'lodash';
import {useField} from 'formik';
import {TextareaAutosize} from '@material-ui/core';

export default function TextAreaField(props) {
    const { errorText, ...rest } = props;
    const [field, meta] = useField(props);

    function renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return error;
        }
    }

    return (
        <TextareaAutosize
            rowsMax={6}
            type="text"
            error={meta.touched && meta.error && true}
            helperText={renderHelperText()}
            {...field}
            {...rest}
        />
    );
}
import React from 'react';
import {at} from 'lodash';
import {useField} from 'formik';
import {TextField} from '@material-ui/core';

export default function InputFieldNumber(props) {
    const { errorText, ...rest } = props;
    const [field, meta] = useField(props);

    function renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return error;
        }
    }

    return (
        <TextField
            type="number"
            error={meta.touched && meta.error && true}
            helperText={renderHelperText()}
            InputLabelProps={{
                shrink: true,
            }}
            {...field}
            {...rest}
        />
    );
}
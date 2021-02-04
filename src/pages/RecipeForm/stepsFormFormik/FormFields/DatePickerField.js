import React, {useEffect, useState} from 'react';
import {useField} from 'formik';
import Grid from '@material-ui/core/Grid';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePickerField(props) {
    const [field, meta, helper] = useField(props);
    const { touched, error } = meta;
    const { setValue } = helper;
    const isError = touched && error && true;
    const { value } = field;
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (value) {
            const date = new Date(value);
            setSelectedDate(date);
        }
    }, [value]);

    function onChange(date) {
        if (date) {
            setSelectedDate(date);
            try {
                const ISODateString = date.toISOString();
                setValue(ISODateString);
            } catch (error) {
                setValue(date);
            }
        } else {
            setValue(date);
        }
    }

    return (
        <Grid container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    {...field}
                    {...props}
                    value={selectedDate}
                    onChange={onChange}
                    error={isError}
                    invalidDateMessage={isError && error}
                    helperText={isError && error}
                />
            </MuiPickersUtilsProvider>
        </Grid>
    );
}
import {useField} from "formik";
import {Checkbox, FormControl, FormControlLabel, FormHelperText} from "@material-ui/core";
import {at} from 'lodash';

export default function CheckboxField(props) {
    const { label, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;

    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    function onChange(e) {
        setValue(e.target.checked);
    }

    return (
        <FormControl {...rest}>
            <FormControlLabel
                value={field.checked}
                checked={field.checked}
                control={<Checkbox {...field} onChange={onChange} />}
                label={label}
            />
            {_renderHelperText()}
        </FormControl>
    );
}
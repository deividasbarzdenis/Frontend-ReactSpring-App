import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

export const Ingredients = ({formData, setForm, navigation}) => {
    const {ingredientDescription, amount, uom} = formData;

    return (
        <Container maxWidth="xs">
            <h3>Ingredients</h3>
            <TextField
                label="Ingredient Description"
                name="ingredientDescription"
                value={ingredientDescription}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Amount"
                name="amount"
                value={amount}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Unit Of Measure"
                name="uom"
                value={uom}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <div style={{marginTop: "1em"}}>
                <Button variant="contained"
                        color="secondary"
                        style={{marginRight: "1rem"}}
                        onClick={() => navigation.previous()}
                >Back</Button>
                <Button variant="contained"
                        color="primary"
                        onClick={() => navigation.next()}
                >Next</Button>
            </div>
        </Container>
    )
}
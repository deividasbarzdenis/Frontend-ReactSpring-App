import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

export const Notes = ({formData, setForm, navigation}) => {
    const {recipeNotes} = formData;
    return (
        <Container maxWidth="xs">
            <h3>Notes:</h3>
            <TextField
                label="Recipe Notes"
                name="recipeNotes"
                value={recipeNotes}
                margin="normal"
                multiline
                rows={4}
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
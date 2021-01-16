import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

export const Category = ({formData, setForm, navigation}) => {
    const {description, difficulty} = formData;
    return (
        <Container maxWidth="xs">
            <h3>Category</h3>
            <TextField
                label="Description"
                name="description"
                value={description}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Difficulty"
                name="difficulty"
                value={difficulty}
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
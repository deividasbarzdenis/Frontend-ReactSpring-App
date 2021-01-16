import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import {Button} from "@material-ui/core";

export const RecipeName = ({formData, setForm, navigation}) => {

    const { recipeName, prepTime, cookTime, servings, source, URL, directions} = formData;
    return (
        <Container maxWidth="xs">
            <h3>Recipe Title</h3>
            <TextField
                label="title"
                name="recipeName"
                value={recipeName}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Preparation Time"
                name="prepTime"
                value={prepTime}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Cook Time"
                name="cookTime"
                value={cookTime}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Servings"
                name="servings"
                value={servings}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="Source"
                name="source"
                value={source}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="URL"
                name="URL"
                value={URL}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <TextField
                label="directions"
                name="directions"
                value={directions}
                margin="normal"
                variant="outlined"
                autocomplete="off"
                fullWidth
                onChange={setForm}
            />
            <Button variant="contained"
                    fullWidth
                    color="primary"
                    style = {{marginTop: "1rem"}}
                    onClick={() => navigation.next()}
            >Next</Button>
        </Container>
    )
}
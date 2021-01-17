import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const RecipesTable = ({recipes, handleDeleteClick}) => {
    return (
        <Container>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Recipe Title</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Owner</TableCell>
                            <TableCell align="center"/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            recipes.map(rec => (
                                <TableRow key={rec.id}>
                                    <TableCell>{rec.recipeTitle}</TableCell>
                                    <TableCell>{rec.description}</TableCell>
                                    <TableCell>{rec.user}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            onClick={() => handleDeleteClick(rec.id)}
                                        >Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default RecipesTable;


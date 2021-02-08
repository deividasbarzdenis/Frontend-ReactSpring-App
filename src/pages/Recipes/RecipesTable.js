import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import useUser from "../../hooks/useUser";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 500,
    },
    head: {
        fontWeight: "bold",
    },
    topTable: {
        backgroundColor: theme.palette.grey[200],
    }
}));

const RecipesTable = ({recipes, handleDeleteClick}) => {
    const classes = useStyles();
    const user = useUser();
    return (
        <Container component="main">
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.topTable}>
                        <TableRow >
                            <TableCell align="center" className={classes.head}>Id</TableCell>
                            <TableCell align="center" className={classes.head}>Recipe Title</TableCell>
                            <TableCell align="center" className={classes.head}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            recipes.map(rec => (
                                <TableRow key={rec.id} hover>
                                    <TableCell align="center">{rec.id}</TableCell>
                                    <TableCell align="center">{rec.recipeDescription}</TableCell>
                                    <TableCell align="center">
                                        {user?.roles.includes('ADMIN') && (<Button
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            onClick={() => handleDeleteClick(rec.id)}
                                        >Delete</Button>)}
                                    </TableCell >
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


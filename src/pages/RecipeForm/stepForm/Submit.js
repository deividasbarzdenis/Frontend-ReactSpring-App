import Container from "@material-ui/core/Container";
import {useHistory} from "react-router";
import Button from "@material-ui/core/Button";

export const Submit = () => {
    let history = useHistory();
    const redirect = () => {
        history.push('/home');
    }
    return (
        <Container maxWidth="sm" style={{marginTop: "4rem"}}>
            <div>

                <h3>Your recipe added</h3>
                <div>
                    <Button
                        color="primary"
                        component="span"
                        variant="contained"
                        onClick={() => redirect()}
                    >Home
                    </Button>
                </div>
            </div>
        </Container>
    )
}
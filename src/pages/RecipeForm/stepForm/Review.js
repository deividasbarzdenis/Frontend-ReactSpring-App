import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'

export const Review = ({formData, navigation}) => {
    const {go} = navigation;
    const {
        recipeTitle,
        prepTime,
        cookTime,
        servings,
        source,
        URL,
        directions,
        //-------------
        description,
        difficulty,
        //--------------
        ingredientDescription,
        amount,
        uom,
        //------------------
        recipeNotes,
    } = formData;
    return (
        <Container maxWidth="sm">
            <h3>Review:</h3>
            <RenderAccordion summary="Title" go={go} details={[
                {'Recipe Title': recipeTitle},
                {'Preparation Time': prepTime},
                {'Cook Time': cookTime},
                {'Servings': servings},
                {'Source': source},
                {'URL': URL},
                {'directions': directions},
            ]}/>
            <RenderAccordion summary="Category" go={go} details={[
                {'Description': description},
                {'Difficulty': difficulty},
            ]}/>
            <RenderAccordion summary="Ingredients" go={go} details={[
                {'Ingredient Description': ingredientDescription},
                {'Amount': amount},
                {'Unit Of Measure': uom},
            ]}/>
            <RenderAccordion summary="Ingredients" go={go} details={[
                {'Recipe Notes': recipeNotes},
            ]}/>
            <Button
                color="primary"
                variant="contained"
                style={{marginTop: "1.5rem"}}
                onClick={() => go('submit')}
            >Submit
            </Button>
        </Container>
    )
}

export const RenderAccordion = ({summary, details, go}) => {
    return(
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            {summary}
        </AccordionSummary>
        <AccordionDetail>
            <div>
                {
                    details.map((data, index) => {
                        const objKey = Object.keys(data)[0];
                        const objValue = data[Object.keys(data)[0]];
                        return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                    })
                }
                <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}
                ><EditIcon/></IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
    )
}
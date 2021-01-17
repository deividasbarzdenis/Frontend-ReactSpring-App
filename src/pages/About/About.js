import Container from "@material-ui/core/Container";
import {CardMedia, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
}));
const About = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
            <div>
                <h3 align="center">About Recipes pages</h3>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <div>
                    <h4>Hello and welcome Recipes page!</h4>
                    <article>
                        <span>Thank you so much for stopping by the site! If you are new to Simply Recipes, the one thing you should know about us is that we are obsessed with creating scratch cooking recipes that you will love.</span>
                    </article>
                </div>
                <div>
                    <h4>Recipes that work</h4>
                    <article>
                        <span>There are two things we think about when deciding if a recipe is good enough to go on the site.
                            First, does it work? Does the dish make us smile inside and out? Do we want to eat the whole batch by ourselves?
                            Second, if the dish tastes great, is it worth the effort? Do we want to make it again (and again and again)?
                            This is what we strive for—recipes you can rely on to work every time and be worth your time, effort, and $$ to make!
                            Our goal is to encourage people to cook at home, and to make the process of feeding your family and loved ones less intimidating and more enjoyable.
                            Our recipes are all tested in our own home kitchens, usually several times.
                        </span>
                    </article>
                </div>
                <div>
                    <h4>Contact us</h4>
                    <article>
                        <span>find us on Twitter, Instagram, Pinterest, and Facebook.</span>
                    </article>
                    <article>
                        <span>Thanks so much for visiting Simply Recipes!</span>
                    </article>
                </div>
            </div>
        </Container>
    );
}

export default About;


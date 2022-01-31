import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Meal.css';

const Meal = (props) => {
    const {strMeal, strMealThumb, idMeal} = props.meal;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/food-details/${idMeal}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    image={strMealThumb}
                    alt={strMeal}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" className="meal-name"
                    onClick={handleClick}
                    >
                        {strMeal}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Meal;
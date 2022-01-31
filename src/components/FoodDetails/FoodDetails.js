import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setFood(data.meals[0]))
    })

    return (
        <div>
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                image={food?.strMealThumb}
                                alt={food?.strMeal}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="h2" sx={{textAlign: 'center', marginBottom: '40px'}}>
                                    {food?.strMeal}
                                </Typography>
                                <Typography>
                                    <span style={{textDecoration: 'underline'}}>Need Element: </span> {food?.strIngredient1}, {food?.strIngredient2}, {food?.strIngredient3}, {food?.strIngredient4}, {food?.strIngredient5}, {food?.strIngredient6}, {food?.strIngredient7}, {food?.strIngredient8}, {food?.strIngredient9}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default FoodDetails;
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Meal from '../Meal/Meal';

const Foods = () => {
    const [text, setText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [text])

    const handleCatchText = (e) => {
        const newText = e.target.value;
        setText(newText);
    }

    return (
        <>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    required
                    fullWidth
                    placeholder="Search Your favorite Food"
                    autoFocus
                    onChange={handleCatchText}
                />
            </Box>
            </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {
                        meals?.map(meal => <Meal meal={meal}
                            key={meal.idMeal}
                        >
                        </Meal>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Foods;
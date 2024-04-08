import { Box, Button } from "@mui/material";
import RecipeReviewCard from "../home/MenuCard";

export default function FoodMenu() {


    return (
        <Box sx={{width: '100%', backgroundColor: "white", border: "solid", borderWidth: '1px', borderColor: 'white'}}>
            <Box sx={{width: '100%', backgroundColor: 'white'}}>
                <Box sx={{display: 'flex', justifyContent:'center', gap: '50px', marginY: '30px'}}>
                    <Button sx={{width: '15%', border: 'solid', borderWidth: '1px', borderColor: '#D6D8DB', color: '#FFFFFF', textTransform: 'capitalize', height: '45px', borderRadius: '8px', fontSize: '18px', backgroundColor: '#18BA51'}}>Breakfast</Button>
                    <Button sx={{width: '15%', border: 'solid', borderWidth: '1px', borderColor: '#D6D8DB', color: '#000000', textTransform: 'capitalize', height: '45px', borderRadius: '8px', fontSize: '18px'}}>Soup</Button>
                    <Button sx={{width: '15%', border: 'solid', borderWidth: '1px', borderColor: '#D6D8DB', color: '#000000', textTransform: 'capitalize', height: '45px', borderRadius: '8px', fontSize: '18px'}}>Main Course</Button>
                    <Button sx={{width: '15%', border: 'solid', borderWidth: '1px', borderColor: '#D6D8DB', color: '#000000', textTransform: 'capitalize', height: '45px', borderRadius: '8px', fontSize: '18px'}}>Desert</Button>
                </Box>
                <Box sx={{display: 'flex', justifyContent:'center', gap: '50px', marginY: '30px'}}>
                    <RecipeReviewCard />   
                    <RecipeReviewCard />    
                    <RecipeReviewCard />    
                    <RecipeReviewCard />    
                </Box>
                <Box sx={{display: 'flex', justifyContent:'center', gap: '50px', marginY: '30px'}}>
                    <RecipeReviewCard />   
                    <RecipeReviewCard />    
                    <RecipeReviewCard />    
                    <RecipeReviewCard />    
                </Box>
            </Box>
        </Box>
    )
}
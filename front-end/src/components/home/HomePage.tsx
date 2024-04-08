import { Box, Typography } from "@mui/material";
import { TabPanel } from "@mui/joy";
import { FitScreen } from "@mui/icons-material";
import HomePageSVG from "../icons/HomePageSVG";
import { BookIcon, ClockIcon, GreenRightArrow, SaladIcon, StarIcon } from "../icons/iconSvg";
import RecipeReviewCard from "./MenuCard";

export default function HomePage() {
    return (
        <>
        <Box sx={{width: "100%"}}>
            <Box
            sx={{
                display: "flex",
                width: "100vw",
                height: "50vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#18BA51",
                backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                gap: "10px",
           }}>
                <Box sx={{display: 'flex', alignItems: 'center', gap:'100px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography sx={{color: "#ffffff", fontSize: '55px', lineHeight: '50px'}}>Pinecone Food <br/> Delivery</Typography>
                        <Typography sx={{color: "#ffffff", fontSize: '55px', lineHeight: '50px'}}>Pinecone Food Delivery</Typography>
                        <Box sx={{width: '100%', height: '2px', backgroundColor: '#ffffff', marginY: '30px'}}></Box>
                        <Typography sx={{color: "#ffffff"}}>Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Earum, sunt.</Typography>
                        <Typography sx={{color: "#ffffff"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sunt.</Typography>
                    </Box>
                    <HomePageSVG />
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', }}> 
                <Box sx={{display: "flex", justifyContent: "center", gap: '25px',marginY: '100px'}}>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <BookIcon />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Хүргэлтийн төлөв хянах</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <ClockIcon />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Шуурхай хүргэлт</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <SaladIcon />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Эрүүл, баталгаат орц</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <Box />
                        <BookIcon />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Хоолны өргөн сонголт</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                </Box>
                <Box sx={{marginX: '376px', width: '100%'}}>
                    <Box sx={{}}>
                        <Box sx={{display: 'flex', fontFamily: 'sans-serif', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <StarIcon />
                                <Typography sx={{fontSize: '22px', marginLeft: '10px'}}>Хямдралтай</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', color: '#18BA51', gap: '5px', cursor: 'pointer'}}>
                                Бүгдийг харах 
                                <GreenRightArrow />
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', marginTop: '30px', gap: '50px'}}>
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '100px', width: '100%'}}>
                        <Box sx={{display: 'flex', fontFamily: 'sans-serif', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <StarIcon />
                                <Typography sx={{fontSize: '22px', marginLeft: '10px'}}>Үндсэн хоол</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', color: '#18BA51', gap: '5px', cursor: 'pointer'}}>
                                Бүгдийг харах 
                                <GreenRightArrow />
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', marginTop: '30px', gap: '50px'}}>
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '100px', width: '100%'}}>
                        <Box sx={{display: 'flex', fontFamily: 'sans-serif', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <StarIcon />
                                <Typography sx={{fontSize: '22px', marginLeft: '10px'}}>Салад ба зууш</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', color: '#18BA51', gap: '5px', cursor: 'pointer'}}>
                                Бүгдийг харах 
                                <GreenRightArrow />
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', marginTop: '30px', gap: '50px'}}>
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                        </Box>
                    </Box>
                    <Box sx={{marginY: '100px'}}>
                        <Box sx={{display: 'flex', fontFamily: 'sans-serif', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <StarIcon />
                                <Typography sx={{fontSize: '22px', marginLeft: '10px'}}>Амттан</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', color: '#18BA51', gap: '5px', cursor: 'pointer'}}>
                                Бүгдийг харах 
                                <GreenRightArrow />
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', marginTop: '30px', gap: '50px'}}>
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                            <RecipeReviewCard />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
    )
}
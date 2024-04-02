import { Box, Typography } from "@mui/material";
import HomePageSVG from "./svg/homepagesvg";
import HomePageBookSVG from "./svg/HomePageBookSVG";
import { TabPanel } from "@mui/joy";
import { FitScreen } from "@mui/icons-material";
import HomePageClockSVG from "./svg/HomePageClockSVG";
import HomePageSaladSVG from "./svg/HomePageSaladSVG";
import StarIcon from "./svg/stariconsvg";
import RecipeReviewCard from "./MenuCards";
import HomePageGreenRightArrow from "./svg/HomePageGreenRightArrowSVG";

export default function HomePage() {
    return (
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
                        <Box sx={{width: '100%', height: '2px', backgroundColor: '#ffffff', marginY: '30px'}}></Box>
                        <Typography sx={{color: "#ffffff"}}>Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Earum, sunt.</Typography>
                    </Box>
                    <HomePageSVG />
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', }}> 
                <Box sx={{display: "flex", justifyContent: "center", gap: '25px',marginY: '100px'}}>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <HomePageBookSVG />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Хүргэлтийн төлөв хянах</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <HomePageClockSVG />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Шуурхай хүргэлт</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <HomePageSaladSVG />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Эрүүл, баталгаат орц</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                    <Box sx={{width: '15%',height: 'auto' , boxShadow: 'inherit', border:"solid", borderWidth: '1px', borderColor: '#D6D8DB', cursor: 'pointer', borderRadius: '16px', padding: '10px'}}>
                        <HomePageBookSVG />
                        <Typography sx={{color: '#272727', width: '100%', fontSize: '24px'}}>Хоолны өргөн сонголт</Typography>
                        <Typography sx={{color: '#272727', opacity: '75%', width: '100%', fontSize: '19px'}}>Захиалга бэлтгэлийн явцыг хянах</Typography>
                    </Box>
                </Box>
                <Box sx={{marginX: '376px'}}>
                    <Box sx={{display: 'flex', fontFamily: 'sans-serif', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <StarIcon />
                            <Typography sx={{fontSize: '22px'}}>Хямдралтай</Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', color: '#18BA51', gap: '5px', cursor: 'pointer'}}>
                            Бүгдийг харах 
                            <HomePageGreenRightArrow />
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                    </Box>
                </Box>
            </Box>
        </Box>
        
    )
}
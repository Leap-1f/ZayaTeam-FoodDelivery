import { Avatar, Box } from "@mui/material"

export const UserProfile = ()=>{
    return(
        <>
        <Box>
            <Box>
                    <Avatar alt="" src="data:image/png;base64,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" ></Avatar>
            </Box>
            <Box></Box>
        </Box>
        </>
    )
}
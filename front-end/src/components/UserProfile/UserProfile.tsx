import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";


export const UserProfile = () => {
  const [edit,setEdit] = useState(true)
  const userEdit = ()=>{
    setEdit(!edit)
  }

  return (
    <>
      <Box
        sx={{
          width: "432px",
          height: "454px",
          display: "flex",

          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <Box sx={{position:"relative"}}>
            <Avatar
              sx={{ width: "120px", height: "120px" }}
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAC2CAMAAADAz+kkAAAAzFBMVEUAAAD//wD////8/AD5+QD29gDy8gDo6ACmpgDt7QDf3wBwcAC2tgB6egDQ0ADFxQDKygCvrwC7uwBTUwDb2wCoqAD09PQoKACIiAAuLgA3NwBkZACBgQBAQADk5ABdXQC/v7+YmACPjwAdHQAlJQDe3t5PTwDq6urV1QB1dQCcnJy1tbXV1dV9fX3n5+dTU1NGRgCVlQAsLCxjY2OHh4eqqqpvb280NAAWFgALCwBhYQAVFRU6OjpHR0cpKSkhISGQkJDJyclbW1saGgA8At+xAAAT1ElEQVR4nOVdaUPiPBCu3MglCJUVVEBRTkU51EUU3P//n95yZSZXk7RB13efT7sCafI0mSuTiRP5Driu2171p73lcPa5eHv6+JjPnTXm84/3p7eH8WzS600bq3vve9/SP+dLn+a2B/3lcPzmaONjMRv2GoP217LzVay4q/7y822uTwfHztgj54s6+wWsuHeN3jgwGwzms97qC6bNYVm5Xy2tEQJ4n/UGdwft9+FYue/PDOSHKeaLSeNwk+YwrLiNYXARoo+n5YGWk31W3MHygHOEw2evbX0ItllxG7MnzeGc3WaqrWaqWMiXkwiX5ZNSMdVsVTO3vzRbepus7I7CKitu41M5gtfzWqtSyseP9JDIlyr107NXZbszq8RYY8XtK7TNRa1Vyl9qssHiOF+sX537P2BojxhLrKxmfv09rafK6YB8IESTnWbOj5qniSUZY4OVu+WHtKPXmWI5PB8YsXzqSk7M29TCgCyw0niQ9XCUK1iYIUIcZzPPsscOwzsGIVm560lUzk29lDwQIztELysZCS+L/ney0pZIk4vU8WEZIci3zoQ9mC9DmXchWBkI9fBrraSrdu3gMnUrXkj338CKWJxkSoeSJH5Ipk5FnZkF1kgBWVmJjPpRNvYNlGyRTomW0mdAXgKxIuLkvPkdswSjXL/muzUOxEsAVlaCtZPJfzMlG8RLgpU0CxCKMWblTmDYS6ZJ8eRwBEQrBeHfj+t895aHZsVdcs8cCbsXK/x2lKRcRqUfqVV706l2RH+Ppnhf29R+MWNlysWSasKl06m/OFdqBV2Sjz2VUP66/OKcP4rczWhpxHZzYWbvmrByzwmUrqhT6eb6ZTWVozo6qlSkH11p2IHxtT90WxJ9dMLxMjwQK9ziyYhs+pOt66YlUup16UeOlvhubZ6VE/mfec62axyAlRXr8GQE8yTZvNl8dqYXR6ldyD5JOGJhyiK77cttVrBcufky1rZ2dVmZME84Fbyfzt5bu9A0XU4d2Sd5J6XXRH73yOuq4JmFG6bXulJXj5XBO936s+BNlkg86EpvQEfRC0dGX8mRLy4al6RTNcGLSrHTRc9p1GKlRzf9WuSeHkcGd01zPEeJP1Lxk9NvJfkCE5h/WfEq3fe5lnTRYMVlVE+XU5qxJrK1dWeKNx65pho5p9rNXKJY90WW+7jMiJeJFVZWzOLhTKd4C39+qz2ao2MphWnPFNH3NJP4+dc8L0V6BAv1KlKywqyeJvvIRJP6/JeB21xwnBuxqefJ0BcDZzNPd4HjJV6jB6HcDFCxQns9F5xAS9FbNa8mYcmK94OdJEjmC9liqdDZLc6c94lJS8xsuODkS4n+Qi8UK/e0kdJiH5Z9oZ+maWXssF55554r1On+IQ2ctzw2Out/GQU5WZ/wll3nCXpfYBaClQHV0i92ouQvmL44VZORbIdyU2fDRac5c4KPuG0izvCm59Obr3DxY6VPtVNjJEaaWawero0GcsQ3gCH3kUQo8w08Ml85pnzpd79wlA8rtJxlO0kL2S3MXu8RN9UocMvVHzm+hTPGGorSOyU+brScFcrGv2ZWeUeUL6BvqWzhS4q2cbtDQtRGjVFk9CqSqyIpK0P8+1vacIsJAl6Opp8MiPqz8tustaOqsBVGS+cplSm1c2WsUKTkmKZZp2uLc8NhpP1ZMW3uWNzMFf1C09RGrMxblLBCbQrS7mtU/FLYr6mRl7Szh2FzR1ygaQcmLEXJeAktYlaomUL7gsdSGWm6i5pVsCIP6orB+scEXVp7UnJZvIiErFCCllYsjBWJYTgI+Sh2MN29P5G2dEO/MMpvE4pcESuUSqYajMqyADxI42oyyFbiHoZ6/iju0xZtV1DvQ6SgBaxQxhtlz6alOSOOQVhlD+HeMAIfxVHAr7GunBZB3JJnhTLzKVLyvkl7GdNBiDUZoGmTFWdE6SJMyxNv/HOs3OOmqOVT8R+EfphIZxCOuVGoaPCVesOYlgc1K9hLpnYfHhWDeDUcg8BzoWHoVckMFgAlqPBwuL0ilhVsqFCKvqt6pmOYplFQNmiYHaTS9IyhixU0a7YwrEzRVymrzCdtUfhMNcReA4ahB6HRRWpI2Jxr+7GCJS0VK1HpizUMIrZryExRQNOoPYUDIWgSxWTe/FhBebOUrNN4DR6EKQIyJNXtmdHcUjfo0LMljXTqUM4KMvSpqLTOTPEwMhmEj5FMYGLdarC8QRP9BntiKxkreI8D62T/mBmCiX/oYyUTmEgqcSKlANg4RPp57kpYeRf/VC0WCfTXUEynOQNzWW/9bIAVNBINQzEryCfE3RGFIqXQPtNRUrflGOhmhYVJA727OBItKxErbfj8GlnHet0n0D3KoLcqdZeQyv2m8YrilshqehexgnaTkfl2yTfqDz1PVxGd3EPT6DdYPhtg9x4Zcz2elQZ8itZPTPeUG6CpMw7dGaizhOJ6dgMGipTjNeRyrCD/B3VFR1OwGGkIF12NoaHV1J6DAGhpohc0YVlBpj7qiY5RIcCjKrjY0W3pl6qlZJD35lCmEHpD9wwrkDJ6Dh3RMqJF+KPY+Put3ZJ/6CluYDXQQBYnct6HNCtoqiBxqWnTCuGXMGui13wSNi4Dc+JQKwIJ3DuKFXCAEIkB188eXVlyqDIQgiELByey5kKWAqwh5CxMMCsN+Du473E2DcMYNxnRwUND8Xgh8IaOi1fqI84KoIgqmnMuYgVsFfRqBPvZQXBea6VKnXQiHotGo/F0VtthIeieJOLeb2PxRDKfbVavVAFfTcD7R3vUPWAFmbUgVXSdUF28/Dq/eA76hq/PL87FJwyDA23ZQqDxDVgBD+gZvqntKf9YgAmPJN2AsAJ/A8msDDb/fNzAFADJPduzguIqIBwDWkc/CjBZkK3g7liBuD54QLalyl8JCIEifdvYsQJfA1lr6ob+TECkBRTueMsKWkCw0L6hi98AsFlQQsOWlYngS4Ec0R+ImGAaDDaswOFkkD4hrekfA3A+Qbss16yg7XYSWBEmJP4fAfIW9mMXa1ZWgq8YBmt/MIhnD1GTueuxsiT/hT3Uf8FY2QK0LuyvDjxWxvw3AkRrfyogaRZ089RjBQK2JN5qHNj/uYAYAeyeDCOOS/5zRoRtyHDTjwKJ3kAs+TPiQBQBhG2YyN9PAwkYgo/zHnEa5D9gw4WJ1/40NPeDjkP8xnWm/OfR0NG/HwTYMIM0ozsHUo6JZauVL/B/AaR+gj0/cMALIorZKAb/03FGWIEwZcOB4AqRO/+Ka7gF2RSEDPq+A0XfSJKFOkXz/wTCCiTqTB3Y9CBJX0YpMj8ecX7YU2dB/v2PskL8Q7BdhayYZQ79dKRFrPzzKyjNT4YpkrYdnrR/ASRIiaUtaGay7/qP6iDw/voiK+4ftVcg1LZCFj/JFfunbFvYVgWfuI28Q1KYQOEHjeqVYqXuX+Tgr8DLaatYTGX8A4uQvAojch0IZpPtVL9k2KvC3upJFP9uYmpETiZTPuXqSYgyAbWpXAc2PiD3SxpfGdGJ+n+xWD5neioNjjT3X4Gw7BuOUEKeuiwWx2W/phXXKXwbcmxPo7J0HDKjYE91HHHQ1iEx4yQGiyD7L2aez/UVYAvSrCE5pZHkP594rIDBolBCwoMLMdt5WTbQFfVU7MhAGhgo5r7HCqhmEqyLi4YqyRP9C9W4LBlVVIKABKujkIPY9liBE5jAm2ARNiWP+gt9SWlxD8FyJ2FZELbv6x3VO0hWF7iPe8hrQ0T9iid8B+SFyATzmogVcIk/N5kaEEsgeQt8/pfP2eK/TT/75LhzyhVeNlgj0w0rIFjAzmMPG/uWERGUwf9GcEoZgTuuQU5hIMu1vWEFHe0mXjW7hHyPunEVFG5ua5nu1YFN3z+3tW7m9wVnnvme8WMPm5B5hXJTuGxBMni2wotvDQRqs/768SS+c0Nj6aylrHcWN48F2UNu5P084hJzYHEAXcMdKxBMgK3mruTXQoBSy3Bnd0/0zwJp4rXOKZkSaBf/4nvM2ybBEyRIBztW0BIiz6NPeynqS+4NgZrwbF3Zbu57S3jwqLD3jBUlJygHGg74g3nxQTLWIYUFmKZ0u6KY0E4LSYWPxTCW9FBjdKdfFGVxqSyuJvkzyMAJYQW00CvZHaFGoiiOv51/PlUNYrayHEQOzh6bd6Oq1UDpZjJYlG3bJqzcwR/hwCB2hxWl4BIvjvPiX+rBjtj1P/W9pkVVXQpb/UAxvLQHdGoKcuNeyDfxZFEVyBupSyTYoEV4eQXCo7rCLmaFSBVk8/YRK0jegghBlpzqeoma01R8w+Rcqgzqire3ynJqaAVBtAhyNObUaUyw+iFzAakhVb2CjEapq1hYE1ij9NqxsuoRSFs4Ko0G2qNYQScc4I2AzeIn5NbI6RQulldE1MKrTnWAW9WsBmUjTM936VPeMFleiD2QINa06jW1tEqChMttVgmVDQqKuQLuDhimSIDu60fsWUGTBTLFiDesWiB69UVCBaj0ylzGFDUaoGYR2IJgmZN6PaR6BCo0AhqHaCw7N8SGmSyGddckIMHZIv8nVGqEsILUELwWsoZUgkUPYSSLlQ4c7UOvcJQQubYfEY4VXFWwSX6zX3Mv/AOCIPhpesPa4hLsD96iYkTI6m4IWHFRH2AN7a0eO5f0qcs2ymBa7FaMvbUCmgpFnVGRTlTtCtXVQMfCd16icQFRIYIHM63cRbovmwf2G1YA90JWsMCFCbvfBbFy+WXg88DP6rY1sDt4i2KYKLCAb0TBrKByCfxpeTuTJSgrxiWFRdhFbVEhXrSiFxEJK1TBbFD8O4PYysoOehzL8HoLMbaGAaoliaPT91JW8Bo6gx9vFZFpVV8hgsZZmhaevbXgkPrBZSinETkraMcML5mtkLShHIPacWYXxAix3c17gTWAt0HGER9WqAKdSChtp5qFNRSUFQuW7VYrQ2wsjlbz3PVlhRItaDFvdwzC30sdNLBtXIWew2YE6LKzKN4IZO8S4qqJ44vIUBbPRrYYX0TAIeiZ+tAraGMTPKPXioNgU5YEvh4/LrKOJu5GE4kTQwygLgstRjPkczdpNiMU78BWNn8DIs8Klrh45qbXHndYDRk0Hmd24RmHzXLB5WmxfBtzFIhutKAub0C0xNeTzvQ6HAYBSQlrxa173kT/xzPljWdAePsJdRsmlnMtJ6Tc+yaLfz0zTpj/7/EhusxOeFNOA3cIh1bWMjeM4AtelcL0MiEMj4QRkrPUlt3HnYgA8a1K+LICynpLX4VaRBv37KLWrT42H6vdU99wy6iWq1br3czpxq4I4ZzW6DcbpzJIxPf7SW7gomihFnUqjMjN1IuXCXjt8bLsDqFqBwzzWCKfygQ246K3zjWmNEllQkouPZTd1kbRco7Nt+RteAWNIDii9WInRrtB8ob2VKjt87nsJkjpzX7U3Uqv1AQuOhc+ZVpNkWY9xpyVCNMWeSZ1nUr4/JBejym/BbJBdZVSPYmcpaD/FrRzZMERJKgwrVGb3XOhoFWwwlxXnaG0wPEopOFCAc+W8B4PQSxD3153SeXA+t0v63e7bPsDt3JGJyYUHu2tojhsVIU0YjHKVbrHdND402fg/jcRu/T1zMzcLttb/0QGml6I6YM0zUmU3l/grpfSZ4W5I5O9TtUi9h6slZi5CB06A5Xzko1YYa99t7jqKey2r4xvfNNEjLGLVBe/q1hhZC53t68tjA45VfJ0EH0hVz66rETcBc2LTeUD2IhCO7s+LOJMWJQPpwRghblW1ev7Id7o5lxs8wANc8n30kuZDVmJrD7ohrumF79qYB3RtWka7pBnzgQ9CO4HDchKxB3TbdvZtaKQYu5Cs4I0Gz3vqceqzwrjFq1RDBPxEKAc4H5aBRKsR76QOj4BWYnczZhHPFv0bI82h6ztyvE4d0BHc6KYsOJJl/lBebm1lCOzwyN7cGihJVGMWeGUkecbZe2to67xFelyJPircGUX34dnJTL45HjxuxHHCBU7mTtHwht0Jj4OcmhWBMvIea3aMXdPLCUEdvhd2wddKRuUFc4zWuP0xMJCKtuwbONF/hzxm8rrscFKxF3yvPxKhTbs0uFdw7Kg7MW7wj22xYqnpTmxu54wWinlPggZI09URIdig3ASkBVvvrDWywY5o7uIWTRD/DZWEmU7zPUtFCusePNFsI4c56aeDyxiAls/iYIwWehpaqZ4bLDizReB3PXwqx7QGgv2s0SpJtyCfNLxjQ/Aiofpm6hDjnNVDKCtAxhxx03JAfsHc71jjxXPrhMKGA+jasFQLRkacclSTpINM58YGPcHYSUSue9xhh1hpm7KjCaOS11pRam34OLEIiseVrIJ4+ElUwmlmVjETlJ+yXUTUzNWCCuseJJ3uvDpqnORa+aTYd2ceLLQzPiWkRqHkbAYlliJrFeSLzGO83yaSZ2UtS8tR0h3PD5uFZc/fvbDr5w97LHi4a735N/zNV6ef7eKpU5SbdfEjk+yldbVs8ZZqwcLwgTBKise7vufUuHL8XN+lalXW4+pVKWYzZZKpWyxWEk1H6vVXO1U/xzE+6xhlZKIfVY8uKuhxIw5ABbLgW1KIgdhZQ2376OWbOFjYn2S7HAgVtZo92cHmzPzxbCh3BcNjgOyssbdYDn+UA/SCE+z3uCAjKxxYFY2cFe9mbYI9idkMj2EGOHwFaxs0V5NhwsNzS3C/O1h2F+F9W708XWsbHHXHvSXw/HiXW9uPMyGy/6gfeAFw+GrWSFw3bvBqj+d9nqT4Ww2G38+PDyMx96/hsteb9pvrNqu+xWLRYj/AI5ensNWLMv+AAAAAElFTkSuQmCC"
            ></Avatar>
            <button onClick={userEdit}  style={{ position: "absolute" as "absolute", bottom: "0px", right: "0px", zIndex: "2", width: "24px", height: "24px", display:"flex",justifyContent:"center" , alignItems:"center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1_1356"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_1356)">
                  <path
                    d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                    fill="#18BA51"
                  />
                </g>
              </svg>
            </button>
          </Box>
          <Typography variant="h4">user.name</Typography>
         
        </Box>
        <Box>
          <Box
            sx={{
              padding: "0px 20px",
              bgcolor: "#F6F6F6",
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                padding: "8px 20px",
                display: "flex",
                width: "100%",
                gap: "8px ",
                alignItems: "center",
              }}
            >
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24"
                    fill="white"
                    stroke="#EEEFF2"
                  />
                  <mask
                    id="mask0_1_1348"
                    maskUnits="userSpaceOnUse"
                    x="13"
                    y="13"
                    width="24"
                    height="24"
                  >
                    <rect x="13" y="13" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1348)">
                    <path
                      d="M25 25C23.9 25 22.9583 24.6083 22.175 23.825C21.3917 23.0417 21 22.1 21 21C21 19.9 21.3917 18.9583 22.175 18.175C22.9583 17.3917 23.9 17 25 17C26.1 17 27.0417 17.3917 27.825 18.175C28.6083 18.9583 29 19.9 29 21C29 22.1 28.6083 23.0417 27.825 23.825C27.0417 24.6083 26.1 25 25 25ZM17 33V30.2C17 29.6333 17.1458 29.1125 17.4375 28.6375C17.7292 28.1625 18.1167 27.8 18.6 27.55C19.6333 27.0333 20.6833 26.6458 21.75 26.3875C22.8167 26.1292 23.9 26 25 26C26.1 26 27.1833 26.1292 28.25 26.3875C29.3167 26.6458 30.3667 27.0333 31.4 27.55C31.8833 27.8 32.2708 28.1625 32.5625 28.6375C32.8542 29.1125 33 29.6333 33 30.2V33H17ZM19 31H31V30.2C31 30.0167 30.9542 29.85 30.8625 29.7C30.7708 29.55 30.65 29.4333 30.5 29.35C29.6 28.9 28.6917 28.5625 27.775 28.3375C26.8583 28.1125 25.9333 28 25 28C24.0667 28 23.1417 28.1125 22.225 28.3375C21.3083 28.5625 20.4 28.9 19.5 29.35C19.35 29.4333 19.2292 29.55 19.1375 29.7C19.0458 29.85 19 30.0167 19 30.2V31ZM25 23C25.55 23 26.0208 22.8042 26.4125 22.4125C26.8042 22.0208 27 21.55 27 21C27 20.45 26.8042 19.9792 26.4125 19.5875C26.0208 19.1958 25.55 19 25 19C24.45 19 23.9792 19.1958 23.5875 19.5875C23.1958 19.9792 23 20.45 23 21C23 21.55 23.1958 22.0208 23.5875 22.4125C23.9792 22.8042 24.45 23 25 23Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "400px",
                }}
              >
                <Typography>tani ner</Typography>
                <Typography component="h3">Ugtahbayr</Typography>
              </Box>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_1356"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1356)">
                    <path
                      d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                      fill="#18BA51"
                    />
                  </g>
                </svg>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "20px 0px", display: `${edit ? "none" : "flex"}` }}>
            <Button
              sx={{ backgroundColor: "#18BA51", width: "100%" }}
              variant="contained"
            >
              Хадгалах
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                padding: "8px 40px",
                display: `${edit ? "flex" : "none"}`,
                width: "100%",
                gap: "8px ",
                alignItems: "center",


              }}
            >
              <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="24" fill="white" stroke="#EEEFF2" />
                  <mask id="mask0_1_1318" maskUnits="userSpaceOnUse" x="12" y="13" width="25" height="24">
                    <rect x="12.5" y="13" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1318)">
                    <path d="M24.5 34C22.2 34 20.1958 33.2375 18.4875 31.7125C16.7792 30.1875 15.8 28.2833 15.55 26H17.6C17.8333 27.7333 18.6042 29.1667 19.9125 30.3C21.2208 31.4333 22.75 32 24.5 32C26.45 32 28.1042 31.3208 29.4625 29.9625C30.8208 28.6042 31.5 26.95 31.5 25C31.5 23.05 30.8208 21.3958 29.4625 20.0375C28.1042 18.6792 26.45 18 24.5 18C23.35 18 22.275 18.2667 21.275 18.8C20.275 19.3333 19.4333 20.0667 18.75 21H21.5V23H15.5V17H17.5V19.35C18.35 18.2833 19.3875 17.4583 20.6125 16.875C21.8375 16.2917 23.1333 16 24.5 16C25.75 16 26.9208 16.2375 28.0125 16.7125C29.1042 17.1875 30.0542 17.8292 30.8625 18.6375C31.6708 19.4458 32.3125 20.3958 32.7875 21.4875C33.2625 22.5792 33.5 23.75 33.5 25C33.5 26.25 33.2625 27.4208 32.7875 28.5125C32.3125 29.6042 31.6708 30.5542 30.8625 31.3625C30.0542 32.1708 29.1042 32.8125 28.0125 33.2875C26.9208 33.7625 25.75 34 24.5 34ZM27.3 29.2L23.5 25.4V20H25.5V24.6L28.7 27.8L27.3 29.2Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "400px",
                }}
              >
                <Typography>Захиалгийн түүх</Typography>

              </Box>

            </Box>
            <Box
              sx={{
                padding: "8px 40px",
                display: `${edit ? "flex" : "none"}`,
                width: "100%",
                gap: "8px ",
                alignItems: "center",


              }}
            >
              <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="24" fill="white" stroke="#EEEFF2" />
                  <mask id="mask0_1_1326"  maskUnits="userSpaceOnUse" x="12" y="13" width="25" height="24">
                    <rect x="12.5" y="13" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1326)">
                    <path d="M17.5 34C16.95 34 16.4792 33.8042 16.0875 33.4125C15.6958 33.0208 15.5 32.55 15.5 32V18C15.5 17.45 15.6958 16.9792 16.0875 16.5875C16.4792 16.1958 16.95 16 17.5 16H24.5V18H17.5V32H24.5V34H17.5ZM28.5 30L27.125 28.55L29.675 26H21.5V24H29.675L27.125 21.45L28.5 20L33.5 25L28.5 30Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "400px",
                }}
              >
                <Typography>Гарах</Typography>

              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

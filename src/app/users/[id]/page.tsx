import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { RedoIcon} from 'lucide-react';
import Link from 'next/link';
import { userEndPoints } from '@/constants/variables';

const bull = (
    // Material UI
        <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        •
        </Box>
    );
    const getData=async (id:string)=>{
      // fetch id user
      const response=await fetch(userEndPoints.user(id))
      if(!response.ok){
        throw new Error("failed")
      }
      return response.json()
    }
    type Props={
      params:{id:string},
    }
const page = async ({params}:Props) => {
  const {id}=params
  const dataUser=await getData(id)
    return (
    <>  
      <div>
          <Card sx={{ maxWidth: 275 ,backgroundColor:"grey" }} variant="outlined" className='mx-auto pt-5 mt-24 '>
              {/* material ui card */}
              <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {dataUser?.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                  {dataUser?.address.street}{bull}{dataUser?.address.suite}{bull}{dataUser?.address.city}{bull}{dataUser?.address.zipcode}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{dataUser?.email}</Typography>
                  <Typography variant="body2">
                  {dataUser?.phone}
                  <br />
                  {`"${dataUser?.company.name}"`}
                  </Typography>
              </CardContent>
          </Card>
      </div>
    <Stack direction="row" spacing={2} className='ml-[80%] max-sm:mt-[30%] max-sm:ml-[70%] mt-[5%] '>
      {/* button for go to home page */}
        <Link href={"/"}>
      <Button variant="contained" endIcon={<RedoIcon/>} >
        Home
      </Button>
        </Link>
    </Stack>
    </>
    )
}

export default page

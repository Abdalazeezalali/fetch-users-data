import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { RedoIcon} from 'lucide-react';
import Link from 'next/link';
const bull = (
    // Material UI
        <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        •
        </Box>
    );
    const getData=async (id)=>{
      // fetch id user
      const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      if(!response.ok){
        throw new Error("failed")
      }
      return response.json()
    }
const page = async ({params}) => {
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
      <Button variant="contained" endIcon={<RedoIcon/>}>
        <Link href={"/"}>
        Home
        </Link>
      </Button>
    </Stack>
    </>
    )
}

export default page

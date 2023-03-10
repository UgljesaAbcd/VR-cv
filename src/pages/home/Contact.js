import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  Input,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  TextField
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = ({ sxStyles, width }) => {
  //Email form start
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_5a32n4i',
        'template_j9v9fgt',
        form.current,
        'k7IvxzUAmv8LxH_JK'
      )
      .then(
        result => {
          console.log(result.text);
          alert('message sent');
          e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };
  //Email form end

  return (
    <Card sx={sxStyles.mainCard2} id='contact' name='Contact'>
      <CardContent>
        <form ref={form} onSubmit={sendEmail}>
          <Grid sx={sxStyles.contactCard}>
            <Typography variant='h6' sx={sxStyles.contactMe}>
              Contact me:
            </Typography>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: width < 376 ? 'column' : 'row',
                gap: '10px',
                justifyContent: 'flex-end'
              }}
            >
              <Typography sx={sxStyles.mailLink}>
                radivojevicveljko@gmail.com
              </Typography>

              <div style={{ display: 'flex', gap: '5px' }}>
                <Link href='https://github.com/veljkoRad' target='_blank'>
                  <GitHubIcon sx={sxStyles.linkIcons} />
                </Link>
                <Link
                  href='https://www.instagram.com/rveljko92/'
                  target='_blank'
                >
                  <InstagramIcon sx={sxStyles.linkIcons} />
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: width < 376 ? 'column' : 'row',
                gap: '1.5rem'
              }}
            >
              <TextField
                type='text'
                fullWidth
                label='Your Name'
                name='to_name'
                color='myColors3'
                sx={{
                  input: { backgroundColor: '#173B6E', borderRadius: '4px' }
                }}
              />
              <TextField
                type='email'
                fullWidth
                label='Your Email'
                name='from_name'
                color='myColors3'
                sx={{
                  input: { backgroundColor: '#173B6E', borderRadius: '4px' }
                }}
              />
            </Grid>
            <TextField
              label='Message'
              name='message'
              multiline
              rows={width < 376 ? 2 : 4}
              color='myColors3'
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#173B6E',
                  borderRadius: '4px'
                }
              }}
            />

            <Button variant='outlined' color='myColors3'>
              <Input
                fullWidth
                type='submit'
                disableUnderline
                sx={{
                  color: 'myColors.third',
                  fontWeight: 'bold'
                }}
              />
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;

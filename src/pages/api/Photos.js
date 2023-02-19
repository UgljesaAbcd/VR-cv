import { Link } from 'react-router-dom';

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled
} from '@mui/material';

// moj-komentar - primeri styled component-i
const StyledCard = styled(Card)(() => ({
  border: '2px solid transparent',
  '&:hover': {
    border: 'solid 2px #F6BE3B'
  },
  backgroundColor: 'rgba(0,146,255,0.5)',
  '& .MuiTypography-root': {
    color: 'white'
  }
}));

const StyledCardContent = styled(CardContent)(() => ({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const Photos = ({ pic, width }) => {
  return (
    <>
      {pic.map(item => (
        <Grid
          item
          xs={8}
          md={3}
          key={item.id}
          sx={{ margin: width < 900 ? '0 auto 0 auto' : '' }}
        >
          <Link style={{ textDecoration: 'none' }} to={`/api/${item.id}`}>
            <StyledCard>
              <CardMedia
                sx={{}}
                component='img'
                height='250px'
                src={item.image}
              />
              <StyledCardContent>
                <Typography
                  align='center'
                  color='#0A192F'
                  sx={{ fontSize: '25px' }}
                  gutterBottom
                >
                  {item.mountain}
                </Typography>
                <Typography
                  align='center'
                  color='#F1F1E6'
                  sx={{ fontSize: '15px' }}
                >
                  {item.location}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Photos;

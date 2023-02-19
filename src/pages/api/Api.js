import React from 'react';
import { useState, useEffect } from 'react';

import { apiStyles } from '../../assets/apiStyles';
import axios from 'axios';
import Photos from './Photos';
import { Typography, Container, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Filters from './Filters';
import DefaultPhotos from './DefaultPhotos';
const Api = ({ width }) => {
  const [num, setNum] = useState(1);
  const [pic, setPic] = useState([]);
  const [hidePagination, setHidePagination] = useState(true);

  let api = `http://localhost:5000/photos?_page=${num}&_limit=8`;
  useEffect(() => {
    axios
      .get(api)
      .then(res => setPic(res.data))
      .catch(err =>
        window.alert('Start server for images using npr server or yarn server.')
      );
  }, [num]);

  return (
    <div style={apiStyles.main}>
      <Container sx={apiStyles.firstContainer}>
        <Typography
          sx={{ opacity: 0.9 }}
          color='myColors.secondary'
          align='center'
          variant={width < 380 ? 'h3' : 'h2'}
          gutterBottom
        >
          Mountains of Serbia
        </Typography>
        <Typography
          sx={{ opacity: 0.8 }}
          variant={width < 380 ? 'body1' : 'h6'}
          align='center'
          color='myColors.secondary'
        >
          This is presentation of my hobbie.All photos are created on my
          journeys, with my mobile camera.
        </Typography>
      </Container>
      <Grid container>
        {hidePagination ? (
          <Grid item xs={11} sx={apiStyles.filterComp}>
            <Pagination
              size={width < 380 ? 'small' : 'medium'}
              count={11}
              color='myColors2'
              siblingCount={0}
              boundaryCount={2}
              shape='rounded'
              onChange={(e, p) => setNum(p)}
              defaultPage={num}
            ></Pagination>
          </Grid>
        ) : (
          <Grid item xs={11} sx={apiStyles.filterComp}>
            <DefaultPhotos
              setHidePagination={setHidePagination}
              setPic={setPic}
              setNum={setNum}
              num={num}
              api={api}
            />
          </Grid>
        )}
        <Grid item xs={11} md={2} sx={apiStyles.filterComp}>
          <Filters
            setPic={setPic}
            setNum={setNum}
            pic={pic}
            num={num}
            setHidePagination={setHidePagination}
            width={width}
          />
        </Grid>
        <Grid
          item
          container
          xs={11}
          md={9}
          spacing={2}
          sx={{ margin: '0.7rem auto 0 auto' }}
        >
          <Photos apiStyles={apiStyles} pic={pic} width={width} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Api;

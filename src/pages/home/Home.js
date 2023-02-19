import Sidebar from './Sidebar';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import { Grid, Container } from '@mui/material';

const Home = ({ sidebarItems, sxStyles, width }) => {
  return (
    <div
      style={{
        backgroundColor: '#0A192F'
      }}
    >
      <Grid container spacing={0}>
        {width > 600 && (
          <Grid item xs={2}>
            <Sidebar sidebarItems={sidebarItems} sxStyles={sxStyles} />
          </Grid>
        )}
        <Grid item xs={12} sm={10}>
          <Container className='aboutMain' sx={sxStyles.aboutMain}>
            <About
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              width={width}
            />
            <Education
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              width={width}
            />
            <Experience
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              width={width}
            />
            <Contact
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              width={width}
            />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

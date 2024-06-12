import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Bullet() {
  return (
    <Typography
      sx={{
        display: 'inline',
      }}
    >
      &nbsp;&bull;&nbsp;
    </Typography>
  );
}

export default function Home() {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          textTransform: 'lowercase',
          letterSpacing: '-0.1rem',
          wordSpacing: '-0.5rem',
          fontSize: '3rem',
        }}
      >
        <Typography
          sx={{
            display: 'inline',
            fontSize: 'inherit',
            color: 'primary.main',
            letterSpacing: 'inherit',
          }}
        >
          Ryan
        </Typography>
        &nbsp;
        <Typography
          sx={{
            display: 'inline',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
          }}
        >
          Prescott
        </Typography>
      </Typography>
      <Link
        to="https://linktr.ee/ryanprescottmusic"
        style={{ width: 'fit-content' }}
      >
        listen to my music
      </Link>

      <br />
      {/* <Link
        to="https://www.linkedin.com/in/ryanpdev"
        style={{ width: 'fit-content' }}
      >
        linkedin
      </Link>      
       <Bullet />
       */}

      <Link
        to="https://www.twitter.com/coastalpeasant"
        style={{ width: 'fit-content' }}
      >
        twitter
      </Link>
      <Bullet />
      <Link
        to="https://www.github.com/ryanprescott"
        style={{ width: 'fit-content' }}
      >
        github
      </Link>
      <br />
      <Typography sx={{ marginTop: '2rem' }}>thanks for stopping by</Typography>
    </Box>
  );
}

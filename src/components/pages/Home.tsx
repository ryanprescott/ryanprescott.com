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
          wordSpacing: '-1rem',
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
      founder, owner & ceo of:
      <br />
      <Link to="https://schoodic.io/" style={{ width: 'fit-content' }}>
        schoodic solutions
      </Link>
      <br />
      <Link to="https://www.facebook.com/brokeceorecords/">
        broke ceo records
      </Link>
      <br /><br />
      <Link
        to="https://open.spotify.com/artist/1qYoSDz9q1e0PM20jL6fRu"
        style={{ width: 'fit-content' }}
      >
        spotify
      </Link>
      <Bullet />
      <Link
        to="https://ryanprescott.bandcamp.com/"
        style={{ width: 'fit-content' }}
      >
        bandcamp
      </Link>
      <Bullet />
      <Link
        to="https://www.youtube.com/c/ryanprescott"
        style={{ width: 'fit-content' }}
      >
        youtube
      </Link>
      <br /><br />
      personal&nbsp;
      <Link
        to="https://www.linkedin.com/in/ryanpdev"
        style={{ width: 'fit-content' }}
      >
        linkedin
      </Link>
      <Bullet />
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

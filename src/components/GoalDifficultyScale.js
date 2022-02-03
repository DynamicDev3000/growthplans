import React from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const labels = {
  0.5: 'This drink, I like it. Another!',
  1: 'Dude, you’re embarrassing me in front of the wizards.',
  1.5: 'I get emails from a raccoon, so nothing sounds crazy anymore.',
  2: 'Don`t worry, she`s got help',
  2.5: 'I can do this all day',
  3: 'We`re fighting an army of robots. And I have a bow and arrow.',
  3.5: 'Puny God',
  4: 'Dormammu, I’ve come to bargain.',
  4.5: 'I am Iron Man',
  5: 'Avengers, assemble!',
};

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 600,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
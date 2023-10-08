import * as React from 'react';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from '@mui/material';

export const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', boxShadow: 'unset' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: 'black' }}
          >
            <AlternateEmailOutlinedIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="center"
            alignContent="center"
            spacing={10}
            sx={{ flexGrow: 1 }}
          >
            <Typography variant="h6" sx={{ color: 'black' }}>
              <HomeIcon />
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              <SearchIcon />
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              <EditCalendarIcon />
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              <FavoriteBorderOutlinedIcon />
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              <PersonOutlinedIcon />
            </Typography>
          </Stack>
          <Button sx={{ color: 'black' }}>
            <DragHandleOutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

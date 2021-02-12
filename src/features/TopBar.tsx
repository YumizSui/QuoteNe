import React from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      'user-select': 'none',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    links: {
      marginRight: theme.spacing(2),
      '&:hover': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

interface TopBarProps {
  menuButtonAction?: () => void;
}
const TopBar: React.FC<TopBarProps> = ({ menuButtonAction }) => {
  const classes = useStyles();
  // const { selectedGroup } = useGroups();
  // const refresh = useRefreshment();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'normal',
            flexDirection: 'row',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            // onClick={menuButtonAction}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            // onClick={() => history.push('/app')}
          >
            QuoteNe
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // flexDirection: "row",
            // alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            className={classes.links}
            // onClick={() => history.push('/app')}
          >
            Mylist
          </Typography>
          <Typography
            variant="body1"
            className={classes.links}
            // onClick={() => history.push('/app')}
          >
            Active
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'normal',
            alignItems: 'center',
          }}
        >
          <Tooltip title="Show Account Setting">
            <IconButton
              color="inherit"
              // onClick={() => history.push('/app/myaccount')}
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

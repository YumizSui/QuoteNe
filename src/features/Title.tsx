import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
      borderBottomWidth: '3px',
      borderBottomStyle: 'dashed',
      marginBottom: '10px',
    },
  })
);

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.title}>
      {title}
    </Typography>
  );
};

export default Title;

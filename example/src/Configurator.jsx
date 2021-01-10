import React, { useState } from "react";
import { useStyles } from "./style";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { matchUpFormatCode } from "tods-matchup-format-code";
import MatchUpFormatForm from "./matchUpFormat/MatchUpFormatForm";

const Configurator = () => {
  const classes = useStyles();
  const [matchUpFormatParsed, setMatchUpFormatParsed] = useState(
    matchUpFormatCode.parse("SET3-S:6")
  );

  const handleOnChange = (value) => setMatchUpFormatParsed(value);

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <Typography variant="h5" component="h3">
          {matchUpFormatCode.stringify(matchUpFormatParsed)}
        </Typography>
        <MatchUpFormatForm
          matchUpFormatParsed={matchUpFormatParsed}
          onChange={handleOnChange}
        />
      </Paper>
    </>
  );
};

export default Configurator;

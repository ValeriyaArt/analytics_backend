import React from "react";
import {FormLabel, Typography, WithStyles} from "@mui/material";
import styles from "../../styles";
import withStyles from "@mui/material/styles/withStyles";

export interface ReadonlyProps extends WithStyles<typeof styles> {
    label: string,
    value: string,
}

class ReadonlyRow extends React.Component<ReadonlyProps> {

    render() {
        const {classes, label, value} = this.props;
        return (
            <div className={classes.datesReadonlyRow}>
                <FormLabel component="legend" className={classes.datesReadOnlyLabel}>
                    {label}
                </FormLabel>
                <Typography className={classes.datesReadOnlyValue}>
                    {value}
                </Typography>
            </div>
        )
    }

}

export default withStyles(styles)(ReadonlyRow);
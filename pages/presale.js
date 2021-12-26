import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';

import styles from '../styles/presale.module.css';

export default function preSale(props) {
    return (
        <Grid container justifyContent="center" className={styles.mainGrid}>
            <Grid item xs={5} className={styles.spacingGrid}></Grid>
            <Grid item xs={2} className={styles.headerGrid}>
                <Typography variant="h4" className={clsx(styles.header, props.useDarkTheme ? styles.darkHeader : styles.lightHeader)}>
                    Pre-Sale
                </Typography>
            </Grid>
            <Grid item xs={5} className={styles.spacingGrid}></Grid>
            <Grid item xs={8} className={styles.comingSoonText}>
                <Typography variant="h5">
                    Coming soon...
                </Typography>
            </Grid>
            <Grid item xs={8} className={styles.launchText}>
                <Typography variant="h6">
                    When Chain Estate officially launches in Q1 of 2022, check back
                    here to get in on the initial coin offering!
                </Typography>
            </Grid>
        </Grid>
    )
}
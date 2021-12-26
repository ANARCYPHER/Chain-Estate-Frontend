import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { IconContext } from "react-icons";
import { ImPlus, ImMinus } from 'react-icons/im';

import styles from '../styles/realEstateTypes.module.css';
import singleFamilyHomePic from '../public/SingleFamilyHome.png';

export default function singleFamilyHomes(props) {
    return (
        <Grid container justifyContent="center" alignItems="center" className={styles.mainGrid}>
            <Grid item xs={4} className={styles.spacingGrid}></Grid>
            <Grid item xs={4} className={styles.headerGrid}>
                <Typography variant="h4" className={clsx(styles.header, props.useDarkTheme ? styles.darkHeader : styles.lightHeader)}>
                    Single Family Home Overview
                </Typography>
            </Grid>
            <Grid item xs={4} className={styles.spacingGrid}></Grid>
            <Grid item xs={5} className={styles.picContainer}>
                <Image src={singleFamilyHomePic} layout="responsive" />
            </Grid>
            <Grid item xs={5} className={styles.prosConsContainer}>
                <Typography variant="h6" className={styles.prosConsHeader}>
                    Pros and Cons of Investing in Single Family Homes
                </Typography>
                <IconContext.Provider value={{ size:"1.4rem" }}>
                    <p className={styles.iconsAndText}>
                        <ImPlus color="green" className={styles.proConIcon} /> Generally appreciates at a higher rate
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImPlus color="green" className={styles.proConIcon} /> Not as expensive as multi family homes
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImMinus color="red" className={styles.proConIcon} /> Less cash flow than multi family homes/apartment complexes
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImMinus color="red" className={styles.proConIcon} /> Only one tenant, so painful if they leave
                    </p>
                </IconContext.Provider>
            </Grid>
            <Grid item xs={12} className={styles.cashFlowHeader}>
                <Typography variant="h5">
                    Realistic Cash Flow Example
                </Typography>
            </Grid>
            <Grid item xs={8} className={styles.cashFlowText}>
                Say for example Chain Estate buys the single family home for $500,000 and the renters of the home pay $2000 a month. 
                The insurance is $125 a month and the property taxes are $275 a month. Renters will be paying for utilities, so that leaves a total cash flow
                of $2000 - $125 - $275 or $1600. So if there are 100 NFTs for the property, each NFT will yield a profit
                of $16. Someone who owns 10 of the 100 NFTs will receive $160 a month from the property and will also
                own 10% of the house with an initial value of $50,000.
            </Grid>
        </Grid>
    )
}
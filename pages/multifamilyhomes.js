import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { IconContext } from "react-icons";
import { ImPlus, ImMinus } from 'react-icons/im';

import styles from '../styles/realEstateTypes.module.css';
import multiFamilyHomePic from '../public/MultiFamilyHome.png';

export default function multiFamilyHomes(props) {
    return (
        <Grid container justifyContent="center" alignItems="center" className={styles.mainGrid}>
            <Grid item xs={4} className={styles.spacingGrid}></Grid>
            <Grid item xs={4} className={styles.headerGrid}>
                <Typography variant="h4" className={clsx(styles.header, props.useDarkTheme ? styles.darkHeader : styles.lightHeader)}>
                    Multi Family Home Overview
                </Typography>
            </Grid>
            <Grid item xs={4} className={styles.spacingGrid}></Grid>
            <Grid item xs={5} className={styles.picContainer}>
                <Image src={multiFamilyHomePic} layout="responsive" />
            </Grid>
            <Grid item xs={5} className={styles.prosConsContainer}>
                <Typography variant="h6" className={styles.prosConsHeader}>
                    Pros and Cons of Investing in Multi Family Homes
                </Typography>
                <IconContext.Provider value={{ size:"1.4rem" }}>
                    <p className={styles.iconsAndText}>
                        <ImPlus color="green" className={styles.proConIcon} /> Higher cash flow to property cost ratio
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImPlus color="green" className={styles.proConIcon} /> Less painful when one tenant leaves
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImMinus color="red" className={styles.proConIcon} /> Appreciates slower than single family homes
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImMinus color="red" className={styles.proConIcon} /> More expensive than single family homes
                    </p>
                </IconContext.Provider>
            </Grid>
            <Grid item xs={12} className={styles.cashFlowHeader}>
                <Typography variant="h5">
                    Realistic Cash Flow Example
                </Typography>
            </Grid>
            <Grid item xs={8} className={styles.cashFlowText}>
                Say for example Chain Estate buys the multi family home for $750,000 and there are four renters who each
                pay $800. In that case, the income from the property is $3200. The insurance is $150 a month and the
                property taxes are $350 a month. Renters will be paying for utilities, so that leaves a total cash flow
                of $3200 - $150 - $350 or $2700. So if there are 100 NFTs for the property, each NFT will yield a profit
                of $27. Someone who owns 10 of the 100 NFTs will receive $270 a month from the property and will also
                own 10% of the house with an initial value of $75,000.
            </Grid>
        </Grid>
    )
}
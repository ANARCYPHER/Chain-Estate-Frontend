import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { IconContext } from "react-icons";
import { ImPlus, ImMinus } from 'react-icons/im';

import styles from '../styles/realEstateTypes.module.css';
import apartmentComplexPic from '../public/Apartment.png';

export default function apartmentComplexes(props) {
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
                <Image src={apartmentComplexPic} layout="responsive" />
            </Grid>
            <Grid item xs={5} className={styles.prosConsContainer}>
                <Typography variant="h6" className={styles.prosConsHeader}>
                    Pros and Cons of Investing in Apartment Complexes
                </Typography>
                <IconContext.Provider value={{ size:"1.4rem" }}>
                    <p className={styles.iconsAndText}>
                        <ImPlus color="green" className={styles.proConIcon} /> A lot of value in one location
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImPlus color="green" className={styles.proConIcon} /> Way less painful if one tenant leaves
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImMinus color="red" className={styles.proConIcon} /> Extremely expensive 
                    </p>
                    <p className={styles.iconsAndText}>
                        <ImMinus color="red" className={styles.proConIcon} /> Requires more staffing than just the management team
                    </p>
                </IconContext.Provider>
            </Grid>
            <Grid item xs={12} className={styles.cashFlowHeader}>
                <Typography variant="h5">
                    Realistic Cash Flow Example
                </Typography>
            </Grid>
            <Grid item xs={8} className={styles.cashFlowText}>
                Say for example Chain Estate buys an apartment complex for $5,000,000 and there are 50 renters who each
                pay $750. In that case, the income from the property is $37,500 per month. The insurance is $2500 a month, the
                property taxes are $4000 a month, and staffing is $5000 a month. Renters will be paying for utilities, so that leaves a total cash flow
                of $37,500 - $2500 - $4000 - $5000 or $26,000. So if there are 100 NFTs for the property, each NFT will yield a profit
                of $260. Someone who owns 10 of the 100 NFTs will receive $2,600 a month from the property and will also
                own 10% of the house with an initial value of $500,000.
            </Grid>
        </Grid>
    )
}
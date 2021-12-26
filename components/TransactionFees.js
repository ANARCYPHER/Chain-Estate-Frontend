import { Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HouseIcon from '@mui/icons-material/House';
import CabinIcon from '@mui/icons-material/Cabin';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';

import styles from '../styles/Home.module.css';

export default function TransactionFees(props) {
    gsap.registerPlugin(ScrollTrigger);

    const feeHeaderRef = useRef();
    const feeBox1Ref = useRef();
    const feeBox2Ref = useRef();
    const feeBox3Ref = useRef();

      // Loads animations for elements of the page.
  useEffect(() => {    
    gsap.from(feeHeaderRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#feeHeader", start: "bottom bottom" } });
    gsap.from(feeBox1Ref.current, { x: function(index, target, targets) {
      return target.getBoundingClientRect().right;
    }, opacity: 0, duration: 1, scrollTrigger: { trigger: "#feeBox1", start: "bottom bottom"} });
    gsap.from(feeBox2Ref.current, { x: function(index, target, targets) {
      return target.getBoundingClientRect().right;
    }, opacity: 0, duration: 1, scrollTrigger: { trigger: "#feeBox2", start: "bottom bottom"} });
    gsap.from(feeBox3Ref.current, { x: function(index, target, targets) {
      return target.getBoundingClientRect().right;
    }, opacity: 0, duration: 1, scrollTrigger: { trigger: "#feeBox3", start: "bottom bottom"} });
  }, [])

    return (
      <Grid container id="tokenomics" justifyContent="center" alignItems="center" spacing={4} className={styles.transactionFeesGrid}>
        <Grid item xs={12}>
        <Typography variant="h4" id="feeHeader" ref={feeHeaderRef} className={styles.feeHeader}>
            The Chain Estate Transaction Fees are Split 3 Ways
        </Typography>
        </Grid>
        <Grid item xs={3} className={styles.customCardGridFee}>
        <Card id="feeBox1" ref={feeBox1Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
            <CardContent>
                <Grid container justifyContent="center" alignItems="center" className={styles.feeContentGrid}>
                <Grid item xs={3}>
                    <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                    <HomeWorkIcon sx={{ width: 40, height: 40 }} />
                    </Avatar>
                </Grid>
                <Grid item xs={3}>
                    <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                    <HouseIcon sx={{ width: 40, height: 40 }} />
                    </Avatar>
                </Grid>
                <Grid item xs={3}>
                    <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                    <CabinIcon sx={{ width: 40, height: 40 }} />
                    </Avatar>
                </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                3%
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                Is sent to the pool used to buy real estate. Properties will be purchased one at a time
                each time enough tokens are pooled.
                </Typography>
            </CardContent>
            </div>
        </Card>
        </Grid>
        <Grid item xs={3} className={styles.customCardGridFee}>
        <Card id="feeBox2" ref={feeBox2Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
            <CardContent>
                <Grid container justifyContent="center" alignItems="center" className={styles.feeContentGrid}>
                <Grid item xs={3}>
                    <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                    <PersonIcon sx={{ width: 40, height: 40 }} />
                    </Avatar>
                </Grid>
                <Grid item xs={3}>
                    <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                    <PersonIcon sx={{ width: 40, height: 40 }} />
                    </Avatar>
                </Grid>
                <Grid item xs={3}>
                    <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                    <PersonIcon sx={{ width: 40, height: 40 }} />
                    </Avatar>
                </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                1%
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                Is sent to the developer wallet. The developers of Chain Estate make no profits from the
                real estate itself, so this is how the project supports them.
                </Typography>
            </CardContent>
            </div>
        </Card>
        </Grid>
        <Grid item xs={3} className={styles.customCardGridFee}>
            <Card id="feeBox3" ref={feeBox3Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
                <div>
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" className={styles.feeContentGrid}>
                    <Grid item xs={3}>
                        <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                        <FacebookIcon sx={{ width: 40, height: 40 }} />
                        </Avatar>
                    </Grid>
                    <Grid item xs={3}>
                        <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                        <YouTubeIcon sx={{ width: 40, height: 40 }} />
                        </Avatar>
                    </Grid>
                    <Grid item xs={3}>
                        <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                        <GoogleIcon sx={{ width: 40, height: 40 }} />
                        </Avatar>
                    </Grid>
                    </Grid>
                    <Typography variant="h5" component="div">
                    1%
                    </Typography>
                    <Typography variant="p" component="div" className="mt-4">
                    Is used for marketing - purchasing advertising on Facebook, YouTube, Google, etc.
                    The Chain Estate developer team is committed to pushing for the growth of the project
                    on all platforms imaginable. 
                    </Typography>
                </CardContent>
                </div>
            </Card>
        </Grid>
      </Grid>
    )
}
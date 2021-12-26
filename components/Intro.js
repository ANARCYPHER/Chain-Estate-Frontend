import Image from 'next/image';
import { Grid, Button, Typography, Card, CardContent, CardActions, Avatar } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

import styles from '../styles/Home.module.css';
import housePic from '../public/ChainEstateLogoCropped.png';

export default function Intro(props) {
  gsap.registerPlugin(ScrollTrigger);
  
  const [topImageLoaded, setTopImageLoaded] = useState(false);

  const housePicRef = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    setTimeout(function(){
      setTopImageLoaded(true);
    }, 500);

    gsap.from(housePicRef.current, { opacity: 0, duration: 2 });
  }, [])
  
  return (
    <Grid container justify="center" alignItems="center" className={styles.introGrid}>
        <Grid item xs={6} className={styles.introText}>
        <Typography variant="h2" className={clsx(props.useDarkTheme ? styles.introTextTypographyDark : styles.introTextTypographyLight, "mb-4", styles.headerText)}>
            <b className={props.useDarkTheme ? styles.boldTextDark : styles.boldTextLight}>Invest</b> in Real Estate on the <b className={props.useDarkTheme ? styles.boldTextDark : styles.boldTextLight}>Blockchain</b>
        </Typography>
        <Typography variant="p">
            3% of all Chain Estate transaction fees are sent to a token pool
            used to purchase real estate. 100% of the cash flow from these properties are then
            distributed to NFT holders of the real estate who are also partial owners of the properties.
        </Typography>
        </Grid>
        <Grid item xs={6} ref={housePicRef} className={styles.housePicContainer}>
        <Image src={housePic} className={topImageLoaded ? (props.useDarkTheme ? styles.housePicDark : styles.housePicLight) : ""} layout="responsive" />
        </Grid>
    </Grid>
  )
}
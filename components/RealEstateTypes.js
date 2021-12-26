import Image from 'next/image';
import { Grid, Button, Typography } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import styles from '../styles/Home.module.css';
import multiFamilyHomePic from '../public/MultiFamilyHome.png';
import singleFamilyHomePic from '../public/SingleFamilyHome.png';
import apartmentPic from '../public/Apartment.png';

export default function RealEstateTypes(props) {
    gsap.registerPlugin(ScrollTrigger);
  
    const realEstateTypesHeaderRef = useRef();
    const realEstateTypesRef1 = useRef();
    const realEstateTypesRef2 = useRef();
    const realEstateTypesRef3 = useRef();

    // Loads animations for elements of the page.
    useEffect(() => {
        gsap.from(realEstateTypesHeaderRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#realEstateTypesHeader", start: "bottom bottom" } });
        gsap.from(realEstateTypesRef1.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#realEstateTypes1", start: "bottom bottom" } });
        gsap.from(realEstateTypesRef2.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#realEstateTypes2", start: "bottom bottom" } });
        gsap.from(realEstateTypesRef3.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#realEstateTypes3", start: "bottom bottom" } });
    }, [])

    return (
        <Grid container id="realEstateTypesGrid" justifyContent="center" alignItems="center" spacing={4} className={styles.realEstateTypesGrid}>
          <Grid item xs={12} className="realEstateTypesHeaderWrapper">
            <Typography variant="h4" id="realEstateTypesHeader" ref={realEstateTypesHeaderRef} className={styles.realEstateTypesHeader}>
              Chain Estate Will Invest in 3 Types of Real Estate
            </Typography>
          </Grid>
          <Grid item xs={3} className={styles.realEstateTypeGrid} id="realEstateTypes1" ref={realEstateTypesRef1}>
            <Image src={multiFamilyHomePic} layout="responsive" />
            <Button href="/multifamilyhomes" variant="contained" color="secondary" className={clsx(styles.realEstateBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
              Multi Family Homes
            </Button>
          </Grid>
          <Grid item xs={3} className={styles.realEstateTypeGrid} id="realEstateTypes2" ref={realEstateTypesRef2}>
            <Image src={singleFamilyHomePic} layout="responsive" />
            <Button href="/singlefamilyhomes" variant="contained" color="secondary" className={clsx(styles.realEstateBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
              Single Family Homes
              </Button>
          </Grid>
          <Grid item xs={3} className={styles.realEstateTypeGrid} id="realEstateTypes3" ref={realEstateTypesRef3}>
            <Image src={apartmentPic} layout="responsive" />
            <Button href="/apartmentcomplexes" variant="contained" color="secondary" className={clsx(styles.realEstateBtn, props.useDarkTheme ? styles.realEstateBtnDark : styles.realEstateBtnLight)}>
              Apartment Complexes
            </Button>
          </Grid>
        </Grid>        
    )
}
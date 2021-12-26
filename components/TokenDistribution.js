import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';
import PieChartDarkTheme from '../public/PieChartDarkTheme.png';
import PieChartLightTheme from '../public/PieChartLightTheme.png';

export default function TokenDistribution(props) {
    gsap.registerPlugin(ScrollTrigger);

    const tokenDistHeaderRef = useRef();
    const tokenDistPieChartRef = useRef();

      // Loads animations for elements of the page.
  useEffect(() => {    
    gsap.from(tokenDistHeaderRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#tokenDistHeader", start: "bottom bottom" } });
    gsap.from(tokenDistPieChartRef.current, { scale: 0, duration: 1, scrollTrigger: { trigger: "#tokenDistPieChart", start: "bottom bottom" } });
  }, [])

    return (
        <Grid container justifyContent="center" alignItems="center" className={styles.tokenDistGrid}>
          <Grid item xs={12}>
            <Typography id="tokenDistHeader" ref={tokenDistHeaderRef} variant="h4" className={styles.tokenDistHeader}>
              Initial Token Distribution
            </Typography>
          </Grid>
          <Grid id="tokenDistPieChart" ref={tokenDistPieChartRef} item xs={8} className={styles.tokenDistPieGrid}>
            <Image src={props.useDarkTheme ? PieChartDarkTheme : PieChartLightTheme} layout="responsive" />
          </Grid>
        </Grid>        
    )
}
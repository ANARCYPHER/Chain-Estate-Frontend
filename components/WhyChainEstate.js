import { Grid, Typography } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

export default function WhyChainEstate(props) {
  gsap.registerPlugin(ScrollTrigger);

  const whyChainEstateHeaderRef = useRef();
  const whyChainEstateRef1 = useRef();
  const whyChainEstateRef2 = useRef();
  const whyChainEstateRef3 = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.from(whyChainEstateHeaderRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#whyChainEstateHeader", start: "bottom bottom" } });
    // gsap.from(whyChainEstateRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#whyChainEstate", start: "bottom bottom" } });
    gsap.from(whyChainEstateRef1.current, { x: function(index, target, targets) {
      return target.getBoundingClientRect().right;
    }, opacity: 0, duration: 1, scrollTrigger: { trigger: "#whyChainEstateHeader", start: "bottom bottom"} });
    gsap.from(whyChainEstateRef2.current, { x: function(index, target, targets) {
      return target.getBoundingClientRect().right;
    }, opacity: 0, duration: 1.25, scrollTrigger: { trigger: "#whyChainEstateHeader", start: "bottom bottom"} });
    gsap.from(whyChainEstateRef3.current, { x: function(index, target, targets) {
      return target.getBoundingClientRect().right;
    }, opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#whyChainEstateHeader", start: "bottom bottom"} });
  }, [])

    return (
        <Grid container justifyContent="center" alignItems="center" className={styles.whyChainEstateGrid}>
          <Grid item xs={12}>
            <Typography id="whyChainEstateHeader" ref={whyChainEstateHeaderRef} variant="h4" className={styles.whyChainEstateHeader}>
              Why Invest in Chain Estate?
            </Typography>
          </Grid>
          <Grid id="whyChainEstate" item xs={8} className={styles.whyChainEstateTextGrid}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} ref={whyChainEstateRef1}>
                <Typography variant="p">
                Many projects or companies fade away over time, so why is Chain Estate different?  The answer is simple. The project is directly tied to the 
                longest lasting market in the world - Real Estate. Over time, property values have consistently gone 
                up and rarely see large price fluctuations. 
                </Typography>
              </Grid>
              <Grid item xs={12} ref={whyChainEstateRef2} className={styles.whyChainEstateText}>
                <Typography variant="p">
                People always will need a place to live, and because it is getting harder 
                and harder to buy a home, there will always be people looking to rent.  Along with that, fears of hyperinflation devaluing 
                currencies is looming, causing people to look towards investments that protect against inflation.  Real estate is the perfect option for that.
                </Typography>
              </Grid>
              <Grid item xs={12} ref={whyChainEstateRef3} className={styles.whyChainEstateText}>
                <Typography variant="p">
                Because it is physical land and structure, it does not get devalued like currency can.  Over the last 100 years, real estate 
                appreciation has outpaced inflation by about 1% per year.  When inflation increased from the 2% average per year, so did real estate.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>         
    )
}
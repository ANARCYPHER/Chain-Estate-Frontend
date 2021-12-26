import { Grid, Button, Typography, Card, CardContent, CardActions, Avatar } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import styles from '../styles/Home.module.css';

export default function Process(props) {
  gsap.registerPlugin(ScrollTrigger);

  const processHeaderRef = useRef();
  const pBox1Ref = useRef();
  const pBox2Ref = useRef();
  const pBox3Ref = useRef();
  const pBox4Ref = useRef();
  const pBox5Ref = useRef();
  const pBox6Ref = useRef();
  const pArrow1Ref = useRef();
  const pArrow2Ref = useRef();
  const pArrow3Ref = useRef();
  const pArrow4Ref = useRef();

  const learnMoreBtnRef = useRef();
  const getStartedBtnRef = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.from(processHeaderRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processHeader", start: "bottom bottom" } });
    gsap.from(pBox1Ref.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processBox1", start: "bottom bottom" } });
    gsap.from(pBox2Ref.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processBox2", start: "bottom bottom" } });
    gsap.from(pBox3Ref.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processBox3", start: "bottom bottom" } });
    gsap.from(pBox4Ref.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processBox4", start: "bottom bottom" } });
    gsap.from(pBox5Ref.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processBox5", start: "bottom bottom" } });
    gsap.from(pBox6Ref.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#processBox6", start: "bottom bottom" } });
    gsap.from(pArrow1Ref.current, { opacity: 0, duration: 1.5, delay: 0.2, scrollTrigger: { trigger: "#processBox1", start: "bottom bottom" } });
    gsap.from(pArrow2Ref.current, { opacity: 0, duration: 1.5, delay: 0.2, scrollTrigger: { trigger: "#processBox1", start: "bottom bottom" } });
    gsap.from(pArrow3Ref.current, { opacity: 0, duration: 1.5, delay: 0.2, scrollTrigger: { trigger: "#processBox4", start: "bottom bottom" } });
    gsap.from(pArrow4Ref.current, { opacity: 0, duration: 1.5, delay: 0.2, scrollTrigger: { trigger: "#processBox4", start: "bottom bottom" } });

    gsap.from(learnMoreBtnRef.current, { opacity: 0, y: 200, duration: 1, scrollTrigger: {trigger: "#learnMoreBtn", start: "top bottom" } });
    gsap.from(getStartedBtnRef.current, { opacity: 0, y: 200, duration: 1, scrollTrigger: { trigger: "#getStartedBtn", start: "top bottom" } });
  }, [])

    return (
      <Grid container id="about" justifyContent="center" alignItems="center" spacing={4} className={styles.processGrid}>
        <Grid item xs={12} className={styles.processHeader}>
          <Typography variant="h4" id="processHeader" ref={processHeaderRef}>
            How Do I Become a Part of Chain Estate?
          </Typography>
        </Grid>
        <Grid item xs={3} className={styles.customCardGrid}>
          <Card id="processBox1" ref={pBox1Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
              <CardContent>
                <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                  <AccountBalanceWalletIcon sx={{ width: 40, height: 40 }} />
                </Avatar>
                <Typography variant="h5" component="div">
                  Download MetaMask
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                  MetaMask is the #1 Crytocurrency Wallet that you can download
                  as a Google Chrome extension.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://metamask.io/download.html" target="_blank" size="small" variant="contained" color="secondary" 
                  className={clsx(styles.cardBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
                  Download Here
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={1} className={styles.processArrow}>
          <ArrowForwardIcon id="processArrow1" ref={pArrow1Ref} />
        </Grid>
        <Grid item xs={3} className={styles.customCardGrid}>
          <Card id="processBox2" ref={pBox2Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
              <CardContent>
                <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                  <AttachMoneyIcon sx={{ width: 40, height: 40 }} />
                </Avatar>
                <Typography variant="h5" component="div">
                  Purchase BNB
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                  BNB is the official coin of the Binance Smart Chain, and you can
                  buy it many places, including binance.us and CoinBase.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://www.binance.us/en/buy-sell-crypto/BNB" target="_blank" size="small" variant="contained" color="secondary"
                  className={clsx(styles.cardBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
                  Purchase on Binance.us
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={1} className={styles.processArrow}>
          <ArrowForwardIcon id="processArrow2" ref={pArrow2Ref} />
        </Grid>
        <Grid item xs={3} className={styles.customCardGrid}>
          <Card id="processBox3" ref={pBox3Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
              <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                  <SwapHorizIcon sx={{ width: 40, height: 40 }} />
              </Avatar>
              <CardContent>
                <Typography variant="h5" component="div">
                  Swap BNB for CHES
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                  Go to Pancake Swap, an exchange on the Binance Smart Chain, to
                  use your BNB to purchase the Chain Estate Token (CHES)
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://pancakeswap.finance/" target="_blank" size="small" variant="contained" color="secondary"
                  className={clsx(styles.cardBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
                  Visit PancakeSwap
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3} className={styles.customCardGrid}>
          <Card id="processBox4" ref={pBox4Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
              <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                  <ShowChartIcon sx={{ width: 40, height: 40 }} />
              </Avatar>
              <CardContent>
                <Typography variant="h5" component="div">
                  Hold Tokens for Air Drops
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                  Chain Estate will have monthly air drops starting mid 2022 that reward
                  you based on the number of tokens you have and how long you've had them for.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://chain-estate.gitbook.io/chain-estate-whitepaper/chain-estate/what-is-chain-estate/air-drops" target="_blank" size="small" variant="contained" color="secondary" 
                  className={clsx(styles.cardBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
                  View Air Drops page on Whitepaper
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={1} className={styles.processArrow}>
          <ArrowBackIcon id="processArrow3" ref={pArrow3Ref} />
        </Grid>
        <Grid item xs={3} className={styles.customCardGrid}>
          <Card id="processBox5" ref={pBox5Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
              <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                  <HomeIcon sx={{ width: 40, height: 40 }} />
              </Avatar>
              <CardContent>
                <Typography variant="h5" component="div">
                  Purchase Real Estate NFTs
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                  Once the real estate token pool grows enough, we will begin purchasing
                  real estate and releasing NFTs for each property.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://chain-estate.gitbook.io/chain-estate-whitepaper/chain-estate/nfts" target="_blank" size="small" variant="contained" color="secondary" 
                  className={clsx(styles.cardBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
                  View NFT Page on Whitepaper
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={1} className={styles.processArrow}>
          <ArrowBackIcon id="processArrow4" ref={pArrow4Ref} />
        </Grid>
        <Grid item xs={3} className={styles.customCardGrid}>
          <Card id="processBox6" ref={pBox6Ref} className={clsx(styles.customCard, props.useDarkTheme ? styles.customCardDark : styles.customCardLight)}>
            <div>
              <Avatar className={props.useDarkTheme ? styles.avatarDarkTheme : styles.avatarLightTheme} sx={{ width: 70, height: 70 }}>
                  <MonetizationOnIcon sx={{ width: 40, height: 40 }} />
              </Avatar>
              <CardContent>
                <Typography variant="h5" component="div">
                  Profit
                </Typography>
                <Typography variant="p" component="div" className="mt-4">
                  100% of cash flow from the properties are distributed to NFT holders. You can also
                  profit from simply investing in CHES as a real estate backed token.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://chain-estate.gitbook.io/chain-estate-whitepaper/chain-estate/real-estate" target="_blank" size="small" variant="contained" color="secondary"
                  className={clsx(styles.cardBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
                  Visit Real Estate Page on Whitepaper
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={2} className={clsx(styles.largeBtnGrid, "mt-4")}>
          <Button href="https://chain-estate.gitbook.io/chain-estate-whitepaper/" target="_blank" id="learnMoreBtn" ref={learnMoreBtnRef} variant="contained" 
            className={clsx(styles.largeBtn, props.useDarkTheme ? styles.btnLight : styles.btnDark)}>
            Learn More
          </Button>
        </Grid>
        <Grid item xs={2} className={clsx(styles.largeBtnGrid, "mt-4")}>
          <Button href="/presale" target="_blank" id="getStartedBtn" ref={getStartedBtnRef} variant="contained" color="secondary" 
            className={clsx(styles.largeBtn, props.useDarkTheme ? styles.btnDark : styles.btnLight)}>
            Get Started
          </Button>
        </Grid>
      </Grid>
    )
}
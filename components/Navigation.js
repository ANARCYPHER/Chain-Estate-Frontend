import { Grid, Typography, Switch } from '@mui/material';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from "gsap";
import { IconContext } from "react-icons";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import styles from '../styles/Navigation.module.css';

import houseIconDarkTheme from '../public/houseIconDarkTheme.png';

export default function Navigation({useDarkTheme, setUseDarkTheme}) {
    gsap.registerPlugin(ScrollToPlugin);

    const sections = ["about", "tokenomics", "roadmap"];

    const moveToSection = (section) => {
        if (window.location.pathname == "/") {
            gsap.to(window, {duration: 0.1, scrollTo:`#${section}`});
        }
        else {
            window.location.href = `${window.location.origin}/?section=${section}`;
        }
    }

    useEffect(() => {
        const currUrl = window.location.href;
        const currUrlSplit = currUrl.split("?section=");
        if (currUrlSplit.length > 1) {
            const urlSection = currUrlSplit[1];
            if (sections.includes(urlSection)) {
                gsap.to(window, {duration: 0.1, scrollTo:`#${urlSection}`});
            }
        }
    }, []);

    return (
        <Grid container justifyContent="center" className={useDarkTheme ? styles.navGridDark : styles.navGridLight}>
            <Navbar expand="lg" bg={useDarkTheme ? "custom-dark" : "custom-light"} variant={useDarkTheme ? "dark" : "light"} className={clsx("m-auto", styles.navBar)}>
                <Navbar.Text className={styles.navBarBrand}>
                    <Container>
                        <Navbar.Brand href="/">
                            {/*<img alt="" src={useDarkTheme ? "/houseIconDarkTheme.png" : "/houseIconLightTheme.png"} width="35" height="35" className="d-inline-block align-top" />*/}
                            <Typography variant="p" className={styles.navBrandText}>
                                Chain Estate
                            </Typography>
                        </Navbar.Brand>
                    </Container>
                </Navbar.Text>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navBarItems}>
                    <Nav>
                        <Nav.Link href="/" className={styles.navPadding}>
                            <Typography variant="h6" className={clsx(useDarkTheme ? styles.navbarDarkCustom : styles.navbarLightCustom, styles.navText)}>
                                Home
                            </Typography>
                        </Nav.Link>
                        <Nav.Link className={styles.navPadding} onClick={() => moveToSection("about")}>
                            <Typography variant="h6" className={clsx(useDarkTheme ? styles.navbarDarkCustom : styles.navbarLightCustom, styles.navText)}>
                                About
                            </Typography>
                        </Nav.Link>
                        <Nav.Link className={styles.navPadding} onClick={() => moveToSection("tokenomics")}>
                            <Typography variant="h6" className={clsx(useDarkTheme ? styles.navbarDarkCustom : styles.navbarLightCustom, styles.navText)}>
                                Tokenomics
                            </Typography>
                        </Nav.Link>
                        <Nav.Link className={styles.navPadding} onClick={() => moveToSection("roadmap")}>
                            <Typography variant="h6" className={clsx(useDarkTheme ? styles.navbarDarkCustom : styles.navbarLightCustom, styles.navText)}>
                                Roadmap
                            </Typography>
                        </Nav.Link>
                        <Nav.Link href="https://chain-estate.gitbook.io/chain-estate-whitepaper/" className={styles.navPadding}>
                            <Typography variant="h6" className={clsx(useDarkTheme ? styles.navbarDarkCustom : styles.navbarLightCustom, styles.navText)}>
                                White Paper
                            </Typography>
                        </Nav.Link>
                        <Nav.Link href="/presale" className={styles.navPadding}>
                            <Typography variant="h6" className={clsx(useDarkTheme ? styles.navbarDarkCustom : styles.navbarLightCustom, styles.navText)}>
                                Pre-Sale
                            </Typography>
                        </Nav.Link>
                        <div className={styles.changeThemeDiv}>
                            {useDarkTheme ? <DarkModeIcon className={styles.darkModeIcon} fontSize="large" /> : <LightModeIcon className={styles.lightModeIcon} fontSize="large" />}
                            <Switch checked={useDarkTheme} color="primary" onChange={e => setUseDarkTheme(e.target.checked)} />
                        </div>
                        <IconContext.Provider value={{ size:"1.7rem", color: useDarkTheme ? "#0a0af0" : "#70c1ff" }} className={styles.socialIcons}>
                            <div className={styles.socialIcons}>
                                <div className={styles.socialIcon}>
                                    <a href="https://discord.gg/ahHu45hEvv" target="_blank">
                                        <FaDiscord />
                                    </a>
                                </div>
                                <div className={clsx(styles.socialIcon, styles.socialIconLast)}>
                                    <a href="https://twitter.com/ChainEstate1" target="_blank">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Grid>
    )
}
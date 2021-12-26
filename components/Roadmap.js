import { Grid, Typography } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from '../styles/Home.module.css';

export default function Roadmap(props) {
    gsap.registerPlugin(ScrollTrigger);

    const roadmapHeaderRef = useRef();
  
    // Loads animations for elements of the page.
    useEffect(() => {
      gsap.from(roadmapHeaderRef.current, { opacity: 0, duration: 1.5, scrollTrigger: { trigger: "#roadmapHeader", start: "bottom bottom" } });
    }, [])

    return (
        <Grid container id="roadmap" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" id="roadmapHeader" ref={roadmapHeaderRef} className={styles.roadmapHeader}>
              Chain Estate Roadmap
            </Typography>
          </Grid>

          <VerticalTimeline className={clsx(styles.verticalTimelineDiv, props.useDarkTheme ? "timeline-dark-theme" : "timeline-light-theme")}>
            {/* ~~~~~~~~~~~~~~~~~~~ Early Q1 2022 ~~~~~~~~~~~~~~~~~~ */}
            <VerticalTimelineElement
              className="vertical-timeline-element-right"
              contentStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${props.useDarkTheme ? '#0a0af0' : '#70c1ff'}` }}
              date="Early Q1 2022"
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            >
              <Typography variant="p">
                <ArrowForwardIcon /> Release of the Chain Estate Token Smart Contract
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Developer Liquidity Lock Up
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> WhitePaper Release
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Website/Twitter/Discord Creation
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Initial Marketing Campaigns
              </Typography>
              <br/>
              <Typography variant="p" className={styles.lastTimelineElement}>
                <ArrowForwardIcon /> Get listed on PancakeSwap
              </Typography>
            </VerticalTimelineElement>

            {/* ~~~~~~~~~~~~~~~~~~~ Late Q1 2022 ~~~~~~~~~~~~~~~~~~ */}
            <VerticalTimelineElement
              className="vertical-timeline-element-left"
              contentStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${props.useDarkTheme ? '#0a0af0' : '#70c1ff'}` }}
              date="Early Q1 2022"
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            >
              <Typography variant="p">
                <ArrowForwardIcon /> Pre-Sale
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Get listed on CoinGecko and CoinMarketCap
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Reach 2,500 Holders by End of the Quarter
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Staking Rewards Released
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Continue Marketing Campaigns
              </Typography>
              <br/>
              <Typography variant="p" className={styles.lastTimelineElement}>
                <ArrowForwardIcon /> Get Chain Estate Audited
              </Typography>
            </VerticalTimelineElement>

            {/* ~~~~~~~~~~~~~~~~~~~ Early Q2 2022 ~~~~~~~~~~~~~~~~~~ */}
            <VerticalTimelineElement
              className="vertical-timeline-element-right"
              contentStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${props.useDarkTheme ? '#0a0af0' : '#70c1ff'}` }}
              date="Early Q1 2022"
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            >
              <Typography variant="p">
                <ArrowForwardIcon /> Purchase First Property
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> NFT Marketplace Released
              </Typography>
              <br/>
              <Typography variant="p" className={styles.lastTimelineElement}>
                <ArrowForwardIcon /> Continue/Expand Marketing Campaigns
              </Typography>
            </VerticalTimelineElement>

            {/* ~~~~~~~~~~~~~~~~~~~ Late Q2 2022 ~~~~~~~~~~~~~~~~~~ */}
            <VerticalTimelineElement
              className="vertical-timeline-element-left"
              contentStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${props.useDarkTheme ? '#0a0af0' : '#70c1ff'}` }}
              date="Early Q1 2022"
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            >
              <Typography variant="p">
                <ArrowForwardIcon /> Reach 5,000 Holders by End of the Quarter
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Recruit More Team Members to Help Manage Real Estate
              </Typography>
              <br/>
              <Typography variant="p" className={styles.lastTimelineElement}>
                <ArrowForwardIcon /> Expand to Purchasing More Types of Properties
              </Typography>
            </VerticalTimelineElement>

            {/* ~~~~~~~~~~~~~~~~~~~ Q3 2022 ~~~~~~~~~~~~~~~~~~ */}
            <VerticalTimelineElement
              className="vertical-timeline-element-right"
              contentStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${props.useDarkTheme ? '#0a0af0' : '#70c1ff'}` }}
              date="Early Q1 2022"
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            >
              <Typography variant="p">
                <ArrowForwardIcon /> Reach 10,000 Holders by End of the Quarter
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Expand to Commercial Real Estate
              </Typography>
              <br/>
              <Typography variant="p">
                <ArrowForwardIcon /> Developer Funds Start to Vest
              </Typography>
              <br/>
              <Typography variant="p" className={styles.lastTimelineElement}>
                <ArrowForwardIcon /> Get Listed on Centralized Exchanges
              </Typography>
            </VerticalTimelineElement>

            {/* ~~~~~~~~~~~~~~~~~~~ Q4 2022 and Beyond ~~~~~~~~~~~~~~~~~~ */}
            <VerticalTimelineElement
              className="vertical-timeline-element-left"
              contentStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${props.useDarkTheme ? '#0a0af0' : '#70c1ff'}` }}
              date="Early Q1 2022"
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            >
              <Typography variant="p" className={styles.lastTimelineElement}>
                <ArrowForwardIcon /> More to Come...
              </Typography>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              iconStyle={{ background: props.useDarkTheme ? '#0a0af0' : '#70c1ff', color: props.useDarkTheme ? '#fff' : '#000' }}
              icon={<ArrowDownwardIcon />}
            />
          </VerticalTimeline>
        </Grid>        
    )
}
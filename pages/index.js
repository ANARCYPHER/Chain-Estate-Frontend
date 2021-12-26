import styles from '../styles/Home.module.css';

import Intro from '../components/Intro';
import Process from '../components/Process';
import TransactionFees from '../components/TransactionFees';
import TokenDistribution from '../components/TokenDistribution';
import WhyChainEstate from '../components/WhyChainEstate';
import RealEstateTypes from '../components/RealEstateTypes';
import Roadmap from '../components/Roadmap';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* ~~~~~ Intro Text and Image ~~~~~ */}
        <Intro useDarkTheme={props.useDarkTheme} />

        {/* ~~~~~ How Do I Become a Part of Chain Estate? ~~~~~ */}
        <Process useDarkTheme={props.useDarkTheme} />

        {/* ~~~~~ Transaction fee information (Tokenomics) ~~~~~ */}
        <TransactionFees useDarkTheme={props.useDarkTheme} />

        {/* ~~~~~ Token Distribution ~~~~~ */}
        <TokenDistribution useDarkTheme={props.useDarkTheme} />

        {/* ~~~~~ Why Chain Estate ~~~~~ */}
        <WhyChainEstate useDarkTheme={props.useDarkTheme} />
        
        {/* ~~~~~ Different Real Estate Types ~~~~~ */}
        <RealEstateTypes useDarkTheme={props.useDarkTheme} />

        {/* ~~~~~ Roadmap ~~~~~ */}
        <Roadmap useDarkTheme={props.useDarkTheme} />
      </main>
    </div>
  )
}

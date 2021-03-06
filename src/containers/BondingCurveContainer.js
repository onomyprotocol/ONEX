import React from 'react';
import BondingCurveChart from '../components/BondingCurveChart/BondingCurveChart';
import TradeHistory from '../components/TradeHistory';
import BuySell from '../components/BuySell';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


const BondingCurveWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const AlertWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    background: white;
    border: ${(props) => props.red == "true" ? "1px solid var(--dangerous-alert)": "1px solid var(--medium-gray)"};
    padding: 0px 24px;
    margin-bottom: ${(props) => props.red == "true" ? "24px": "16px"};
    border-radius: 4px;
`;

const AlertText = styled.div`
    color: ${(props) => props.red == "true" ? "var(--dangerous-alert)": "var(--dark-text-gray)"}; 
    font-weight: 400;
    padding: 20px 0px 20px 16px;
    letter-spacing: 0.6px;
`;

const DangerIcon = styled.img`
    filter: invert(36%) sepia(43%) saturate(2590%) hue-rotate(336deg) brightness(82%) contrast(102%);
`;

const BondingCurve = ({}) => {
    return (
      <BondingCurveWrapper>
        <NavBar />
        <AlertWrapper>
          <img src="dangerous.svg"/>
          <AlertText>Secondary Markets may have better offers!</AlertText>
        </AlertWrapper>
        <AlertWrapper red="true">
          <DangerIcon src="dangerous.svg"/>
          <AlertText red="true">Warning! The buyback reserve is low which results in a very low DXD sell price.</AlertText>
        </AlertWrapper>
        <BondingCurveChart />
        <BuySell />
        <TradeHistory />
        <Footer />
      </BondingCurveWrapper>
    );
};

export default BondingCurve;

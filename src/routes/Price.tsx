import styled from 'styled-components';
import type { PriceData } from './Coin';

const Overview = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // margin: 25px 0px;
    gap: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
`;

const OverviewItem = styled.div<{ isNegative : boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 14px 8px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    span:first-child {
        font-size: 10px;
        opacity: 0.8;
    }
    span:last-child {
        font-size: 18px;
        font-weight: 600;
        color: ${({ isNegative }) => isNegative ? '#4da3ff' : '#ff5c5c'};
    }
`;

interface PriceProps {
    tickersData: PriceData;
}

function Price({ tickersData }: PriceProps) {
    return (
        <div>
            <Overview>
                <OverviewItem isNegative={tickersData?.quotes.USD.percent_change_1h < 0}>
                    <span>15분</span>
                    <span>${tickersData?.quotes.USD.percent_change_1h}</span>
                </OverviewItem>
                <OverviewItem isNegative={tickersData?.quotes.USD.percent_change_12h < 0}>
                    <span>12시간</span>
                    <span>${tickersData?.quotes.USD.percent_change_12h}</span>
                </OverviewItem>
                <OverviewItem isNegative={tickersData?.quotes.USD.percent_change_24h < 0}>
                    <span>24시간</span>
                    <span>${tickersData?.quotes.USD.percent_change_24h}</span>
                </OverviewItem>
                <OverviewItem isNegative={tickersData?.quotes.USD.percent_change_7d < 0}>
                    <span>7일</span>
                    <span>${tickersData?.quotes.USD.percent_change_7d}</span>
                </OverviewItem>
                <OverviewItem isNegative={tickersData?.quotes.USD.percent_change_30d < 0}>
                    <span>30일</span>
                    <span>${tickersData?.quotes.USD.percent_change_30d}</span>
                </OverviewItem>
                <OverviewItem isNegative={tickersData?.quotes.USD.percent_change_1y < 0}>
                    <span>1년</span>
                    <span>${tickersData?.quotes.USD.percent_change_1y}</span>
                </OverviewItem>
            </Overview>
        </div>
    )
}

export default Price;
import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";

import '../../../node_modules/react-vis/dist/style.css';
import { getRevenueData } from "../../actions/revenue/getRevenueData";
import useToken from "../../hooks/useToken";
import DashboardPage from "../../components/Dashboard/Dashboard";
import {
    LineChartData,
    BarChartData,
    defaultLineChartOptions,
    LineDataset,
    colors,
    defaultBarChartOptions,
    BarDataset,
    Revenue
} from "./constants";
import { AuthConsumer } from "../../components/Auth/Auth";

interface Props { }

const Dashboard: React.FC<Props> = () => {
    const [isRevenueReady, setIsRevenueReady] = useState(false);
    const { token } = useToken();
    const dispatch = useDispatch();
    const store = useStore();
    const state: any = store?.getState();
    if (Object.keys(state?.revenue || {}).length === 0) {
        getRevenueData(token, dispatch, state).then(() => {
            setIsRevenueReady(true);
        });
    }


    const revenueData: { [key: string]: Revenue } = state?.revenue || [];

    const lineChartData: LineChartData = {
        data: {
            labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
            datasets: []
        },
        options: defaultLineChartOptions
    }

    const barChartData: BarChartData = {
        data: {
            labels: [],
            datasets: []
        },
        options: defaultBarChartOptions
    }

    let totalYearRevenue: number = 0;
    let highestRevenueCompany: string = "";
    let highestRevenueCountry: string = "";

    if (isRevenueReady) {
        let colorIndex = 0;
        const countryData: any = {};
        const allCompanyData = Object.values(revenueData);
        allCompanyData.forEach((data) => {
            const dataset: LineDataset = {
                label: `${data.company}/${data.country}`,
                backgroundColor: colors[colorIndex % colors.length],
                boarderColor: colors[colorIndex % colors.length],
                data: []
            }
            barChartData.data.labels.push(data.company);
            if (!countryData[data.country]) {
                countryData[data.country] = 1;
            }
            for (let i = 0; i < lineChartData.data.labels.length; i++) {
                const key = lineChartData.data.labels[i];
                dataset.data.push(data?.revenue[key]);
            }
            lineChartData.data.datasets.push(dataset);
            colorIndex++;
        });

        const countries: string[] = Object.keys(countryData);
        let maxCompanyRevenue = 0;
        let maxCountryRevenue = 0;
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            const newData = new Array(allCompanyData.length).fill(0);
            let countryRevenue = 0;
            for (let j = 0; j < barChartData.data.labels.length; j++) {
                const label = barChartData.data.labels[j];
                const companyData = revenueData[label];
                const totalRevenue = Object.values(companyData?.revenue).reduce((curr: number, acc: number) => curr + acc);
                if (maxCompanyRevenue < totalRevenue) {
                    maxCompanyRevenue = totalRevenue;
                    highestRevenueCompany = `${companyData.company} (${maxCompanyRevenue})`;
                }
                totalYearRevenue += totalRevenue;
                if (companyData.country === country) {
                    newData[j] = totalRevenue;
                    countryRevenue += totalRevenue;
                    if (maxCountryRevenue < countryRevenue) {
                        maxCountryRevenue = countryRevenue;
                        highestRevenueCountry = `${country} (${maxCountryRevenue})`;
                    }
                }
            };
            const barDataset: BarDataset = {
                label: `${country}`,
                stack: country,
                data: newData,
                backgroundColor: colors[i % colors.length]
            }
            barChartData.data.datasets.push(barDataset)
        }
    }
    return (
        <AuthConsumer>
            <DashboardPage
                lineChartData={lineChartData}
                barChartData={barChartData}
                totalYearRevenue={totalYearRevenue}
                highestRevenueCompany={highestRevenueCompany}
                highestRevenueCountry={highestRevenueCountry}
            />
        </AuthConsumer>
    );
}

export default Dashboard;
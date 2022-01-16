
export interface LineDataset {
    label: string;
    boarderColor: string;
    backgroundColor: string;
    data: number[];
}

export interface BarDataset {
    label: string;
    backgroundColor: string;
    stack: string;
    data: number[];
}

export interface LineChartData {
    data: { labels: string[], datasets: LineDataset[] };
    options: any;
}

export interface BarChartData {
    data: { labels: string[], datasets: BarDataset[] };
    options: any;
}

export const defaultLineChartOptions = {
    responsive: true,
    legend: {
        display: false,
    },
    title: {
        display: false,
        text: 'Chart.js Line Chart - Stacked Area',
    },
    tooltips: {
        intersect: false,
        mode: 'nearest',
    },
    hover: {
        mode: 'index',
    },
    scales: {
        xAxes: [
            {
                scaleLabel: {
                    display: false,
                    labelString: 'Month',
                },
                gridLines: {
                    display: false,
                },
            },
        ],
        yAxes: [
            {
                stacked: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value',
                },
                gridLines: {
                    display: false,
                },
            },
        ],
    },
}

export const defaultBarChartOptions = {
    title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    responsive: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                stacked: true,
                display: false,
            },
        ],
        yAxes: [
            {
                stacked: true,
                display: false,
            },
        ],
    },
};

export const colors = [
    "#C0392B",
    "#E74C3C",
    "#9B59B6",
    "#8E44AD",
    "#2980B9",
    "#3498DB",
    "#1ABC9C",
    "#27AE60",
    "#F1C40F",
    "#F39C12",
    "#D35400",
    "#34495E"
];

export interface Revenue {
    company: string;
    country: string;
    revenue: { [key: string]: number };
}

"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughtnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
            label: "Bank",
            data: [55, 212, 64],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }
    ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

    return (
        <Doughnut data={data} />
    )
}

export default DoughtnutChart
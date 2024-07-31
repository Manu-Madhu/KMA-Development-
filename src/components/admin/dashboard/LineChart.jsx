'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRef, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GradientLineChart = () => {
    const chartRef = useRef(null);
    const data = {
        labels: ['May', 'June', 'July'],
        datasets: [
            {
                data: [56, 55, 40, 100],
                borderColor: '#E3000F',
                borderWidth: 1,
                tension: 0,
                fill: "true"
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <div className='relative h-72 bg-gray-100 p-6 rounded-xl  max-sm:h-[10rem]'>
        <Line className='h-full' ref={chartRef} data={data} options={options} />
    </div>;
};

export default GradientLineChart;

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

    return <div className='relative h-[21rem] bg-gray-100 p-6 rounded-xl  max-sm:h-[10rem] pb-20'>
        <h4>Users</h4>
        <p className='text-2xl'>80 <span className='text-primaryColor font-medium text-xs'>+15%</span></p>
        <Line className='h-full' ref={chartRef} data={data} options={options} />
    </div>
};

export default GradientLineChart;

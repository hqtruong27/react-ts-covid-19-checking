import HighchartsReact from 'highcharts-react-official'
import React, { ReactElement, useEffect, useState } from 'react'
import Highchart from 'highcharts'
import { min } from 'moment'
interface Props {

}

interface categories {

}

//Run when data HighChart changes
const generateOptions = (data: Array<categories>) => {
    return {
        Chart: {
            height: 500,
        },
        title: {
            text: 'Total'
        },
        xAxis: {
            //categories: categories,
            crosshair: true
        },
        colors: ['#CBA4E4'],
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            // labels: {
            //     align: 'right'
            // }
            tooltip: {
                headerFormat: '<span style="" ></span><table>',
                bodyFormat: '<tr><td>{1}</td><td>{2}</td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                columns: {
                    pointPadding: 0.2,
                    borderWidth: 0.1
                }
            },
            series: [
                {
                    name: 'Total: ',
                    //data: data.map(function)
                }
            ]
        }

    }
}

function HighChart({ data }: { data: any }): ReactElement {
    const [options, setOptions] = useState({})

    useEffect(() => {
        setOptions(generateOptions(data))

    }, data)

    return (
        <div>
            <HighchartsReact highcharts={Highchart} options={options} />
        </div>
    )
}

export default HighChart

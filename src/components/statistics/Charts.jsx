import React from 'react'
import ReactApexChart from "react-apexcharts";
import { useLoaderData } from 'react-router-dom';

const Charts = () => {

    const data = useLoaderData();
    // console.log(data)

    let productPrice = data.map((product)=> product.price)
    let productRatting = data.map((product)=> product.rating)
    console.log(productRatting)

    const [state, setState] = React.useState({          
        series: [{
          name: 'Price',
          data: productPrice,
          color: "#9538e2"
        }, {
          name: 'Total',
          data: productRatting,
        }, {
          name: 'Rating',
          data: productRatting,
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              borderRadius: 5,
              borderRadiusApplication: 'end'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', 'Dell XPS 13', ],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " price + rating"
              }
            }
          }
        },
      
      
    });

  return (
    <section className='container py-5'>
      <div>
        <h2 className='sora_font font-bold text-[32px] text-center'>Product Bar Statistics {" "}</h2>
      </div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
    </section>
  )
}

export default Charts

import { ReactElement, useEffect } from 'react'
import { Chart as BaseChart, ChartConfiguration } from 'chart.js/auto'

export function Chart(): ReactElement {
  useEffect(() => {
    const configDoughnut: ChartConfiguration = {
      type: 'doughnut' as const,
      options: {
        plugins: {
          legend: {
            position: 'right'
          }
        }
      },
      data: {
        labels: ['Luxuo', 'Mens-Folio', 'Grazia'],
        datasets: [
          {
            label: 'value',
            data: [300, 300, 150],
            backgroundColor: [
              'rgb(16, 145, 244)',
              'rgb(29, 215, 91)',
              'rgb(239, 152, 52)'
            ],
            hoverOffset: 4
          }
        ]
      }
    }

    async function initChart() {
      new BaseChart(
        document.getElementById('chartDoughnut') as HTMLCanvasElement,
        configDoughnut
      )
    }

    initChart()
  }, [])

  return (
    <div className="w-Sz22 overflow-hidden">
      <canvas className="p-10" id="chartDoughnut"></canvas>
    </div>
  )
}

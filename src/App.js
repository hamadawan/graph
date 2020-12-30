import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Card, Checkbox, Label ,Icon} from 'semantic-ui-react' 

const dataSet = { 
  successful: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
  failed: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
  // total:[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
}

function App() {

  const totalSessions = dataSet.successful.map((a, i)=> (a + dataSet.failed[i]))
  
  const [data, setData] = useState({ ...dataSet, total: totalSessions })

  const [total, setTotal] = useState(true)
  const [successful, setSuccessful] = useState(true)
  const [failed, setFailed] = useState(true)
  
  const options = {
      title: {
          text: 'Infatructure Preview'
      },

      subtitle: {
          text: ''
      },

      yAxis: {
          title: {
              text: ''
          },
      },

      xAxis: {
          accessibility: {
              rangeDescription: ''
          }
      },
    
      legend: {
        title: {
          text: 'Availbility'
        },
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'bottom'
      },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 10000
          }
      },

      series: [
        {
          name: 'Total',
          type: 'line',
          color: 'blue',
          dashStyle: 'Dot',
          data: total? data.total: []
        },

        {
          name: 'Successful',
          type: 'line',
          color: 'green',
          dashStyle: 'Dot',
          data: successful? data.successful : []
        }, 
        {
            name: 'Failed',
            type: 'line',
            color: 'red',
            dashStyle: 'Dot',
            data: failed? data.failed :[]
        }
      ],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }

  }

  return (
    <div style={{padding: '15px'}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <Card>
        <Card.Content>
          <Card.Header>Usage</Card.Header>
        </Card.Content>         
        <Card.Content extra>
            <Checkbox checked={total} onChange={()=> setTotal(!total)}/>
            <Icon name='circle' color="blue" style={{marginLeft: '5px'}}/>
            Total Sessions
        </Card.Content>
        <Card.Content extra>
            <Checkbox checked={successful} onChange={()=> setSuccessful(!successful)}/>
            <Icon name='circle' color="green" style={{marginLeft: '5px'}} />
            Successful Sessions
        </Card.Content>
        <Card.Content extra>
            <Checkbox checked={failed} onChange={()=> setFailed(!failed)}/>
            <Icon name='circle' color="red" style={{marginLeft: '5px'}}/>
            Failed Sessions
        </Card.Content>    
      </Card>
    </div>

  );
}

export default App;

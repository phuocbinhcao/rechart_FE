import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Rectangle,
} from 'recharts';
import ToolTipChart from './components/ToolTipChart';
import './style.scss'


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 5400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 4598,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// using Customized gives you access to all relevant chart props
const CustomizedRectangle = (props) => {
  const { formattedGraphicalItems } = props;
  // get first and second series in chart
  const firstSeries = formattedGraphicalItems[0];
  const secondSeries = formattedGraphicalItems[1];

  // render custom content using points from the graph
  return firstSeries?.props?.points.map((firstSeriesPoint, index) => {
    const secondSeriesPoint = secondSeries?.props?.points[index];
    const yDifference = - firstSeriesPoint.y + secondSeriesPoint.y

    function checkColor(value) {
      if (value > 0 && value <= 100) {
        return "#4F71BE"
      } else
        if (value > 100 && value <= 150) {
          return "#4FAD5B"
        } else {
          return "#DE8344"
        }
    }

    return (
      <Rectangle
        key={firstSeriesPoint.payload.name}
        width={40}
        height={-yDifference}
        x={secondSeriesPoint.x - 20}
        y={secondSeriesPoint.y}
        fill={checkColor(yDifference)}
        radius={20}
      />
    )
  })
};


const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-5} fill="red" fontSize={10} textAnchor="middle" >
      {value}
    </text>
  );

}

const CustomizedLabel1 = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={10} fill="red" fontSize={10} textAnchor="middle" >
      {value}
    </text>
  );

}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">Ngày đo: </p>
        <p className="intro">Chỉ số hiện tại</p>
        <div className="result">

          <p className="desc">Kết luận:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </p>
        </div>
      </div>
    );
  }

  return null;
};

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Example = () => {
  return (
    <>
      <div >
        <ResponsiveContainer width="50%" height={500} >
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              // content={<CustomTooltip />}
              content={<ToolTipChart />}
            />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8"
              label={<CustomizedLabel />}
              dot={false}
              strokeWidth={3}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" label={<CustomizedLabel1 />} dot={false} strokeWidth={3} />
            <Customized component={CustomizedRectangle} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};


export default Example;

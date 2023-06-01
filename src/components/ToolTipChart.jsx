import React from "react";
import "./toolTipChart.scss";

const ToolTipChart = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">Ngày đo: </p>
        <p className="intro">Chỉ số hiện tại</p>
        <div className="result">
          <p className="desc">Kết luận:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default ToolTipChart;

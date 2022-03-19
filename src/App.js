import logo from "./logo.svg";
import "./App.css";
import BaiTapLayOut from "./BaiTapLayout/BaiTapLayOut";
import DataBinding from "./DataBinding/DataBinding";
import HandlingEvent from "./HandlingEvent/HandlingEvent";
import DieuKien from "./DieuKien/DieuKien";
import BaiTapChonMauXe from "./BaiTapChonMauXe/BaiTapChonMauXe";
import State from "./State/State";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import Props from "./Props/Props";
import { dataProps } from "./Props/data";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import BaiTapGioHang from "./BaiTapGioHang/BaiTapGioHang";
import ToChucLayOut from "./ToChucLayOut/ToChucLayOut";
import BaiTapVongLap from "./BaiTap2/BaiTapVongLap";
import DemoMiniRedux from "./DemoMiniRedux/DemoMiniRedux";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayOut /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvent /> */}
      {/* <DieuKien /> */}
      {/* <State /> */}
      {/* <BaiTapChonMauXe /> */}
      {/* <RenderWithMap /> */}
      {/* <Props dsdt={dataProps} /> */}
      {/* <LiftingStateUp /> */}
      {/* <BaiTapGioHang /> */}
      {/* <ToChucLayOut /> */}
      {/* <BaiTapVongLap /> */}
      {/* <DemoMiniRedux /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;

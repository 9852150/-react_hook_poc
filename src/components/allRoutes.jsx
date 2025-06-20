import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import BackgrounfColor from "./reactPractice.jsx/BackgroundColor";
import BgColorByRef from "./reactPractice.jsx/BgColorByRef";
import DuplicateValue from "./jsQues/DuplicateValue";
import Parent from "./reactPractice.jsx/childToParent.jsx/Parent";
import UseCallBackComp from "./useCallBack";
// import ExpUseCallBack from "./useCallBack/Exp2";
import ReactMemo from "./reactmemo/ReactMemo";
import MyPureComponent from "./classComponent/PureComponent";
import ParentComponent from "./classComponent/ParentComponent";
import UseRef from "./UseRef";
import Todo from "./toDo";
import USEReducer from "./useReducer/counter";
import CRUDApp from "./useReducer/CrudApp";
import CrudReducer from "./useReducer/CrudReducer";
import FilteredList from "./useMemo/FilteredList";
import Parentcall from "./useCallBack/Parentcall";
import Controlled from "./controlledUncontrolled/Controlled";
import UnControlled from "./controlledUncontrolled/UnControlled";
import UseContextChild from "./context/UsecontextChild";
import ContextApi from "./context/ContextApi";
import Scoreboard from "./ScoreBoard";
import FlipingNumber from "./animation/FlipingNumber";
import Flip from "./animation/Flip";
import Example from "./Example";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bgColor" element={<BackgrounfColor />} />
      <Route path="/bgRef" element={<BgColorByRef />} />
      <Route path="/duplicate" element={<DuplicateValue />} />
      <Route path="/props-to-parent" element={<Parent />} />
      <Route path="/useCallback" element={<UseCallBackComp />} />
      {/* <Route path="/useCallBack-2" element={<ExpUseCallBack />} /> */}
      <Route path="/react-memo" element={<ReactMemo />} />
      <Route path="/pure-comp" element={<MyPureComponent />} />
      <Route path="/class-comp" element={<ParentComponent />} />
      <Route path="/ref" element={<UseRef />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/reducer-counter" element={<USEReducer />} />
      <Route path="/reducer-crud" element={<CRUDApp />} />
      <Route path="/reducer-exp" element={<CrudReducer />} />
      <Route path="/usemeo-filterList" element={<FilteredList />} />
      <Route path="useMemo-exp" element={<Parentcall />} />
      <Route path="controlled" element={<Controlled />} />
      <Route path="un-controlled" element={<UnControlled />} />
      <Route path="use-context" element={<UseContextChild />} />
      <Route path="use-context-exp" element={<ContextApi />} />
      <Route path="/Scoreboard" element={<Scoreboard />} />
      <Route path="/flip-number" element={<FlipingNumber />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
};

export default AllRoutes;

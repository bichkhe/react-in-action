import React from "react";
import { useEffect } from "react";
const Con1 = ({ reload, functionFromParent }) => {
  //Chay từ đầu
  // Có thể f =() =>
  // const f = () => {console.log('22424234')}; // Được khởi tạo lại f lần 1 0x22343, f2= 0xx342343

  useEffect(() => {
    console.log("Con1: useEffect cách 1. Render khi component được update");
  });
  useEffect(() => {
    console.log("Con1: useEffect cách 2. Render 1 lần duy nhất");
  }, []);

  useEffect(() => {
    console.log("Con1: useEffect cách 3. render khi có điều kiện");
    // functionFromParent(); //đây chính là nguyên dẫn loop
  }, [reload]);

  // Hiện tượng loop sẽ gặp khi, trong thân hàm này, ta gọi một hàm tới cha functionFromParent và hàm cha lại thay đổi 1 biên state nào đó
  // Con1 lại gọi lại, f1 lai được khởi tạo mới
  // useEffect(() => {
  //   console.log("Con1: useEffect cách 3. Phụ thuộc hàm");
  //   functionFromParent();
  // }, [f]);

  return <div>I am son of lesson 1</div>;
};

export default Con1;

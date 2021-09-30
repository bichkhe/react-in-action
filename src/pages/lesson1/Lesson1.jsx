import React from "react";
import { useEffect, useState, useCallback } from "react";
import Con1 from "./Lesson1Son";
import Con2 from "./Lesson1Son2";
import "./Lesson1.scss";
const Lesson1 = (props) => {
  //Chạy từ đến cuối
  const [name, setName] = useState("131");
  const [reload, setReload] = useState(false); // gọi trong construc  bỏ contruct
  let reloadNonState = false; // set falese
  // const f = useCallback(() => {
  //   console.log("f called");
  //   setName(name + Math.random().toString());
  // }, [name]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   f();
  // }, [f]);
  // Có 3 cách để khởi tạo

  //Tương đương với componentDidUpdate
  useEffect(() => {
    console.log("Cha:useEffect cách 1: Lớp cha");
  });

  //Cách 2. Khởi tạo khi render
  useEffect(() => {
    console.log("Cha:useEffect cách 2: Lớp  cha");
  }, []); //bỏ qua không thức

  useEffect(() => {
    return () => {
      console.log("Cha:useEffect cách 4: Lớp  cha");
      //giải phóng đi trước, bộ nhớ
    };
  }, []);

  //Cách 2. Khởi tạo khi render
  useEffect(() => {
    const fetchData = (n1) => {
      console.log("Cha:fetchData", n1);
    };
    fetchData(name);
    console.log("Cha:useEffect cách 3: Lớp  cha");
  }, [name]);

  const handleClickWithState = () => {
    console.log("Cha: Clicked vào button với state");
    setName(Math.random().toString());
  };
  const handleClickWithoutState = () => {
    console.log("Cha: Clicked vào button với non state ");
    reloadNonState = 1323423;
    // setReload(!reload);
  };

  const functionFromParent = () => {
    //Set state không liên quan đến Con1
    console.log("Cha: functionFromParent được gọi ");
    // Gọi hàm dưới đây sẽ gây loop
    // setName(Math.random().toString());
    setReload(!reload);
  };
  return (
    <div>
      <div>
        <p>Lesson 1 - How to use useEffect corectly - {name}</p>

        <button className="lesson1__button" onClick={handleClickWithState}>
          STATE
        </button>
        <button
          className="lesson1__button2"
          onClick={handleClickWithoutState}
          value="Non-State"
        >
          NON-STATE
        </button>
        <Con1 reload={reload} functionFromParent={functionFromParent} />
        <Con2 functionFromParent={functionFromParent} />
      </div>
    </div>
  );
};

export default Lesson1;

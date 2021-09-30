import React from "react";
import { useEffect, useState } from "react";
const Con2 = ({ reload, functionFromParent }) => {
  //Từ đoạn đến
  console.log("COn2:--------------->");
  const [name, setName] = useState(null); // Nó sẽ chèn vào contructor và gọi, lần load thứ 2 thì nó nhìn dòng này như không có gì
  const fetchData = (reload) => {
    console.log("Con2:fetchData");
    setName(Math.random().toString());
  };

  useEffect(() => {
    console.log("Con2:useEffect cách 1. Render khi component được update");
  });

  useEffect(() => {
    console.log("Con2:useEffect cách 2. Render 1 lần duy nhất");
  }, []);

  useEffect(() => {
    console.log("Con2:useEffect cách 3. render khi có điều kiện reload");
    fetchData();
  }, [reload]);

  const divCss = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    cursor: "pointer",
  };

  const handleClickWithoutState = () => {
    console.log("Con2: Clicked không thay đổi state nội bộ");
    functionFromParent();
  };
  const handleClickState = () => {
    console.log("Con2: Clicked thay đổi state nội bộ");
    // setName(Math.random().toString());
    functionFromParent(name); //Cách để con truyền dữ liệu
  };
  return (
    <div>
      I am son2 of lesson
      <button className="lesson1__button" onClick={handleClickState}>
        SON2-STATE
      </button>
      <button className="lesson1__button2" onClick={handleClickWithoutState}>
        SON2-NONSTATE
      </button>
    </div>
  );
};

export default Con2;

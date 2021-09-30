import React, { useEffect, useRef, useState } from "react";
import "./scrolling.scss";

const Scrolling = (props) => {
  const scrollRef = useRef();

  //WINDOW
  const [wWidth, setWWidth] = useState();
  const [wHeight, setWHeight] = useState();
  const [wScrollHeight, setWScrollHeight] = useState();
  const [wScrollTop, setWScrollTop] = useState();
  //DIV
  const [dWidth, setDWidth] = useState();
  const [dHeight, setDHeight] = useState();
  const [dScrollHeight, setDScrollHeight] = useState();
  const [dScrollTop, setDScrollTop] = useState();

  useEffect(() => {
    console.log("Scrolling Pages");
    getDocumentDimension();
    getDimensionOfDiv();
    window.onscroll = onScroll;
    window.onresize = onResize;
  }, []);

  const onScroll = () => {
    getDocumentDimension();
  };
  const onResize = () => {
    getDocumentDimension();
    getDimensionOfDiv();
  };
  /**
   * lấy kích thước chiều cao của tài liệu hiện tại
   */
  const getDocumentDimension = () => {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    setWWidth(window.innerWidth);
    setWHeight(window.innerHeight);
    setWScrollHeight(scrollHeight);
    setWScrollTop(window.pageYOffset);
    // console.log(
    //   "WINDOW:Chiều rộng/cao của cửa sổ:",
    //   window.innerWidth,
    //   window.innerHeight
    // );
    // console.log("WINDOW: Chiều cao của document:", scrollHeight);
    // console.log(
    //   "WINDOW:Scroll Hiên tại tích từ top (Phần bị che khuất theo chiều Y):",
    //   window.pageYOffset
    // );
    // console.log(
    //   "WINDOW: Scroll Hiên tại tích từ trái (Phần bị che khuất theo chiều X):",
    //   window.pageXOffset
    // );
  };

  /**
   * Lấy kích thước của thẻ div scroll
   */
  const getDimensionOfDiv = () => {
    // console.log("DIV: Chiều cao hiện tại:", scrollRef.current.clientHeight);
    // console.log("DIV: Phần top bị che khuất:", scrollRef.current.scrollTop);
    // console.log("DIV: offsetTop: ", scrollRef.current.offsetTop);
    setDWidth(scrollRef.current.clientWidth);
    setDHeight(scrollRef.current.clientHeight);
    setDScrollHeight(scrollRef.current.scrollHeight);
    setDScrollTop(scrollRef.current.scrollTop);
    getBoundingClientRect();
  };

  /**
   * Get getBoundingClientRect()

   */
  const getBoundingClientRect = () => {
    // console.log("DIV: Chiều cao hiện tại:", scrollRef.current.clientHeight);
    // console.log("DIV: Phần top bị che khuất:", scrollRef.current.scrollTop);
    // console.log("DIV: offsetTop: ", scrollRef.current.offsetTop);

    const info = scrollRef.current.getBoundingClientRect();
    console.log("info:", info);
    // setDWidth(scrollRef.current.clientWidth);
    // setDHeight(scrollRef.current.clientHeight);
    // setDScrollHeight(scrollRef.current.scrollHeight);
    // setDScrollTop(scrollRef.current.scrollTop);
  };
  return (
    <div style={{ display: "flex", marginTop: "100px" }}>
      <div
        className="scroll"
        id="scroll"
        ref={scrollRef}
        onScroll={getDimensionOfDiv}
      >
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
        <div className="scroll-child">Test</div>
      </div>
      <div style={{ position: "fixed", left: "50%" }}>
        <ul>
          <li>Chiều rộng document: {wWidth}</li>
          <li>Chiều cao document: {wHeight}</li>
          <li>Chiều cao document scroll: {wScrollHeight}</li>
          <li>Giá trị document scrollTop: {wScrollTop}</li>
        </ul>
        <ul>
          <li>Chiều rộng div: {dWidth}</li>
          <li>Chiều cao div: {dHeight}</li>
          <li>Chiều cao div scroll: {dScrollHeight}</li>
          <li>Giá trị div scrollTop: {dScrollTop}</li>
        </ul>
        <div style={{ width: "300px", height: "300px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Scrolling;

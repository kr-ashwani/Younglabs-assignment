import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const listRef = useRef();
  const underLineRef = useRef();

  useEffect(() => {
    if (!listRef.current) return;
    function moveUnderLine(e) {
      underLineRef.current.style.transform = `translateX(calc(${
        e.target.dataset.num * 100
      }% + ${e.target.dataset.num * 10}px)) scaleX(${
        e.target.offsetWidth / underLineRef.current.offsetWidth
      })`;
    }
    Array.from(listRef.current.children).forEach((elem) => {
      elem.addEventListener('mouseover', moveUnderLine);
    });
    const mem = listRef.current;
    return () =>
      Array.from(mem.children).forEach((elem) => {
        elem.removeEventListener('mouseover', moveUnderLine);
      });
  }, []);
  return (
    <header>
      <div className="appLogo">
        <p className="heading">YourChallenge</p>
      </div>
      <div className="nav">
        <ul ref={listRef}>
          <li data-num="0">Product</li>
          <li data-num="1">Download</li>
          <li data-num="2.1">Pricing</li>
        </ul>
        <div ref={underLineRef} className="underLine"></div>
      </div>
    </header>
  );
};

export default Header;

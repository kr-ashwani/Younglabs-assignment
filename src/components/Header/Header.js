import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const listRef = useRef();
  const underLineRef = useRef();

  useEffect(() => {
    if (!listRef.current) return;
    function moveUnderLine(e) {
      underLineRef.current.style.transform = `translateX(${
        e.target.offsetLeft
      }px) scaleX(${e.target.offsetWidth / underLineRef.current.offsetWidth})`;
    }
    Array.from(listRef.current.children).forEach((elem) => {
      elem.addEventListener('click', moveUnderLine);
    });
    const mem = listRef.current;
    return () =>
      Array.from(mem.children).forEach((elem) => {
        elem.removeEventListener('click', moveUnderLine);
      });
  }, []);
  useEffect(() => {
    const child = Array.from(listRef.current.children)[0];
    underLineRef.current.style.transform = `scaleX(${
      child.offsetWidth / underLineRef.current.offsetWidth
    })`;
    setTimeout(() => {
      underLineRef.current.style.transition =
        'opacity 200ms ease-in-out, transform 200ms ease-in-out';
    }, 10);
  }, []);

  return (
    <header>
      <div className="appLogo">
        <p className="heading">YourChallenge</p>
      </div>
      <div className="nav">
        <ul ref={listRef}>
          <li>Product</li>
          <li>Download</li>
          <li>Pricing</li>
        </ul>
        <div ref={underLineRef} className="underLine"></div>
      </div>
    </header>
  );
};

export default Header;

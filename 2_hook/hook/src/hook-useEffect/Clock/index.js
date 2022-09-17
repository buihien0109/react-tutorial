import React, { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(() => {
    let now = new Date();
    return now.toLocaleTimeString()
  });

  const [isShowTop, setIsShowTop] = useState(false);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     let now = new Date();
  //     console.log("inside interval")

  //     setTime(now.toLocaleTimeString())
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [])

  useEffect(() => {
    const handleScroll = () => {
      console.log("handle scroll");

      if (window.scrollY >= 200) {
        setIsShowTop(true);
      } else {
        setIsShowTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <h1>Clock : {time}</h1>
      {console.log("render")}

      {isShowTop && <button onClick={handleBackToTop} style={{ position: "fixed", right: 50, bottom: 50 }}>TOP</button>}
    </div>
  )
}

export default Clock
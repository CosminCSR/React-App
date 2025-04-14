import React,{useState, useEffect} from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHight] = useState(window.innerHeight) 

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("event listener")
    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("event not listening")
    }
  }, [])

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth)
    setHight(window.innerHeight)
  }

  return(
    <>
    <p>
      Window Width: {width}px
    </p>
    <p>
      Window Height: {height}px
    </p>
    </>
  )
}

export default MyComponent
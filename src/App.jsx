import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const hey = "Axxel"


  const maxSize = 100;
  const [stars, setStars] = useState(new Array(300).fill(0).map(() => {
    let x =  Math.random() * maxSize-1;
    let y = Math.random() * maxSize-1;
    return {
      x: x,
      y: y,
    }
  }))

  const [position, setPosition] = useState({
    x: 50,
    y: 80,
  })


  useEffect(() => {

    document.addEventListener("keydown", (e) => {
      const key = e.key;
      const move = 1;


        if (key === "a") {
          // left
          setPosition((prevPosition) => {
            return {
              x: prevPosition.x-move,
              y: prevPosition.y 
            } 
          })
        } else if (key === "d") {
          // right

          setPosition((prevPosition) => {
            return {
              x: prevPosition.x + move, 
              y: prevPosition.y 
            }
          })

        } else if (key === "s") {
          // down
          setPosition((prevPosition) => {
            return {
              x: prevPosition.x,
              y: prevPosition.y + move 
            } 
          })

        } else if (key === "w") {
          // up 
          setPosition((prevPosition) => {
            return {
              x: prevPosition.x,
              y: prevPosition.y - move 
            } 
          }) 
        } else if (key === " ") {
          const bullet = document.createElement("div")
          const playerElement = document.querySelector(".player")
          bullet.style.left = `${playerElement.style.left}`
          bullet.style.top = `${playerElement.style.top}`
          bullet.classList.add("bullet")
          document.querySelector("main").appendChild(bullet)
          
        }
        

    })

    const moveStars = () => {
      setStars((previousStars) => {
        return previousStars.map((star) => {
          return {
            x: Math.random() * maxSize - 1,
            y: Math.random() * maxSize - 1,
          }
        })
      })
    }

    const timer = setInterval(moveStars, 1500)
    return () => clearInterval(timer)
  }, [])


  return (
   <main>
    <h1 id="four">{hey}</h1>
        {
          stars.map((star, i) => {
            const styles = {
              left: `${star.x}%`,
              top: `${star.y}%`,
            }

              return <div className="star" key={i} style={styles}></div>
          })
        }

        <div className="player" style={{
          left: `${position.x}%`,
          top: `${position.y}%`
        }}>
        </div>


       </main> 


  )
}

export default App

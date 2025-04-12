import UserGreeting from "./UserGreeting.jsx"

function App() {
  
  return (
    <>
      <UserGreeting isLoggedIn = {true} username = "Cosmin"/>
      <UserGreeting isLoggedIn = {true} />
    </>
  )
}

export default App

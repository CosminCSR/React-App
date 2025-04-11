import profilePic from './assets/kitty.avif'

function Card() {
  return(
    <div className="card">
      <img src={profilePic} alt="profile picture" className="card-image"></img>
      <h2 className="card-title">Cosmin</h2>
      <p className="card-text">Universitatea Alexandru Ioan Cuza</p>
    </div>
  )
}

export default Card
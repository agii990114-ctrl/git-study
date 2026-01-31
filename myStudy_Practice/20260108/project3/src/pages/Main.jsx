import { useNavigate } from 'react-router';
import { list } from '@/data.js'

const Main = () => {

  const nav = useNavigate();


  return (
    <div className="container mt-3">
      <h1 className="text-center bg-success text-dark bg-opacity-50">MAIN</h1>
      <div className="btn-group">
        <button className="btn btn-warning" onClick={()=>nav('/signIn')}>SignIn</button>
        <button className="btn btn-primary" onClick={()=>nav('/signUp')}>SignUp</button>
      </div>

      <div className="row mt-2">
        {
          list.map((v, i) =>
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
              <div className="card">
                <img className="card-img-top" src={`/images/img_avatar${i+1}.png`} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">{v.name}</h4>
                  <p className="card-text">{v.job}</p>
                  <button className="btn btn-primary" onClick={()=>nav(`/user/${i+1}`)}>See Profile</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Main;
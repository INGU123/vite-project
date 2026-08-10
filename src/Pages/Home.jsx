import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero min-h-screen relative  transition-transform-duration-600 bg-[url('public/Bg-Home.jpg')]">
        <div className="hero-content text-center">
          <div>
            <h1 className="card card-title text-base-100 text-9xl">Welcome</h1>
            <p className="text-base-100 text-xl">
              This channel is about of learning web developpement
            </p>
          </div>
          <div className="absolute bottom-8 right-8">
            <button
              onClick={() => navigate("/Movies")}
              className="btn btn-ghost text-accent btn-lg px-9"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

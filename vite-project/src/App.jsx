import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UserForm from './components/UserForm/UserForm';
import Login from './components/Login/Login'
import UserDailyLog from './components/UserDailyLog/UserDailyLog'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
      </div>

      <div >
        <UserForm/>
      </div>

      <div>
          <h1>JR Project First Draft</h1>
      </div>

      <div className="HomePage">
        <div className="HomeVideo">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/piKJOD2s8KY?si=bOnAWxd57skKNweV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/*Embedded youtube video*/}
        </div>

        <div className="HomeText">
          <p>
            Welcome to the Self-Improvement HUB — a centralized space designed to help you stay consistent with your personal growth. Whether you're tracking fitness challenges, building daily habits, or working toward long-term goals, this platform is built to keep you focused and motivated. I created this app out of a need for a simple, organized way to measure progress and hold myself accountable without feeling overwhelmed. It's about progress, not perfection.
            <br></br>
            <br></br>
            In the future, I plan to add features like daily reflection prompts, AI-powered habit suggestions, and integrations with tools like Google Fit and Apple Health. My goal is to make self-improvement more visual, more structured, and ultimately more achievable for anyone on a growth journey.
          </p>
        </div>

      </div>

      <div>
        <UserDailyLog/>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         count is {count}
        </button>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App

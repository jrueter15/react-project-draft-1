import React from 'react'

export default function ProfileCard(props){
    const profile = {
        name: "Jared",
        goals: [
            "lose weight", "learn to code", "read every day"
        ]
    }
  
    return (
    <div className="Profiles">
        <p>Name: {props.name}</p>
        <p>Goals: {props.goal}</p>
    </div>
  )
}


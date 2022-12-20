import React from 'react'
import ProfilePic from "../assets/Pofilepic.jpg"
import "../css/ProfileImg.css"

export default function ProfileImg() {
    return (
        <div className="profileImg">
            <img src={ProfilePic} alt="profile img" />
        </div>
    )
    }
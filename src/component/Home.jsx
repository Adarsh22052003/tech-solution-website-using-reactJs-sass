import React from 'react';
import vg from "../assests/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all problems</p>
        </main>
    </div>
    <div className="home2" >
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero beatae fugit aut et eum consequuntur repudiandae nulla dicta mollitia quo nam repellendus, debitis in perspiciatis quisquam reprehenderit omnis animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque reprehenderit eius unde excepturi quos eveniet vel harum quam voluptates tempore. Nostrum dicta debitis expedita assumenda pariatur. Nesciunt ratione placeat amet. </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>        
        <h1>Brand</h1>
        <article>
            <div style={
                {animationDelay: "0.5s"}
            }>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={
                {animationDelay: "0.7s"}
            }>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={
                {animationDelay: "0.3s"}
            }>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={
                {animationDelay: "1s"}
            }>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
        </div>
    </div>
    </>
  )
}

export default Home;
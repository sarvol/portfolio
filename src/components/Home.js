import React from "react"
import Typical from "react-typical"




const Home = () => {


    return (
        <main className="mainHome">
            <h1 className="welcome">Welcome, I am </h1>
            <h1 className="typing"> {" "}
                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        "a graphic designer", 
                        1200,
                        "a front-end developer",
                        1200,
                        " a photographer",
                        1200,
                        "Sara Voll",
                        2000
                    ]}
                /> 
             </h1>
             {/* <h1 className="welcomeInfo">Check out my work</h1> */}
            

        </main>
        
    )
}

export default Home









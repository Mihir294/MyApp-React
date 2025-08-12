import React from 'react'
import './login.css'

export default function login() {
  return (
    <div>
     

    <div className="outer-box">
        <div className="inner-box">
            <header className="signup-header">
                <h1>Signup</h1>
                <p>It just takes 30 seconds</p>
            </header>
            <main className="signup-body">
                <form action="#">
                    <p>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" placeholder="Vasita Mihir Sureshbhai" required/>
                    </p>
                    <p>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="mihirvasita04@gmail.com" required/>
                    </p>
                    <p>
                        <label htmlFor="password">Your New Password</label>
                        <input type="password" id="password" placeholder="at least 8 characters" required/>
                    </p>
                    <p>
                        <input type="submit" id="submit" value="Create Account"/>
                    </p>
                </form>
            </main>

            <footer className="signup-footer">
                <p>Already have an Account? <a href="#">Login</a> </p>
            </footer>

        </div>
        <div className="circle c1"></div>
        <div className="circle c2"></div>
    </div>
    
    </div>
  )
}

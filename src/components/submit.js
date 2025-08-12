import React from 'react'
import './submit.css'


export default function submit() {
  return (
    <div className='submit'>
        <p>🎉</p>
        <h1>Thank you for your submission!</h1>
        <p>Your form has been successfully submitted✅</p>
        <p>We will get back to you shortly.</p>
        <button onClick={() => window.location.href = '/home'}>Go to Home</button>
        <a href="/billSummary" className='billsum'>view bill summary</a>

    </div>
  )
}

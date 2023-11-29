import React from "react"
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Contacts</h2>
          <span>Email: TA3ADBMS@gmail.com</span>
          <span>Youtube: TA3_ADBMS</span>
          <span>Github: https://github.com/Travel-App</span>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Privacy policy</h2>
          <p>At Nothing Travel, we prioritize the security and confidentiality of your personal information. 
            We collect only essential details required for seamless travel bookings, such as your name, contact information, and payment details. 
            Your data is used solely for processing bookings, providing customer support, and enhancing our services. 
            By using our platform, you agree to our privacy practices outlined in this policy.

          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Button } from '@mui/material'
import styles from "./Footer.module.css";
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 80,
        marginBottom: 80,
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Subscribe To Our Newsletter
      </span>
      <form style={{ alignSelf: "center" }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email Address"
          style={{ border: "1px solid red", padding: ".6rem" }}
        ></input>
        <Button type="submit" onClick={handleSubmit} className={styles.subscribeButton} sx={{ bgcolor: "red", color: "white", textTransform: "none", fontWeight: "bold", fontSize: 15, 
        ":hover": {
           bgcolor: "red", 
          color: "white", 
          textTransform: "none", 
          fontWeight: "bold", 
          fontSize: 15
        }
      }}>Subscribe</Button>
      </form>
    </div>
  );
}

export default Footer
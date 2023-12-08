import React from 'react'
import styles from '../Components/Display.module.css'


function Display({displayValue}) {
  return (
    <div>
         <input type="text" value={displayValue} className={styles.display} readOnly />
    </div>
  )
}

export default Display
import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>Header</div>
    </header>
  )
}
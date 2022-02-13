/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { Page } from "../components/page"

const Home: NextPage = () => {
  return (
    <Page title="Semana do Violino - Convite do Telegram" description="" path="/">
      <div className={styles.container}>

        <main className={styles.main}>
          
          <div className={styles.box}>
            <header>
              <img src={`images/logo.png`} alt="raone moura" />
            </header>
            <figure>
              <img src={`images/0001.jpg`}  alt="semana do violino" />
            </figure>
            
            <Link href="tg://join?invite=hwEB-A9Yr79mMmVh">
              <a className={styles.button_container}>
                <button>
                  <span>
                    <img src={`images/telegram-icone-icon.png`} alt="telegram icon" />
                  </span>
                  Clique Aqui Para Acessar O Grupo No Telegram
                </button>
              </a>
            </Link>

            <div className={styles.donthavetelegram}>
              <p>
                Você não tem o telegram? 
                <span>
                  <Link href="https://telegram.org/apps"><a>Clique aqui</a></Link> para baixar no site oficial do telegram!
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
      </Page>
  )
}

export default Home

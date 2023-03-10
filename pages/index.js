import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import logo from '../public/LOGO.png';
import { useRef, useEffect,useState } from 'react';
import { useInView } from 'react-intersection-observer';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: rocketRef, inView: rockettIsVisible } = useInView();
  const { ref: titleRef, inView: titletIsVisible } = useInView();
  const { ref: portraitRef, inView: portraitIsVisible } = useInView();
  const { ref: title2Ref, inView: title2IsVisible } = useInView();

  return (
    <>
      <Head>
        <title>Verna-Landing page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" width={50} height={60} />
        </div>
        <div className={styles.header_bnt_cnt}>
          <a href='https://vernamai.ca'>
            <button className={styles.header_bnt} onClick={() => window.location.href='https://vernamai.ca'}>Portfolio</button>
          </a>
          <a href='/About Me'>
            <button className={styles.header_bnt}>About Me</button>
          </a>
        </div>
        <div className={styles.header_line}></div>
      </header>


      <main className={styles.main}>
       <div  className={styles.sec1_cnt}>
    
        {/* <h1 className={styles.h1}>DESIGN AND<br/>BUILD <br/>UNIQUE<br/> PRODUCTS</h1>
      */}
        <div >
          <div className={styles.h1_img}></div>
        </div>
     

        <div >
          <video autoPlay loop muted src="/video_loop.mp4" className={styles.video}>
          </video>
        </div>

      </div>
      <div className={styles.project_cnt} ref={title2Ref}>
      <div className={styles.sec3_logo}></div>
      <span className={`${styles.title2_h2 } ${title2IsVisible ? styles.animatetitle2 : ''}`}>Projects</span>
      </div>

      <div  className={styles.sec2_cnt} >
        <div className={styles.card_ui} onClick={() => window.location.href='https://vernamai.ca/uiprojects/'}></div>
        <div className={styles.card_flower}></div>
        <div className={styles.card_graphic} onClick={() => window.location.href='https://vernamai.ca/graphic-design-project/'}></div>
        <div className={styles.card_mg} onClick={() => window.location.href='https://vernamai.ca/mg-portfolio/'}></div>
      </div>

      <div className={styles.sec3} ref={titleRef}>
          <div className={styles.sec3_logo}></div>
          {/* <h2  className={styles.sec3_h2}>About Me</h2> */}
          <span className={`${styles.sec3_h2} ${titletIsVisible ? styles.animateTitle : ''}`}>About Me</span>
          
          {/* <p>{myElementIsVisible ? 'Yes' : 'No' }</p> */}
          <p ref={rocketRef}>
            <span className={`${styles.rocket} ${rockettIsVisible ? styles.animateRocket : ''}`}>????</span>
          </p>
         
      </div>
      <div className={styles.portrait_cnt} ref={portraitRef}>
          <div className={`${styles.portrait} ${portraitIsVisible ? styles.animatePortrait : ''}`}></div>
         
          <div className={styles.p_cnt}>
           
            <div className={styles.portrait_line}></div>
            <p className={styles.portrait_p}>I am <strong style={{fontSize: '26px', fontWeight: 'bold',color:'antiquewhite'}}> Verna Mai </strong>working as UI/UX & Graphic design & Motion Graphic designer based in Vancouver. I design and build unique digital products.I would be happy to implement your thinking into  <strong style={{fontSize: '26px', fontWeight: 'bold',color:'antiquewhite'}}> smooth Visual Design</strong> and
            <strong style={{fontSize: '26px', fontWeight: 'bold',color:'antiquewhite'}}> Best UI  Experience.</strong>
            <br/>
            <br/>
          Feel free to mail me: vernamai9@gmail.com</p>
          <div className={styles.portrait_line2}></div>
          </div>
          
      </div>
      
      



      </main>
    </>
  )
}

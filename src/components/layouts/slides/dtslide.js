import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Slider.module.css';

const Dtslide = ({slides}) => {
  return (
    <div className={styles.slider}>
        {slides.map((slide)=>{
            return( 
                <div className={styles.slide}> 

                    <Image 
                     src={slide.dtSlider.sliderImage.sourceUrl} 
                     alt="" 
                     width="2000" 
                     height="550"
                     layout="responsive"                   
                      />

                    <div className={styles.links}>
                        <Link href={slide.dtSlider.button1Link.url}>
                        <button>{slide.dtSlider.button1Name}</button>
                        </Link>
                        <Link href={slide.dtSlider.button2Link.url}>
                        <button>{slide.dtSlider.button2Name}</button>
                        </Link>
                        <Link href={slide.dtSlider.button3Link.url}>
                        <button>{slide.dtSlider.button3Name}</button>
                        </Link>
                    </div>                    
                </div>
            )
        })}
    </div>
  )
}

export default Dtslide
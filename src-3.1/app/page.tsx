import { useClient } from 'next/client'
import { useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const { isClient } = useClient()
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleRestart = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      video.play()
    }
  }

  return (
    <div className={styles.center}>
      <video width={640} height={360} controls>
        <source src="/video/movie.mp4" type="video/mp4" />
      </video>
      {isClient && (
        <video
          className="video"
          src="assets/video/eyecatch-movie.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleRestart}
          ref={videoRef}
        />
      )}
    </div>
  )
}

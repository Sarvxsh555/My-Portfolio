import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import L from 'leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { motion, AnimatePresence } from 'framer-motion'
import './Contact.scss'

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 350 }
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const errorVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    x: [0, -10, 10, -10, 10, -5, 5, 0],
    transition: { 
      x: { duration: 0.5, ease: 'easeInOut' },
      default: { type: 'spring', damping: 25, stiffness: 350 }
    }
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.15, type: "spring", duration: 0.7, bounce: 0 },
      opacity: { delay: 0.15, duration: 0.01 }
    }
  }
};

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(false)
  const [modalState, setModalState] = useState(null)
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_lwm8m02",
        "template_71dh25v",
        form.current,
        "PyIYRUxn_rprhHpIf",
      )
      .then(
        () => {
          setLoading(false)
          setModalState('success')
          if (form.current) {
            form.current.reset()
          }
          setTimeout(() => {
            setModalState(null)
          }, 3000)
        },
        () => {
          setLoading(false)
          setModalState('error')
        }
      );
  }
  return (
    <>
      <div className="page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
            <p>
              I’m actively seeking opportunities with leading technology
              companies where I can contribute to building large-scale,
              high-impact systems. If you’re working on ambitious engineering
              challenges or believe my profile aligns with your team’s goals,
              I’d love to connect."
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="ok">
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="flat-button submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="loader-btn-content">
                          <span>SENDING...</span>
                          <span className="btn-spinner"></span>
                        </span>
                      ) : (
                        "SEND MESSAGE!"
                      )}
                    </button>
                  </li>
                </div>
              </form>
            </div>
          </div>
          <div className="info-map">
            Sarvesh Arun,
            <br />
            Bangalore,
            <br />
            India <br />
            <span>
              @:<span>sarveshvaranarun@gmail.com</span>
            </span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[12.8906, 77.6355]} zoom={12.2}>
              <TileLayer
                url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
              <Marker position={[12.8906, 77.6355]} icon={redIcon}>
                <Popup>
                  Sarvesh Arun lives here, come over for a cup of coffee
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>

      <AnimatePresence>
        {modalState && (
          <motion.div
            className="modal-overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={() => setModalState(null)}
          >
            <motion.div
              className={`modal-container ${modalState}`}
              variants={modalState === 'success' ? successVariants : errorVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                {modalState === 'success' ? (
                  <>
                    <div className="modal-icon-wrap">
                      <svg className="modal-svg" viewBox="0 0 100 100" width="80" height="80">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#83c5be"
                          strokeWidth="5"
                          fill="transparent"
                          initial="hidden"
                          animate="visible"
                          variants={draw}
                        />
                        <motion.path
                          d="M30 50 L45 65 L70 35"
                          stroke="#83c5be"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="transparent"
                          initial="hidden"
                          animate="visible"
                          variants={draw}
                        />
                      </svg>
                    </div>
                    <h2>Message Sent Successfully</h2>
                    <p>
                      Thank you for reaching out.<br />
                      Your message has been delivered successfully.
                    </p>
                    <div className="modal-code-tag">
                      <code>&lt;message status="sent" /&gt;</code>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="modal-icon-wrap">
                      <svg className="modal-svg" viewBox="0 0 100 100" width="80" height="80">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#ff6b6b"
                          strokeWidth="5"
                          fill="transparent"
                          initial="hidden"
                          animate="visible"
                          variants={draw}
                        />
                        <motion.path
                          d="M35 35 L65 65"
                          stroke="#ff6b6b"
                          strokeWidth="5"
                          strokeLinecap="round"
                          fill="transparent"
                          initial="hidden"
                          animate="visible"
                          variants={draw}
                        />
                        <motion.path
                          d="M65 35 L35 65"
                          stroke="#ff6b6b"
                          strokeWidth="5"
                          strokeLinecap="round"
                          fill="transparent"
                          initial="hidden"
                          animate="visible"
                          variants={draw}
                        />
                      </svg>
                    </div>
                    <h2>Message Delivery Failed</h2>
                    <p>
                      Something went wrong while sending your message.<br />
                      Please try again.
                    </p>
                    <div className="modal-code-tag">
                      <code>&lt;message status="error" /&gt;</code>
                    </div>
                    <button className="flat-button close-btn" onClick={() => setModalState(null)}>
                      CLOSE
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact
import React from 'react'
import Pouplar from '../Components/Pouplar'
import Vaggie from '../Components/Vaggie'
import {motion} from 'framer-motion'

function Home() {
  return (
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
          <Pouplar />
          <Vaggie />
    </motion.div>
  )
}

export default Home
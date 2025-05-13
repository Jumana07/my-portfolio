import { motion } from 'framer-motion';

function Hero() {
  return (
    <section style={{ background: '#a569bd', color: 'white', textAlign: 'center' }}>
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Hello, I'm Jumana Haseen
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        A React Frontend Developer ,
        who constantly upskills and looking for challenging opportunities
      </motion.p>
    </section>
  );
}

export default Hero;

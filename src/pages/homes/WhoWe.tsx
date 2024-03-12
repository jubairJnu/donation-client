import { useRef } from "react";
import CommonHeader from "../component/utils/CommonHeader";
import Container from "../component/utils/Container";
import { Variants, motion, useInView } from "framer-motion";
const hiddenMotion: Variants = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,

    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const WhoWe = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref);
  return (
    <Container>
      <CommonHeader text="Who We Are" />

      <motion.div
        ref={ref}
        animate={
          inView
            ? { opacity: 1, x: 0 }
            : {
                opacity: 0,
                x: -500,
                transition: { delay: 0.7, duration: 2, ease: "easeInOut" },
              }
        }
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 "
      >
        <div>
          <h1 className="text-center text-xl font-bold mb-5">Mission</h1>
          <p className="text-slate-700 text-justify">
            Efficiently distribute winter clothes to those in need, ensuring
            access to warmth and protection, particularly in harsh conditions.
            Foster inclusivity and address the pressing need for winter
            clothing.
          </p>
        </div>
        <motion.div
          variants={hiddenMotion}
          initial="hidden"
          animate="visible"
          className="bg-primary-blue p-10 rounded-md"
        >
          <h1 className="text-center text-xl font-bold mb-5">Objectives</h1>
          <p className="text-gray-200 text-justify">
            Accessibility: Make winter clothes accessible to all, leveraging
            technology and partnerships. Efficiency: Optimize management and
            distribution, minimizing wastage and maximizing impact. Community
            Engagement: Facilitate collaboration among volunteers,
            organizations,
          </p>
        </motion.div>
        <motion.div className="bg-slate-200 p-10 rounded-md">
          <h1 className="text-center text-xl font-bold mb-5">Impact</h1>
          <p className="text-zinc-800 text-justify">
            Provide crucial protection against cold-related illnesses and
            fatalities. Empower individuals, maintaining dignity and fostering
            resilience. Strengthen community resilience to cold weather
            emergencies.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WhoWe;

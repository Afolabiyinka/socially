import { motion } from "framer-motion";
export default function FollowersCard({ social }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={` shadow-sm shadow-gray-400  w-[16rem] h-fit h- p-3 rounded-lg`}
    >
      <div
        className={`bg-gradient-to-br ${social.color} text-white flex gap-2 p-3 items-center font-serif text-xl tracking-wide rounded-md mb-2`}
      >
        <motion.p
          initial={{ animation: "unset" }}
          animate={{ animation: "ease-in-out" }}
          transition={{ duration: 0.3 }}
        >
          {social.icon}
        </motion.p>
        {social.label}
      </div>
      <motion.div
        className="w-52 h-0.5 bg-current rounded-full mb-2 opacity-70"
        initial={{ width: 0 }}
        animate={{ width: "13rem" }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      <div className="py-3">
        <p className="font-serif font-thin text-lg">
          <span className="font-sans font-semibold">90k </span>Suscribers
        </p>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function Notification() {
  return (
    <motion.div
      className="h-12 w-[40rem] border-[1px] rounded-lg p-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
    >
      <p>Notification</p>
    </motion.div>
  );
}

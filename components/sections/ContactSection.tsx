"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUser, FaEnvelope, FaPhone, FaCity } from "react-icons/fa";

export default function ContactSection() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="contact"
      className="max-w-screen-3xl mx-auto py-16 
       flex flex-col justify-center items-center bg-white"
    >
      <div className="container mx-auto px-4 py-16 transparent bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
          className="text-4xl font-bold mb-8 text-center text-gray-800"
        >
          Pronto para agendar a sua sessão?
        </motion.h2>
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
          className="space-y-6 w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D7a0000005Fjs"
          method="POST"
        >
          <input type="hidden" name="oid" value="00D7a0000005Fjs" />
          <input
            type="hidden"
            name="retURL"
            value="http://google.com" // Replace with your desired return URL
          />

          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <FaUser className="text-gray-600" />
            <Input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Sobrenome"
              required
              className="w-full"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <FaEnvelope className="text-gray-600" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <FaPhone className="text-gray-600" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Telefone"
              required
              className="w-full"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <FaCity className="text-gray-600" />
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Cidade"
              required
              className="w-full"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Button type="submit" className="w-full bg-blue-500 text-white">
              FAÇA JÁ SEU AGENDAMENTO
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

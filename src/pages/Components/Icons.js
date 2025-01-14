import React from 'react';
import { motion } from 'framer-motion';
import {
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
} from 'react-icons/ai';
import { FaMicrosoft, FaSap, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';

const Icons = () => {
    return (
        <div className='py-10'>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <a href='https://www.linkedin.com/in/chloe-jyl/' target="_blank">
                        <AiFillLinkedin className='cursor-pointer hover:bg-cyan-300 rounded-full' />
                    </a>
                </motion.div>
                <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <a href='https://github.com/' target="_blank rel=“noreferrer”">
                        <AiFillGithub className='cursor-pointer hover:bg-cyan-300 rounded-full' />
                    </a>
                </motion.div>
                <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <a href='mailto: chloejin.cj@gmail.com' target="_blank rel=“noreferrer”">
                        <AiOutlineMail className='cursor-pointer hover:bg-cyan-300 rounded-full' />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Icons;
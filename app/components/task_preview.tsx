import React from 'react'
import taskHabits from "~/assets/task_habits.png"
import taskHome from "~/assets/task_home.png"
import taskDetails from "~/assets/task_details.png"
import { motion } from 'framer-motion'
import FeatureCard from './feature-card'
import { Check, FileCheck, LockKeyhole } from 'lucide-react'

const TaskPreview = () => {
    return (
        <motion.div className="flex justify-center items-center py-8 mb-32">
            <div className="relative flex items-center w-full max-w-[90%] px-8">
                {/* Left side - Material Elevated Container */}
                <div className="hidden md:flex flex-shrink-0 w-80 mr-12 relative">
                    <FeatureCard
                        title="Task & Notes"
                        description="Organize your tasks and habits with ease, using a sleek and intuitive interface."
                        icon={<FileCheck size={28} className='text-blue-500' />}
                        backgroundColor="from-blue-500/20 to-blue-500/5"
                    />

                    {/* Bent Arrow pointing from right side of container to left image */}
                </div>

                {/* Center - Images */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        {/* First image - left */}
                        <div className="relative z-10">
                            <img
                                src={taskHabits}
                                alt="Task preview 1"
                                className="w-auto h-full max-h-[600px] object-contain"
                            />
                        </div>

                        {/* Second image - center (overlapping, higher z-index) */}
                        <div className="relative z-30 transform scale-110 -mx-16">
                            <img
                                src={taskHome}
                                alt="Task preview 2"
                                className="w-auto h-full max-h-[600px] object-contain"
                            />
                        </div>

                        {/* Third image - right */}
                        <div className="relative z-10">
                            <img
                                src={taskDetails}
                                alt="Task preview 3"
                                className="w-auto h-full max-h-[600px] object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side - Empty space */}
                <div className="hidden md:flex flex-shrink-0 w-80 ml-12 relative">
                    <FeatureCard
                        title="End-to-End Encryption"
                        description="Organize your tasks and habits with ease, using a sleek and intuitive interface."
                        icon={<LockKeyhole size={28} className='text-green-500' />}
                        backgroundColor="from-green-500/20 to-green-500/5"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default TaskPreview

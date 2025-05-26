import React from 'react'
import taskHabits from "~/assets/task_habits.png"
import taskHome from "~/assets/task_home.png"
import taskDetails from "~/assets/task_details.png"
import { motion } from 'framer-motion'

const TaskPreview = () => {
    return (
        <motion.div className="flex justify-center items-center py-8 mb-32">
            <div className="relative flex items-center w-full max-w-[90%] px-8">
                {/* Left side - Material Elevated Container */}
                <div className="flex-shrink-0 w-80 mr-12 relative">
                    <div className="bg-card border border-border rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                            Tasks and Habits
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Create, track, and visualize your progress in a beautifully designed interface that keeps you motivated.
                        </p>
                    </div>
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
                <div className="flex-shrink-0 w-80 ml-12 relative">
                    <div className="bg-card border border-border rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                            End-to-End Encryption
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your data is yours. Not us, not anyone else can access it.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TaskPreview

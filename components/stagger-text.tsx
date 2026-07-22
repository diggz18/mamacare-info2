"use client";


import { motion, type Variants } from "framer-motion";

const container: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const word: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

type StaggerTextProps = {
    text: string;
    className?: string;
    wordClassName?: string;
    as?: "h1" | "h2" | "h3" | "p";
};

export default function StaggerText({
    text,
    className,
    wordClassName,
    as = "h1",
}: StaggerTextProps) {
    const words = text.split(" ");

    const content = words.map((w, i) => (
        <motion.span
            key={`${w}-${i}`}
            variants={word}
            className={`inline-block ${wordClassName ?? ""}`}
        >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
    ));

    const sharedProps = {
        className,
        variants: container,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.6 },
    } as const;

    switch (as) {
        case "h1":
            return <motion.h1 {...sharedProps}>{content}</motion.h1>;
        case "h2":
            return <motion.h2 {...sharedProps}>{content}</motion.h2>;
        case "h3":
            return <motion.h3 {...sharedProps}>{content}</motion.h3>;
        default:
            return <motion.p {...sharedProps}>{content}</motion.p>;
    }
}
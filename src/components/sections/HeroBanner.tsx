"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { TextRise } from "../custom/TextRise";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Heading, Paragraph } from "../includes/TypoGraphy";

export default function HeroBanner() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const isInView = useInView(imageContainerRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const fadeStart = 0.5;
  const fadeEnd = 0.9;
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, fadeStart, fadeEnd],
    [1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 20]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.98,
      filter: "brightness(0.9) contrast(1.08) blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "brightness(1) contrast(1) blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        staggerChildren: 0.2,
        delayChildren: 0.05,
      },
    },
  };

  const [isHover, setIsHover] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 90, damping: 20, mass: 1.05 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springScale = useSpring(isHover ? 1.035 : 1, springConfig);

  const [idleTime, setIdleTime] = useState(0);
  useEffect(() => {
    let raf: number;
    function animate() {
      setIdleTime((t) => t + 0.015);
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const isMobile = useIsMobile();
  const aspectRatio = isMobile ? 5 / 4 : 21 / 6;

  const maxX = isMobile ? 10 : 36;
  const maxY = isMobile ? 6 : 28;
  const idleX = isMobile ? 2 : 10;
  const idleY = isMobile ? 1.5 : 7;
  const maxRotate = isMobile ? 2.5 : 7;

  const imageX = useTransform(
    springX,
    (mouse) => (mouse - 0.5) * maxX + Math.sin(idleTime) * idleX
  );
  const imageY = useTransform(
    springY,
    (mouse) => (mouse - 0.5) * maxY + Math.cos(idleTime) * idleY
  );
  const imageRotate = useTransform(
    springX,
    (v) =>
      (v - 0.5) * maxRotate +
      Math.sin(idleTime) * 1.5 +
      Math.cos(idleTime * 0.7) * 1
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseEnter() {
    setIsHover(true);
  }
  function handleMouseLeave() {
    setIsHover(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      if (img.complete) {
        setImgLoaded(true);
      } else {
        img.onload = () => setImgLoaded(true);
      }
    }
  }, []);

  return (
    <section
      className="relative w-full py-5 md:py-7 lg:py-8 flex flex-col items-center justify-start overflow-visible font-sans bg-black min-h-[60vh] mt-[56px] md:mt-[100px] lg:mt-[120px]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 animate-gradient-x"
        />
        <motion.div
          className="absolute left-0 top-1/3 w-24 h-24 sm:w-36 sm:h-36 bg-[#42a5f5]/20 rounded-full blur-2xl animate-float-slow"
          animate={{ y: [0, 30, 0], x: [0, 40, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-14 h-14 sm:w-24 sm:h-24 bg-[#1565c0]/30 rounded-full blur-2xl animate-float-slow"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
          }}
        />
      </div>
      <div className="w-full max-w-[900px] mx-auto px-2 sm:px-4 md:px-8 lg:px-10 text-center">
        <div className="bg-black/75 rounded-xl shadow-xl py-4 px-2 sm:px-5 md:px-10 flex flex-col items-center gap-2">
          <motion.span
            initial={{ opacity: 0, y: -14, filter: "blur(2.5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
            }}
            className="inline-block px-[10px] sm:px-[13px] py-[4px] sm:py-[6px] rounded-full text-xs md:text-sm font-semibold mb-1 shadow bg-white/10 border border-white/20 backdrop-blur-md text-white relative z-20"
            style={{ boxShadow: "0 0 5px 1.5px #42a5f5, 0 0 0 1px #fff2" }}
          >
            <span className="relative z-10">
              Institute of Electrical and Electronics Engineers
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1565c0]/20 to-[#42a5f5]/20 blur-md opacity-25 animate-pulse z-0" />
          </motion.span>
          <Heading>
            <TextRise
              text="Welcome to IEEE NSUT"
              delay={0.5}
              perWord
              duration={1}
            />
          </Heading>
          <Paragraph>
            At IEEE NSUT, we unite to learn, teach, and innovate together. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </Paragraph>
        </div>
      </div>
      <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-1 sm:px-2 md:px-4 lg:px-8">
        <motion.div
          className="flex flex-col items-center w-full relative z-10"
          style={{
            scale,
            opacity,
            y,
          }}
        >
          <motion.div
            ref={imageContainerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative w-full"
          >
            <AspectRatio
              ratio={aspectRatio}
              className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl bg-gradient-to-br from-[#0a2540] via-[#1565c0] to-black"
            >
              <motion.div
                className="w-full h-full"
                style={{ perspective: 1200 }}
                onMouseMove={!isMobile ? handleMouseMove : undefined}
                onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <motion.div
                  style={{
                    x: imageX,
                    y: imageY,
                    rotate: imageRotate,
                    scale: springScale,
                    boxShadow: isHover
                      ? "0 32px 64px -16px rgba(0,0,0,0.35)"
                      : "0 12px 32px -8px rgba(0,0,0,0.25)",
                    cursor: !isMobile && isHover ? "pointer" : "default",
                    filter: imgLoaded
                      ? "blur(0px) brightness(1.04)"
                      : "blur(12px) brightness(0.97)",
                    transition: imgLoaded
                      ? "filter 0.8s cubic-bezier(0.42,0,0.58,1)"
                      : "filter 0.2s",
                  }}
                  animate={
                    imgLoaded
                      ? undefined
                      : { filter: "blur(12px) brightness(0.97)" }
                  }
                  transition={{
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1] as [
                      number,
                      number,
                      number,
                      number
                    ],
                  }}
                  className="w-full h-full"
                >
                  <Image
                    ref={imageRef}
                    src="/CoreMembers.jpg"
                    alt="IEEE NSUT Core Members Group Photo"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority
                    onLoad={() => setImgLoaded(true)}
                  />
                </motion.div>
              </motion.div>
            </AspectRatio>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

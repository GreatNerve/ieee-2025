import { useState, useEffect, useCallback, useRef } from "react";

const ChevronLeftIcon = ({ size = 24, className = "", style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ size = 24, className = "", style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const AnimatedCounter = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = 0;
          const end = parseInt(targetValue, 10);
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration]);

  const displayValue = `${count}${
    targetValue.toString().includes("+") ? "+" : ""
  }`;

  return <span ref={ref}>{displayValue}</span>;
};

export const ChaptersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentContentKey, setCurrentContentKey] = useState(0);

  const activities = [
    {
      id: 1,
      logoUrl:
        "https://pessyp.ieee.org/wp-content/uploads/sites/37/2024/09/image-4-1024x647.png",
      background: "black",
      title: "",
      description:
        "The IEEE Power & Energy Society, formerly the IEEE Power Engineering Society, is the oldest society of the IEEE focused on the scientific and engineering knowledge about electric power and energy.",
    },
    {
      id: 2,
      logoUrl:
        "https://wie.ieeer10.org/wp-content/uploads/2016/10/ieeer10_wie_logo_retina.png",
      background: "black",
      title: "",
      description:
        "The Women in Engineering Affinity Group of IEEE promotes gender diversity and supports professional development for women in engineering and technology fields.",
    },
    {
      id: 3,
      logoUrl:
        "https://www.ieeecsvit.com/static/darklogo-0604a0fe26f4c4783ef9e27819e9bb25.png",
      background: "black",
      title: "",
      description:
        "The IEEE Computer Society Chapter is a subgroup of IEEE dedicated to advancing computing technology and fostering knowledge exchange among professionals and students in the field.",
    },
    {
      id: 4,
      logoUrl:
        "https://www.ieee-ras.org/images/ras-resources/IEEE_RAS_logo_4C_stacked-HiRes.fw.png",
      background: "black",
      title: "",
      description:
        "The Robotics and Automation Chapter of IEEE focuses on advancing research, development, and application of robotics and automation technologies.",
    },
    {
      id: 5,
      logoUrl:
        "https://vcip2025.itec.aau.at/wp-content/uploads/2025/06/assets_task_01jx2tkbb3f4evyyg832rqdhtw_1749220517_img_0-e1749221232467-768x273.webp",
      background: "black",
      title: "",
      description:
        "The Circuits and Systems Chapter of IEEE specializes in advancing the theory, design, and implementation of circuits and system for various application in electronics and technology.",
    },
    {
      id: 6,
      logoUrl: "https://ias.ieeesbcek.org/images/iaswhite.png",
      background: "black",
      title: "",
      description:
        "IEEE IAS advances the practical use of electrical and electronic engineering in industry by connecting academia and professionals through innovation and collaboration.",
    },
  ];

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % activities.length;
    const nextImageUrl = activities?.[nextIndex]?.logoUrl;
    if (nextImageUrl) {
      const img = new Image();
      img.src = nextImageUrl;
    }

    const prevIndex =
      (currentIndex - 1 + activities.length) % activities.length;
    const prevImageUrl = activities?.[prevIndex]?.logoUrl;
    if (prevImageUrl) {
      const img = new Image();
      img.src = prevImageUrl;
    }
  }, [currentIndex, activities]);

  const changeSlide = useCallback(
    (newIndex) => {
      if (newIndex === currentIndex || isAnimating) return;

      setIsAnimating(true);
      setCurrentContentKey((prev) => prev + 1);

      setTimeout(() => {
        setCurrentIndex(newIndex);
        setTimeout(() => {
          setIsAnimating(false);
        }, 600);
      }, 100);
    },
    [[currentIndex, isAnimating, activities]]
  );

  const nextSlide = () => {
    const newIndex =
      currentIndex === activities.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? activities.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const goToSlide = (index) => {
    changeSlide(index);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "#e2e8f0",
      }}
    >
      <section
        className="section-padding animate-fade-in"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="animate-fade-in animate-pulse-glow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "800px",
            height: "800px",
            borderRadius: "9999px",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            filter: "blur(3rem)",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="header-text animate-fade-in">
            Chapters and Affinity Groups
          </h2>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <p className="subheader-text animate-fade-in">
              Chapters and affinity groups are the pivotal segments of the IEEE
              architecture, meticulously designed to provide tailored
              opportunities, foster innovation, and cultivate professional
              growth among students.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingBottom: "0",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginTop: "-80px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="swiper-container"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.005)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div className="swiper-height">
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  transition:
                    "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {activities.map((activity, index) => (
                  <div
                    key={activity.id}
                    style={{
                      position: "relative",
                      flexShrink: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        background: activity.background,
                      }}
                    />
                    {index === currentIndex && (
                      <div
                        key={activity.id + "-content-" + currentContentKey}
                        className={`slide-content-wrapper ${
                          isAnimating ? "animate-slide-out" : "animate-slide-in"
                        }`}
                      >
                        {activity.logoUrl ===
                        "https://pessyp.ieee.org/wp-content/uploads/sites/37/2024/09/image-4-1024x647.png" ? (
                          <img
                            src={activity.logoUrl}
                            alt={activity.title}
                            className="responsive-logo"
                            loading="lazy"
                            style={{ marginTop: "40px" }} // Increased from 25px to 40px
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                "https://placehold.co/256x256/cccccc/000000?text=Logo+Error";
                            }}
                          />
                        ) : (
                          <img
                            src={activity.logoUrl}
                            alt={activity.title}
                            className="responsive-logo"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                "https://placehold.co/256x256/cccccc/000000?text=Logo+Error";
                            }}
                          />
                        )}
                        <div
                          className="slide-content-box"
                          // Added marginTop: -Xpx to shift text up
                          style={
                            activity.logoUrl ===
                            "https://pessyp.ieee.org/wp-content/uploads/sites/37/2024/09/image-4-1024x647.png"
                              ? { marginTop: "-15px" }
                              : {}
                          }
                        >
                          <h3
                            className="slide-title"
                            style={{ animationDelay: "0.1s" }}
                          >
                            {activity.title}
                          </h3>
                          <p
                            className="slide-description"
                            style={{ animationDelay: "0.2s" }}
                          >
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="nav-button nav-button-left animate-press"
              aria-label="Previous slide"
              disabled={isAnimating}
            >
              <ChevronLeftIcon
                size={24}
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              />
            </button>

            <button
              onClick={nextSlide}
              className="nav-button nav-button-right animate-press"
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <ChevronRightIcon
                size={24}
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              />
            </button>

            <div className="dot-indicators">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot-button animate-press ${
                    index === currentIndex
                      ? "dot-button-active"
                      : "dot-button-inactive"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                >
                  {index !== currentIndex && (
                    <span className="dot-hover-border"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingTop: "0",
          paddingBottom: "5rem",
          backgroundColor: "black",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="hide-scrollbar impact-cards-container">
            <div
              className="impact-card"
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p className="impact-value">
                <AnimatedCounter targetValue="250" duration={1000} />+
              </p>
              <p className="impact-label">Members</p>
            </div>
            <div
              className="impact-card"
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p className="impact-value">
                <AnimatedCounter targetValue="20" duration={1000} />+
              </p>
              <p className="impact-label">Awards</p>
            </div>
            <div
              className="impact-card"
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p className="impact-value">
                <AnimatedCounter targetValue="80" duration={1000} />+
              </p>
              <p className="impact-label">Events</p>
            </div>
            <div
              className="impact-card"
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p className="impact-value">
                <AnimatedCounter targetValue="1" duration={1000} />
              </p>
              <p className="impact-label">Student Branch</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

 import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { imageCoach } from "../utils/ImageCoach";
import { Link } from "react-router-dom";

const ServicesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const services = [
    {
      title: "Une autre maternité est possible",
      text: "Nous croyons que la maternité peut être une source de puissance et de croissance – pas seulement un rôle épuisant. Notre vision est de faire de chaque foyer un ancrage de paix, de joie et de spiritualité.",
      image: imageCoach.coach_four,
    },
    {
      title: " Nos Fondactrices Hanni & Hanni, deux mamans, deux approches, une même mission :",
      text: "Hanni Segal et Hanni Wolf sont toutes deux mamans, enseignantes et coachs parentales certifiées. Elles ont accompagné des centaines de femmes grâce à des formations, conférences et ateliers à travers le monde.",
      image: imageCoach.coach_one,
    },
    {
      title: " Services de Consultations ",
      text: "Prenez rendez-vous avec nos experts en développement personnel.",
      image: imageCoach.coach_two,
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container position-relative">
        <h2 className="text-center mb-5 fw-bold text-uppercase" style={{color: 'var(--clr-pumpkin)'}}>Notre vision</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          style={{ paddingBottom: "60px" }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="card shadow-lg border-0 mx-auto"
                style={{
                  maxWidth: "500px",
                  minHeight: "450px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title mb-3" style={{fontSize: "20px"}}>{service.title}</h4>
                  <p className="card-text text-muted mb-4" style={{fontSize: "17px"}}>{service.text}</p>
                  <Link to="/contact"><button
                    className="btn fw-bold"
                    style={{
                      background: "var(--clr-pumpkinDark)",
                      color: "#fff",
                      padding: "10px 30px",
                    }}
                  >
                    En savoir plus
                  </button></Link>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flèches de navigation personnalisées */}
        <div
          ref={prevRef}
          className="swiper-button-prev"
          style={{
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#000",
          }}
        />
        <div
          ref={nextRef}
          className="swiper-button-next"
          style={{
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#000",
          }}
        />
      </div>
    </section>
  );
};

export default ServicesSlider;

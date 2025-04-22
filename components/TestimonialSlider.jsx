import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Ellisabes ",
    position: "Customer",
    message:
      "Carlos Roberto De Araujo Junior has been a concrete and collaborative client over the whole research process, by defining achievable deadlines and goals. I would work again with him without doubts.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Juanse was very communicative and easy to work with. I look forward to working with him again in the future.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Very good skills and understanding of client needs.",
  },
  {
    image: "/Alex V..png",
    name: "Alex V",
    position: "Customer",
    message:
      "Juan's technical skills were impressive. He quickly resolved complex issues and delivered high-quality code. I'm excited to see what he accomplishes in future projects.",
  },
  {
    image: "/Asad Saleem.png",
    name: "Asad Saleem",
    position: "Customer",
    message:
      "Carlos Roberto De Araujo Junior proved to be an excellent team player, always willing to lend a hand and share knowledge with others. His collaborative spirit greatly enhanced our team's dynamic, and I would gladly work with him again.",
  },
  {
    image: "/David F.png",
    name: "David F",
    position: "Customer",
    message:
      "Sebastian consistently demonstrated a positive attitude throughout the project. His enthusiasm was contagious, making it a pleasure to collaborate with him. I hope to work with him again soon.",
  },
  {
    image: "/Leigha M..png",
    name: "Leigha M.",
    position: "Customer",
    message:
      "Juan has an incredible knack for problem-solving. He approached each challenge with a strategic mindset, leading the team toward effective solutions. I look forward to collaborating with him in future endeavors.",
  },
  {
    image: "/Lucas Credie.png",
    name: "Lucas Credie",
    position: "Customer",
    message:
      "Juan's attention to detail is commendable. He ensured that every aspect of the project was meticulously executed, leading to a polished final product. I genuinely enjoyed working with him and would welcome the opportunity to do so again.",
  },
  {
    image: "/Talynn Harman.png",
    name: "Talynn Harman",
    position: "Customer",
    message:
      "Carlos Roberto De Araujo Junior showcased remarkable adaptability throughout our project. He easily adjusted to changing requirements and provided valuable insights that kept us on track. I would be thrilled to have him on my team again.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;

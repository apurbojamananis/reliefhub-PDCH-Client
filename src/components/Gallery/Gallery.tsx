import SwiperGallerySlider from "./SwiperGallerySlider";

const Gallery = () => {
  return (
    <section className="bg-[#E3F5F5] py-16 py-lg-28 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto">
        <h3 className="text-2xl mb-5 ">Gallery</h3>
        <h2>See Our Work</h2>
        <p className="text-paragraphColor mt-10 max-w-[100ch]">
          Explore our dynamic carousel showcasing photos of health and medical supplies donations
          and humanitarian works. transparency and trust are at the heart of what we do. We invite
          you to browse through our collection, witnessing the impact of our efforts firsthand.
          Every image tells a story of hope, compassion, and positive change.
        </p>
      </div>
      <div className="mt-10">
        <SwiperGallerySlider />
      </div>
    </section>
  );
};

export default Gallery;

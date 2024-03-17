import { currentToken } from "@/redux/features/auth/AuthSlice";
import { usePostTestimonialsMutation } from "@/redux/features/testimonials/testimonialsApi";

import { useAppSelector } from "@/redux/hooks";
import verifyToken from "@/utils/verifyToken";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const token = useAppSelector(currentToken);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [testimonialData] = usePostTestimonialsMutation();
  let user: any;
  if (token) {
    user = verifyToken(token);
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const testimonialInfo = {
      ...data,
      username: user?.name,
      email: user?.email,
      timeStamp: new Date(),
    };
    await testimonialData(testimonialInfo);
    reset();
    toast.success("Supply Created Successfully");
  };

  return (
    <div className="container px-4 my-10 mx-auto rounded-lg bg-white ">
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg  p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title" className="text-xl font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Put your title here"
              {...register("title", { required: true })}
            />
            <p className="text-red-500">
              {errors.title && errors.title.type === "required" && (
                <span role="alert">*This is required</span>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="image" className="text-xl font-semibold">
              Image
            </label>
            <input
              type="text"
              id="image"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Your image link"
              {...register("image", { required: true })}
            />
            <p className="text-red-500">
              {errors.image && errors.image.type === "required" && (
                <span role="alert">*This is required</span>
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-10 mt-10">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="testimonial" className="text-xl font-semibold">
              Testimonial
            </label>
            <textarea
              id="testimonial"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Write About us"
              rows={6}
              {...register("testimonial", { required: true, maxLength: 250 })}
            />
            <p className="text-red-500">
              {errors.testimonial && errors.testimonial.type === "required" && (
                <span role="alert">*This is required</span>
              )}
              {errors.testimonial && errors.testimonial.type === "maxLength" && (
                <span role="alert">*Max length exceeded 250 letter</span>
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="bg-secondaryColor px-3 py-2 text-white font-semibold hover:bg-transparent hover:text-secondaryColor outline outline-1 hover:outline-secondaryColor transition-all"
          >
            Create Testimonial
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;

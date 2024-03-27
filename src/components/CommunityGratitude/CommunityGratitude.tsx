import { usePostCommunityGratitudeMutation } from "@/redux/features/communityWall/communityWallApi";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import verifyToken from "@/utils/verifyToken";
import { currentToken } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { TError } from "../VolunteerRegisterComp/VolunteerRegisterComp";

const CommunityGratitude = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const token = useAppSelector(currentToken);
  // const userInfo = useAppSelector(currentUser);
  const [updateData] = usePostCommunityGratitudeMutation();

  let user: any;
  if (token) {
    user = verifyToken(token);
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const alertId = toast.loading("Data posting...");
    try {
      if (token) {
        const currentUserName = user?.name;
        const currentUserEmail = user?.email;
        const postData = {
          ...data,
          timestamp: new Date(),
          username: currentUserName,
          email: currentUserEmail,
        };
        const result: any | TError = await updateData(postData);
        if (result?.error?.status === 400) {
          toast.error(result?.error?.data?.message, {
            id: alertId,
            duration: 2000,
          });
        } else {
          toast.success("Data post successfully", {
            id: alertId,
            duration: 2000,
          });
        }

        reset();
      } else {
        toast.error("Please Login First!", {
          id: alertId,
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-secondaryColor hover:bg-transparent hover:outline hover:outline-[1px] hover:outline-secondaryColor hover:text-secondaryColor px-10 py-2 text-white font-semibold transition-all">
            Add to the Gratitude Wall
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] dark:text-gray-200 dark:bg-gray-800">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Share What You're Grateful For</DialogTitle>
            </DialogHeader>
            <div className=" py-4">
              <textarea
                id="comment"
                rows={8}
                className=" w-full p-2 rounded-lg focus:outline-secondaryColor border border-secondaryColor dark:bg-gray-500"
                placeholder="Share your experience"
                {...register("comment", { required: true, maxLength: 120 })}
              />
              <p className="text-red-500">
                {errors.comment && errors.comment.type === "required" && (
                  <span role="alert">*This is required</span>
                )}
                {errors.comment && errors.comment.type === "maxLength" && (
                  <span role="alert">*Max length exceeded</span>
                )}
              </p>
            </div>
            <DialogClose asChild>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={cn(
                    "px-3 py-2 bg-secondaryColor text-white font-medium hover:bg-transparent outline outline-1 hover:outline-secondaryColor hover:text-secondaryColor transition-all",
                    {
                      "opacity-50 cursor-not-allowed":
                        errors?.comment?.type === "required" ||
                        errors?.comment?.type === "maxLength",
                    }
                  )}
                  disabled={
                    errors?.comment?.type === "required" || errors?.comment?.type === "maxLength"
                  }
                >
                  Share
                </button>
              </div>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommunityGratitude;

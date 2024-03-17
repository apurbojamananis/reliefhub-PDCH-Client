import { useGetCommunityGratitudeQuery } from "@/redux/features/communityWall/communityWallApi";
import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import moment from "moment";

type TGratitude = {
  _id: string;
  username: string;
  comment: string;
  timestamp: string;
};

const backgroundColors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
];
const Community = () => {
  const { data } = useGetCommunityGratitudeQuery(undefined);

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="gratitudeWallBG ">
        <div className="container mx-auto  ">
          <div className="flex justify-center items-center min-h-[350px]">
            <div className="z-10 flex flex-col gap-8">
              <h2 className="text-white block">Community Gratitude Wall</h2>
              <div className="flex justify-center">
                <PrimaryButton>Add to the Gratitude Wall</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto ">
        <div className="grid grid-cols-6 gap-4 py-10 px-2">
          {data?.map((item: TGratitude, index: number) => {
            const randomIndex = index % 5;
            return (
              <div key={item._id} className="">
                <div
                  className={`min-h-44 px-4 py-4 rounded-lg shadow-sm shadow-gray-600 dark:shadow-secondaryColor ${backgroundColors[randomIndex]}`}
                >
                  <div className="flex justify-between items-center">
                    <a className=" text-textColor cursor-pointer dark:text-gray-200">
                      {item.username}
                    </a>
                    <span className="text-sm  text-textColor dark:text-gray-400">
                      {moment(item.timestamp).fromNow(true)} ago
                    </span>
                  </div>
                  <div className="size-full mt-5">
                    <p className="mt-2 text-textColor font-semibold dark:text-gray-300">
                      " {item.comment} "
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  PhoneCall,
  TwitterIcon,
} from "lucide-react";

const Head = () => {
  return (
    <header className="bg-primaryColor dark:bg-green-900">
      <div className="container mx-auto hidden sm:flex justify-between items-center text-white  min-h-10">
        <div className="flex gap-5">
          <a href="#">
            <FacebookIcon className="bg-white text-primaryColor p-1 rounded-full font-bold" />
          </a>
          <a href="#">
            <TwitterIcon className="bg-white text-primaryColor p-1 rounded-full font-bold" />
          </a>
          <a href="#">
            {" "}
            <InstagramIcon className="bg-white text-primaryColor p-1 rounded-full font-bold" />
          </a>
          <a href="#">
            <LinkedinIcon className="bg-white text-primaryColor p-1 rounded-full font-bold" />
          </a>
        </div>
        <div className="hidden sm:flex gap-8">
          <span className="flex  items-center gap-3 font-semibold">
            <PhoneCall /> <span>+1(234) 000 000</span>
          </span>
          <span className="flex items-center gap-3 font-semibold">
            <Mail />
            <span>test@email.com</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Head;

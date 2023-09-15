import Link from "next/link";
import {
  LinkedinIcon,
  TwitterIcon,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="f-left">

        </div>
        <div className="">
            {/* social icons */}
          <div className="flex mt-4">
            <a
              href="#"
              className="f-icons"
            >
              <Facebook fill="#FFFFFF" size={20} />
            </a>
            <a
              href="#"
              className="f-icons"
            >
              <TwitterIcon fill="#FFFFFF" size={20} />
            </a>
            <a
              href="#"
              className="f-icons"
            >
              <LinkedinIcon fill="#FFFFFF" size={20} />
            </a>
          </div>
        </div>
        <div className="f-right">

        </div>
    </footer>
  );
};

export default Footer;
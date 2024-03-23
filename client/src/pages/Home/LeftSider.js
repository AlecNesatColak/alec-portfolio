import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-5 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/alecnesatcolak/">
            <i>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-gray-400"
              />
            </i>
          </a>
          <i>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-gray-400"
            />
          </i>
          <a href="https://github.com/AlecNesatColak">
            <i>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl text-gray-400"
              />
            </i>
          </a>
          <i>
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl text-gray-400"
            />
          </i>
        </div>
        <div className="w-[1px] h-52 bg-secondary opacity-65 sm:w-52 sm:h-[1px] sm:mb-3"></div>
      </div>
    </div>
  );
}

export default LeftSider;

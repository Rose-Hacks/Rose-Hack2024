import Link from "../Link";
import Contacts from "./Contacts";
import { useSession } from "next-auth/react";

const Content = () => {
  const { data: session } = useSession();
  return (
    <div className="relative text-white w-full flex flex-col items-center">
      <p className="w-full text-center font-advent text-4xl md:text-5xl drop-shadow-pink-200">
        ROSEHACK 2024
      </p>
      <div className="w-9/12 md:w-fit backdrop-blur-md rounded-3xl mt-3">
        <p className="font-orbitron text-center mb-0 p-2 border-[1px] rounded-t-3xl border-white/20 w-full text-lg md:text-2xl text-white bg-gradient-to-r from-white/20 to-white/0">
          January 20 - 21
        </p>
        <div className="p-3 border-t-0 border-[1px] rounded-b-3xl border-white/20 w-full text-white bg-gradient-to-b from-black/50 to-black/0 font-orbitron flex flex-col items-center">
          <Contacts />
          <div className="my-3 flex flex-col md:flex-col w-full gap-3 justify-center">
            {session &&
            (session.user.roles.participants === 0 ||
              session.user.roles.participants === 1) ? (
              <Link
                link="/user"
                text="dashboard"
                fromColor="from-rosehack-pink-200"
                toColor="to-rosehack-blue"
              />
            ) : null}
          </div>
          <Link
            link="/form/participant"
            text="Register Here"
            fromColor="from-rosehack-pink-200"
            toColor="to-rosehack-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

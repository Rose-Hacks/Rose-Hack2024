"use client";

import { useState } from "react";
import Status from "./Status";
import Questions from "./Questions";
import Confirmation from "./Confirmation";
import Image from "next/image";
import LOGO from "@/public/LOGO.svg";
import Button from "../../Button";
import { signOut } from "next-auth/react";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses,
  bypass = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1
  );

  return (
    <div className="w-full h-full overflow-y-scroll overflow-x-hidden flex flex-col items-center font-montserrat text-white">
      <div className="w-full flex flex-row justify-end mr-[10%]">
        <Button
          text="Sign Out"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          loading={loading}
          color="green"
        />
      </div>
      <Image src={LOGO} className="w-1/12 mt-12 mb-2" alt={`Logo`} />
      <div className="text-4xl font-thin font-advent">ROSEHACK 2025</div>
      <div className="w-10/12 md:w-1/2 xl:w-1/3 my-5">
        <p className="text-xl bg-gradient-to-r from-rosehack-pink-200/40 to-rosehack-blue/40 font-montserrat px-4 py-2 m-0">
          {header}
        </p>
        <div className="bg-white/10 p-3 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

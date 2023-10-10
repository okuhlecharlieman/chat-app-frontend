import React from "react";
import SignInModal from "../components/signInModal";
import SignupModal from "../components/signupModal";

function landing() {
  return (
    <div className="lg:p-40 p-11">
      <div className="lg:flex justify-center ">
        <div className="flex-auto md:w-1/2 ">
          <img
            src="https://i.ibb.co/PMkQTpZ/logo-no-background.png"
            alt="logo-no-background"
            border="0"
            className=" w-96 "
          />
        </div>
        <div className="flex-auto py-6 sm:p-11 md:w-1/2">
          <h1 className="text-4xl py-6 font-bold">
            Fed up with your{" "}
            <img
              src="https://i.ibb.co/4WVMrFz/61-UMo7-Th97-L-AC-SX425.jpg"
              alt="61-UMo7-Th97-L-AC-SX425"
              border="0"
              width={20}
            ></img>
            ? Mark yourself as liberated.
          </h1>
          <p className="text-slate-400">
            We specialize in social chatting services that connect people,
            foster relationships, and create meaningful interactions. Whether
            you're looking for a platform to socialize, network, or simply have
            fun conversations, we've got you covered.
          </p>

          <div className="flex my-6">
            <SignInModal />
            <SignupModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default landing;

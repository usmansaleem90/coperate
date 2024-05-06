import AuthWrapper from "@/components/Auth/Auth-Wrapper";
import Button from "@/components/UI/form-button";
import FormInputWrapper from "@/components/UI/form-input-wrapper";
import InputWrapper from "@/components/UI/input-wrapper";
import LabelWrapper from "@/components/UI/label-wrapper";
import Link from "next/link";

const NewUsernamePage = () => {
  return (
    <>
      {/* main container */}
      <AuthWrapper>
        <div className="w-full h-auto flex flex-col justify-start items-start p-[5%] space-y-10 text-start">
          {/* top div */}
          <div className="w-[80%] h-auto space-y-3">
            <h1 className="text-[#000000] font-bold text-3xl leading-9">
              Username
            </h1>
            <span className="text-[#52525B] font-normal text-base leading-5">
              See your user name and remember it & re-login it again with your
              user name. You cannot change it.
            </span>
          </div>

          {/* input div */}
          <div className="md:w-[70%] w-full h-auto space-y-12">
            <div className="w-full h-auto space-y-3">
              <FormInputWrapper>
                <LabelWrapper>Your Username</LabelWrapper>
                <InputWrapper
                  type={"text"}
                  placeholder={"Display Username"}
                  forgot={""}
                  placeholderColor={true}
                  link={""}
                  iconType={"copy"}
                />
              </FormInputWrapper>
            </div>

            {/* submit button */}
            <div className="w-full h-auto">
              <Link href={"/login"} className="w-full h-auto ">
                <Button>Continue</Button>
              </Link>
            </div>
          </div>
        </div>
      </AuthWrapper>
    </>
  );
};

export default NewUsernamePage;

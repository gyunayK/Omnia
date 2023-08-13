import Box from "@mui/material/Box";
import { StyledTextField, StyledTextField2, StyledButton } from "./StyledMUI";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephoneForward, BsInstagram } from "react-icons/bs";

function LetsTalk() {
  const form = useRef();

  const schema = z.object({
    user_name: z.string().min(2, { message: "Please enter a valid name." }),
    user_email: z.string().email({ message: "Please enter a valid email." }),
    user_subject: z.string().min(3, { message: "Subject is too short." }),
    message: z.string().min(5, { message: "Message is too short." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        "service_c60y4kb",
        "template_xlhx7hj",
        form.current,
        "tfrJ4KkGsoiHAZ6i1"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="letstalk"
      className="mt-[800px] relative font-Archivo px-5 md:px-0"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto  md:gap-40 ">
        <div>
          <h1 className="text-md font-bold pt-10 text-[#01AEEF]">
            READY FOR A BETTER LIFE?
          </h1>
          <h1 className="text-5xl pt-6 font-extrabold text-black">
            Let&apos;s Connect
          </h1>
          <p className="text-lg mt-4 mb-8 text-gray-600 max-w-[540px]">
            We value your feedback and inquiries. Drop us a message and
            we&apos;ll get back as soon as posible. Your privacy is paramount;
            rest assured, your details are safe with us.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <MdOutlineMailOutline fontSize={40} color="#D16EFF" />
              <div>
                <h1 className="text-2xl font-semibold t-10 text-[#01AEEF]">
                  Mail us
                </h1>
                <a
                  href="mailto:Omniaconsultingof@gmail.com"
                  className="text-[#D16EFF] text-lg underline"
                >
                  Omniaconsultingof@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <BsInstagram fontSize={40} color="#D16EFF" />
              <div>
                <h1 className="text-2xl font-semibold t-10 text-[#01AEEF]">
                  Instagram
                </h1>
                <a
                  href="https://www.instagram.com/omnia.consultingof/"
                  className="text-[#D16EFF] text-lg underline"
                >
                  @omnia.consultingof
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <BsTelephoneForward fontSize={40} color="#D16EFF" />
              <div>
                <h1 className="text-2xl font-semibold t-10 text-[#01AEEF]">
                  Call us
                </h1>
                <a
                  href="mailto:Omniaconsultingof@gmail.com"
                  className="text-[#D16EFF] text-lg "
                >
                  +1 (647) 491- 8888
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="min-w-5xl mt-10">
            <Box
              component="form"
              sx={{
                minWidth: "300px",

                textEmphasisColor: "white",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
              onSubmit={handleSubmit(sendEmail)}
              autoComplete="off"
              ref={form}
            >
              <StyledTextField
                id={"name"}
                register={register}
                errors={errors}
                name={"user_name"}
                label={"Name"}
              />
              <StyledTextField
                id={"email"}
                register={register}
                errors={errors}
                name={"user_email"}
                label={"Email"}
              />
              <StyledTextField
                id={"subject"}
                register={register}
                errors={errors}
                name={"user_subject"}
                label={"Subject"}
                formname={"_subject"}
              />

              <StyledTextField2
                id={"message"}
                register={register}
                errors={errors}
                name={"message"}
                label={"Message"}
              />
              <StyledButton
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitSuccessful}
              />
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;

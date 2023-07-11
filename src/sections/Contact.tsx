import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const formIsEmpty = () => {
    return !formData.name || !formData.email || !formData.message;
  };

  const [loading, setLoading] = useState(false);

  const email = api.sparkpostRouter.sendEmail.useMutation({
    onMutate() {
      toast.loading("Sending Form...");
      setLoading(true);
    },
    onSuccess() {
      toast.dismiss();
      toast.success("Successfully Submitted Form!");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    },
    onError() {
      toast.dismiss();
      toast.error("Error Submitting Form...");
      setLoading(false);
    },
  });

  const handleSubmit = () => {
    if (formIsEmpty()) {
      return;
    }

    email.mutate({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
  };

  return (
    <section className="bg-white py-6 text-[#0D151E]">
      <Toaster />
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
        <div className="py-6 md:px-6 md:py-0">
          <h1 className="tracking-narrow bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text font-raleway text-5xl font-extrabold text-transparent">
            Let&apos;s Get In Touch!
          </h1>
          <p className="pb-4 pt-2">
            Feel free to reach out and I will get back to you!
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <IconMapPin className="mr-2 h-5 w-5 sm:mr-6" />
              <span>Philadelphia, Pennsylvania</span>
            </p>
            <p className="flex items-center">
              <IconPhone className="mr-2 h-5 w-5 sm:mr-6" />
              <span>(610) 316-7252</span>
            </p>
            <p className="flex items-center">
              <IconMail className="mr-2 h-5 w-5 sm:mr-6" />
              <span>jrasmus6@jh.edu</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col space-y-6 py-6 md:px-6 md:py-0">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Full Name"
              className="input-bordered input input-md block w-full bg-[#2C3542] text-white placeholder:text-gray-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.currentTarget.value,
                })
              }
              value={formData.name}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="text"
              placeholder="info@email.com"
              className="input-bordered input input-md block w-full bg-[#2C3542] text-white placeholder:text-gray-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.currentTarget.value,
                })
              }
              value={formData.email}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              className="textarea block w-full bg-[#2C3542] text-white placeholder:text-gray-500"
              placeholder="Enter Message"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.currentTarget.value,
                })
              }
              value={formData.message}
              required
            />
          </label>
          <button
            className="btn-outline btn transition-all duration-75 ease-in-out hover:animate-pulse hover:border-none hover:bg-[#FF6000]"
            onClick={(e) => {
              handleSubmit();
              if (!formIsEmpty) {
                e.preventDefault();
              }
            }}
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

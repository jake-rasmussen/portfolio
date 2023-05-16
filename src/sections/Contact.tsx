import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const formIsEmpty = () => {
    return (!formData.name || !formData.email || !formData.message);
  }

  const [loading, setLoading] = useState(false);

  const email = api.nodemailer.sendEmail.useMutation({
    onMutate() {
      toast.loading("Sending Form...");
      setLoading(true);
    },
    onSuccess() {
      toast.dismiss();
      toast.success("Successfully Submitted Form!");
      setLoading(false);
    },
    onError() {
      toast.dismiss();
      toast.error("Error Submitting Form...");
      setLoading(false);
    }
  });

  const handleSubmit = () => {
    if (formIsEmpty()) {
      return;
    }

    email.mutate({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });
  }

  return (
    <section className="py-6 bg-white text-[#2C3542]">
      <Toaster />
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1  className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FF6000] to-[#FFA559] tracking-tighter">Get In Touch</h1>
          <p className="pt-2 pb-4">Feel free to reach out and I will get back to you!</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <IconMapPin className="w-5 h-5 mr-2 sm:mr-6" />
              <span>Philadelpia, Pennsylvania</span>
            </p>
            <p className="flex items-center">
              <IconPhone className="w-5 h-5 mr-2 sm:mr-6" />
              <span>(610) 316-7252</span>
            </p>
            <p className="flex items-center">
              <IconMail className="w-5 h-5 mr-2 sm:mr-6" />
              <span>jrasmus6@jh.edu</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="block input input-bordered input-md w-full bg-[#2C3542] placeholder:text-gray-500 text-white" 
              onChange={(e) => setFormData({
                ...formData, name: e.currentTarget.value
              })} 
              value={formData.name}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input 
              type="text" 
              placeholder="info@email.com" 
              className="block input input-bordered input-md w-full bg-[#2C3542] placeholder:text-gray-500 text-white"
              onChange={(e) => setFormData({
                ...formData, email: e.currentTarget.value
              })}
              value={formData.email}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea 
              className="block w-full textarea bg-[#2C3542] placeholder:text-gray-500 text-white"
              placeholder="Enter Message"
              onChange={(e) => setFormData({
                ...formData, message: e.currentTarget.value
              })} 
              value={formData.message}
              required
            />
          </label>
          <button 
            className="btn btn-outline hover:bg-[#FF6000] hover:border-none hover:animate-pulse transition-all ease-in-out duration-75"
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
  )

}

export default Contact;
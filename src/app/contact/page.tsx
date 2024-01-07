import { ContactForm } from "@/components/contact-form";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { myAddress, myEmail, myPhone } from "@/lib/constant";
import { HomeIcon, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <MaxWidthWrapper className="grid items-center gap-x-8 gap-y-16 md:grid-cols-2">
      <div className="space-y-2 max-w-[350px] md:mx-auto">
        <div className="flex items-center flex-wrap gap-1">
          <span className="h-[2px] bg-theme w-6" />
          <p>Say Hello</p>
          <span>👋</span>
        </div>
        <h1 className="font-bold text-6xl ">
          Let&apos;s <span className="text-theme">Work</span> Together
          <span className="text-theme">.</span>
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          facere!
        </p>
      </div>
      <div className="relative order-first md:order-[initial] max-w-[350px] sm:max-w-max mx-auto">
        <Image
          src="/images/contact/illustration-light.svg"
          alt="Illustration"
          width={500}
          height={500}
          className="dark:hidden mx-auto"
        />
        <Image
          src="/images/contact/illustration-dark.svg"
          alt="Illustration"
          width={500}
          height={500}
          className="hidden dark:block mx-auto"
        />
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-theme" />
          {myEmail}
        </div>
        <div className="flex items-center gap-3">
          <HomeIcon className="h-5 w-5 text-theme" />
          {myAddress}
        </div>
        <div className="flex items-center gap-3">
          <PhoneCall className="h-5 w-5 text-theme" />
          {myPhone}
        </div>
      </div>
      <ContactForm />
    </MaxWidthWrapper>
  );
};

export default ContactPage;

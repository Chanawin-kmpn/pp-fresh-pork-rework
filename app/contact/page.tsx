import ContactMethodCard from "@/components/ContactMethodCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-8 px-8 py-4 lg:flex-row lg:px-20 lg:py-12 xl:px-40 xl:py-16">
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <ContactMethodCard />
        </div>
      </div>
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10037.4664856741!2d100.24353328876467!3d13.715379501174029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ebb3413245c3%3A0x3457c3adabe8415c!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4nuC4tS7guJ7guLUuIOC5gOC4n-C4o-C4iuC4nuC4reC4o-C5jOC4hCDguIjguLPguIHguLHguJQ!5e1!3m2!1sth!2sth!4v1727928930017!5m2!1sth!2sth"
          loading="lazy"
          className="size-full min-h-80"
        ></iframe>
      </div>
    </div>
  );
};

export default page;

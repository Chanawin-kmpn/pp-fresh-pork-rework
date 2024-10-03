import {
  ChatBubbleLeftRightIcon,
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
const contactMethods = [
  {
    icon: <MapPinIcon className="size-6 text-red-500" />,
    title: "บริษัท พี.พี. เฟรชพอร์ค จำกัด",
    description:
      "98/6 หมู่ 5 ซอย ราษฏร์สามัคคี 3 ตำบล ท่าข้าม อำเภอ สามพราน จังหวัด นครปฐม 73110",
  },
  {
    icon: <ChatBubbleLeftRightIcon className="size-6 text-blue-500" />,
    title: "ส่งข้อความ",
    description: "Line: @ppfreshpork",
  },

  {
    icon: <PhoneIcon className="size-6 text-green-500" />,
    title: "เบอร์โทรศัพท์",
    description: "085-247-9479, 080-931-3628 ",
  },
  {
    icon: <AtSymbolIcon className="size-6 text-purple-500" />,
    title: "อีเมล",
    description: "ppfreshpork@gmail.com",
  },
];

const ContactMethodCard = () => {
  return (
    <>
      {contactMethods.map((method) => (
        <div key={method.title} className="flex items-center gap-4">
          <div
            className={clsx("inline-block rounded-full p-4", {
              "bg-blue-200": method.title === "ส่งข้อความ",
              "bg-red-200": method.title === "บริษัท พี.พี. เฟรชพอร์ค จำกัด",
              "bg-green-200": method.title === "เบอร์โทรศัพท์",
              "bg-purple-200": method.title === "อีเมล",
            })}
          >
            {method.icon}
          </div>
          <div className="space-y-2">
            <p className="text-large-bold">{method.title}</p>
            <p className="text-normal">{method.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactMethodCard;

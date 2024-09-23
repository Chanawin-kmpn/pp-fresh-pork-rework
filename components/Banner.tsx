import Link from "next/link";
import React from "react";
import CertificationBadge from "./CertificationBadge";
import { certificates } from "@/constant";

const Banner = () => {
  return (
    <div className="lg:bg-multi-image flex flex-col gap-4 bg-primary py-8 text-white lg:-mt-16 lg:gap-8 lg:py-16">
      <div className="z-10 flex flex-col items-center gap-4">
        <h1>ผลิตภัณฑ์คุณภาพดีเยี่ยม</h1>
        <p className="text-medium">สด สะอาด ปลอดภัย ได้มาตรฐาน</p>
        <Link
          className="text-medium-bold w-fit cursor-pointer rounded-full bg-third p-4"
          href="/products"
        >
          ดูสินค้าของเรา
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 lg:mx-16 lg:flex-row">
        {certificates.map((badge, index) => (
          <CertificationBadge
            key={index}
            icon={badge.icon}
            title={badge.title}
            desc={badge.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;

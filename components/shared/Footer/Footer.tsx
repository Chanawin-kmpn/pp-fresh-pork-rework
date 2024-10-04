import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 rounded-t-lg bg-white px-4 py-2 md:px-8 lg:justify-between lg:gap-8 lg:px-20 lg:pt-16">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
        <Link
          href="/"
          className="relative h-[90px] w-[125px] shrink-0 lg:h-[115px] lg:w-[160px]"
        >
          <Image
            src="/assets/images/logo/ppfreshpork-logo.webp"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 125px, 160px"
            alt="PP Fresh pork Logo"
            priority
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex flex-1 flex-col items-center gap-2 lg:items-start lg:gap-3 lg:self-start">
            <p className="text-large-bold">บริษัท พี.พี. เฟรชพอร์ค จำกัด</p>
            <p className="text-normal">
              ผลิตและจำหน่ายสินค้าแปรรูปหลากหลายจำพวกกลุ่มหมูกระทะ และ
              กลุ่มหมูชาบู สด สะอาด สะดวกรวดเร็ว ถูกสุขอนามัย
              คุณภาพของสินค้าเหมาะแก่การบริโภคในทุกรูปแบบ
            </p>
            <p className="text-normal">
              ผลิตภัณฑ์ทุกอย่างผ่านกระบวนการผลิตด้วยเครื่องจักร
              ที่ทันสมัยมีมาตรฐาน และเป็นบริษัทที่ได้รองรับโดยมาตรฐาน อย. GMP
              และ HACCP
            </p>
          </div>
          <div className="flex w-full flex-1 flex-col gap-2 lg:gap-3">
            <p className="text-large-bold text-center lg:text-left">
              ติดต่อเรา
            </p>
            <div className="flex gap-2">
              <p className="text-medium-bold min-w-fit">ที่อยู่:</p>
              <p className="text-normal">
                98/6 หมู่ 5 ซอย ราษฏร์สามัคคี 3 ตำบล ท่าข้าม อำเภอ สามพราน
                จังหวัด นครปฐม 73110
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-medium-bold min-w-fit">วันเวลาทำการ:</p>
              <p className="text-normal">จันทร์ - เสาร์ เวลา 9:00 - 17:00 น.</p>
            </div>
            <div className="flex gap-2">
              <p className="text-medium-bold min-w-fit">โทร:</p>
              <p className="text-normal">
                085-247-9479 <br />
                080-931-3628{" "}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-medium-bold min-w-fit">อีเมล:</p>
              <p className="text-normal">ppfreshpork@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:shrink-0">
        <hr className="bg-gray-600" />
        <p className="mt-2 text-center text-gray-600">
          Copyright 2024 &copy; P.P. Fresh Pork{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

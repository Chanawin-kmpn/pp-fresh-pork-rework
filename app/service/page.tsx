import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-8 py-4 lg:space-y-8 lg:px-20 lg:py-12 xl:px-40 xl:py-16">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="relative h-96 w-full lg:h-[750px]">
          <Image
            src={"https://fakeimg.pl/1120x750/"}
            fill
            alt="Service Image"
            className="object-contain"
          />
        </div>
        <p className="text-subtitle text-center text-primary">บริการของเรา</p>
        <div className="flex flex-col gap-4">
          <p className="">
            บริษัท พี.พี. เฟรชพอร์ค จำกัด
            ผู้ผลิตและจำหน่ายสินค้าแปรรูปจากเนื้อสัตว์คุณภาพ
            ที่ส่งออกตามร้านอาหารและจัดจำหน่ายโดยร้านค้าชั้นนำทั่วประเทศไทย
            นอกจากผลิตภัณฑ์หลักของเราแล้ว บริษัทฯ
            ยังมีสินค้าและบริการในด้านอื่นๆ
            ที่สามารถตอบสนองความต้องการของลูกค้าได้อย่างครบวงจร
          </p>
          <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">ผลิตภัณฑ์แปรรูปหลากหลาย:</span>
              <p className="text-normal text-gray-400">
                ตั้งแต่กลุ่มหมูหมัก เนื้อหมัก ไก่หมักหลากหลายรสชาติ
                เบคอนคุณภาพพรีเมี่ยม ที่มีทั้งสูตรหมูขุนและสูตรแม่พันธุ์
                ให้คุณเลือกตามความต้องการ
                ไปจนถึงกลุ่มหมูสไลด์สำหรับหมูกระทะและหมูชาบู
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">สินค้าพันม้วนแร๊ป:</span>
              <p className="text-normal text-gray-400">
                ชิ้นส่วนเนื้อแดงพันม้วนแร๊ป เพื่อนำไปแปรรูป
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">บริการ OEM:</span>
              <p className="text-normal text-gray-400">
                รับผลิตสินค้าตามความต้องการเฉพาะของลูกค้า
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">มาตรฐานระดับสากล:</span>
              <p className="text-normal text-gray-400">
                ได้รับการรับรองมาตรฐาน อย., GMP และ HACCP
                รับประกันคุณภาพและความปลอดภัย
              </p>
            </li>
          </ul>
          <p className="text-normal text-gray-400">
            ด้วยกระบวนการผลิตที่ทันสมัย ได้มาตรฐาน และใส่ใจในทุกขั้นตอน
            เราพร้อมส่งมอบผลิตภัณฑ์ที่สะอาด สะดวก รวดเร็ว และถูกสุขอนามัย
            เหมาะสำหรับการบริโภคในทุกรูปแบบ
          </p>
        </div>
        <div className="mx-auto space-y-4 text-center">
          <p className="text-subtitle text-primary">
            สนใจผลิตภัณฑ์หรือบริการของเรา?
          </p>
          <p className="text-medium">
            เรายินดีต้อนรับทุกท่านที่สนใจเยี่ยมชมโรงงานหรือต้องการข้อมูลเพิ่มเติม
          </p>
          <Link
            className="text-large-bold inline-block rounded-full bg-third px-4 py-2 text-white"
            href={"/contact"}
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

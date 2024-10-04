import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-4 px-8 py-4 lg:space-y-8 lg:px-20 lg:py-12 xl:px-40 xl:py-16">
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <div className="flex-1">
          <Image
            src="https://fakeimg.pl/544x468/"
            width={544}
            height={468}
            alt="Manufactury image"
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-subtitle text-primary">
            บริษัท พี.พี. เฟรชพอร์ค จำกัด
          </p>
          <p className="text-normal">
            ก่อตั้งขึ้นในปี 2562 บริษัท พี.พี. เฟรชพอร์ค จำกัด
            เป็นผู้นำในการผลิตและจำหน่ายผลิตภัณฑ์แปรรูปจากเนื้อสัตว์คุณภาพสูง
            เรามุ่งมั่นที่จะนำเสนอสินค้าที่สด สะอาด และสะดวกต่อการบริโภค
            ตอบสนองความต้องการของลูกค้าในทุกรูปแบบ
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex-1 space-y-4">
          <p className="text-subtitle text-primary">ทำไมต้องเลือกเรา</p>
          <ol className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">
                ความหลากหลายของผลิตภัณฑ์:
              </span>
              <p className="text-normal text-gray-400">
                เรามีสินค้าที่ครอบคลุมทุกความต้องการ
                ตั้งแต่เนื้อหมักพร้อมปรุงไปจนถึงเนื้อสไลด์สำหรับร้านอาหาร
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">คุณภาพระดับพรีเมียม:</span>
              <p className="text-normal text-gray-400">
                ด้วยการรับรองมาตรฐานระดับสากล
                เราการันตีคุณภาพและความปลอดภัยของทุกผลิตภัณฑ์
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">นวัตกรรมการผลิต:</span>
              <p className="text-normal text-gray-400">
                เราใช้เครื่องจักรที่ทันสมัยในกระบวนการผลิต
                ทำให้ได้ผลิตภัณฑ์ที่มีคุณภาพสม่ำเสมอและปลอดภัย
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">
                ความยืดหยุ่นในการให้บริการ:
              </span>
              <p className="text-normal text-gray-400">
                ด้วยบริการ OEM เราสามารถตอบสนองความต้องการเฉพาะของลูกค้าแต่ละราย
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">ความโปร่งใส:</span>
              <p className="text-normal text-gray-400">
                เรายินดีให้ลูกค้าเยี่ยมชมโรงงาน
                แสดงถึงความมั่นใจในกระบวนการผลิตของเรา
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">
                ประสบการณ์และความเชี่ยวชาญ:
              </span>
              <p className="text-normal text-gray-400">
                แม้จะเป็นบริษัทที่ก่อตั้งในปี 2562
                แต่เราได้สั่งสมความเชี่ยวชาญในอุตสาหกรรมอาหารแปรรูป
                ทำให้เราเข้าใจความต้องการของตลาดเป็นอย่างดี
              </p>
            </li>
            <li className="space-y-2 rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
              <span className="text-medium-bold">
                การส่งมอบที่รวดเร็วและตรงเวลา:
              </span>
              <p className="text-normal text-gray-400">
                เรามุ่งมั่นในการส่งมอบผลิตภัณฑ์ที่สดใหม่ถึงมือลูกค้าอย่างรวดเร็วและตรงเวลา
              </p>
            </li>
          </ol>
        </div>
        <div className="flex-1">
          <Image
            src="https://fakeimg.pl/544x468/"
            width={544}
            height={468}
            alt="Production line image"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

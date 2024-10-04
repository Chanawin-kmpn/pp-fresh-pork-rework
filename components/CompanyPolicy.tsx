import { initiatives } from "@/constant";
import PolicyBadge from "./Badge/PolicyBadge";

const CompanyPolicy = () => {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-subbanner mb-8 text-center text-primary">
          ใส่ใจทุกขั้นตอน เพื่อคุณภาพชีวิตที่ดีขึ้น
        </p>
        <p className="text-large mb-12 text-center text-gray-600">
          ที่ พี.พี. เฟรชพอร์ค
          เรามุ่งมั่นในการดำเนินธุรกิจอย่างยั่งยืนและรับผิดชอบต่อสังคม
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((policy, index) => (
            <PolicyBadge
              key={index}
              icon={policy.icon}
              title={policy.title}
              desc={policy.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicy;

import { CertificateProp, Initiative } from "@/types/types";
import { Leaf, Recycle, Users, Shield, Sun, Heart } from "lucide-react";

export const navLink = [
  {
    href: "/products",
    label: "ผลิตภัณฑ์",
    icon: "",
  },
  {
    href: "/service",
    label: "บริการของเรา",
  },
  {
    href: "/about",
    label: "เกี่ยวกับเรา",
  },
  {
    href: "/contact",
    label: "ติดต่อเรา",
  },
];

export const certificates: CertificateProp[] = [
  {
    icon: "certificate",
    title: "รับรองมาตรฐานโรงงาน",
    desc: "ผ่านการรับรองคุณภาพระดับสากล",
  },
  {
    icon: "like",
    title: "รับประกันความพึงพอใจ",
    desc: "ลูกค้าพึงพอใจกับคุณภาพของเรา",
  },
  {
    icon: "fish-food",
    title: "ทำอาหารได้ง่าย",
    desc: "ผลิตภัณฑ์พร้อมปรุง สะดวกรวดเร็ว",
  },
];

export const initiatives: Initiative[] = [
  {
    icon: "eco",
    title: "การผลิตที่เป็นมิตรต่อสิ่งแวดล้อม",
    desc: "ใช้เครื่องจักรทันสมัยเพื่อลดการใช้พลังงานและทรัพยากร",
  },
  {
    icon: "shield",
    title: "มาตรฐานความปลอดภัยและคุณภาพ",
    desc: "ได้รับการรับรองมาตรฐาน GMP, อย. และ HACCP",
  },
  {
    icon: "handshake",
    title: "การสนับสนุนเกษตรกรท้องถิ่น",
    desc: "ร่วมมือกับเกษตรกรในท้องถิ่นเพื่อจัดหาวัตถุดิบคุณภาพ",
  },
  {
    icon: "diversity-2",
    title: "นวัตกรรมผลิตภัณฑ์",
    desc: "พัฒนาผลิตภัณฑ์ที่หลากหลายเพื่อตอบสนองความต้องการของผู้บริโภค",
  },
  {
    icon: "volunteer-activism",
    title: "การพัฒนาชุมชน",
    desc: "มอบผลิตภัณฑ์และทุนทรัพย์เพื่อสนับสนุนโครงการช่วยเหลือชุมชน",
  },
  {
    icon: "fact-check",
    title: "ความโปร่งใสและความรับผิดชอบ",
    desc: "เปิดโอกาสให้ลูกค้าและผู้สนใจเยี่ยมชมสินค้าและโรงงาน",
  },
];

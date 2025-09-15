import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Thời Trang Nam", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-cb4m7x1ohqkv21" },
  { name: "Điện Thoại & Phụ Kiện", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-z6pryb3k2jkvf6" },
  { name: "Thiết Bị Điện Tử", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-wl5j6r5g3jkvf5" },
  { name: "Máy Tính & Laptop", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-nx7d2r5g2jkvf3" },
  { name: "Máy Ảnh & Máy Quay Phim", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-fj2d2r5g1jkvf1" },
  { name: "Đồng Hồ", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-fj2d2r5g1jkvf9" },
  { name: "Giày Dép Nam", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-xxx" },
  { name: "Thiết Bị Điện Gia Dụng", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-yyy" },
  { name: "Thể Thao & Du Lịch", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-zzz" },
  { name: "Ô Tô & Xe Máy & Xe Đạp", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-aaa" },
  { name: "Thời Trang Nữ", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-bbb" },
  { name: "Mẹ & Bé", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ccc" },
  { name: "Nhà Cửa & Đời Sống", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ddd" },
  { name: "Sắc Đẹp", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-eee" },
  { name: "Sức Khỏe", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-fff" },
  { name: "Giày Dép Nữ", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ggg" },
  { name: "Túi Ví Nữ", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-hhh" },
  { name: "Phụ Kiện & Trang Sức Nữ", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-iii" },
  { name: "Bách Hóa Online", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-jjj" },
  { name: "Nhà Sách Online", img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-kkk" },
];

const Categories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow relative">
      <h2 className="text-white">DANH MỤC</h2>

      {/* Nút trái */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scroll ngang */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-16 h-16 object-contain mb-2 rounded-full border"
            />
            <p className="text-xs">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Nút phải */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Categories;

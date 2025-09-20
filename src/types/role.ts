export type UserRole =
  | "admin"       // quản trị hệ thống
  | "manager"     // quản lý
  | "technician"  // kỹ thuật viên
  | "consultant"  // tư vấn viên
  | "customer"    // khách mua hàng (đã đăng nhập)
  | "guest";      // khách vãng lai (chưa đăng nhập)
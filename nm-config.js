/* NOIR MAISON — CẤU HÌNH KẾT NỐI (file nhỏ, sửa được ngay trên điện thoại)
 *
 * 1) Điền 2 dòng supabaseUrl + supabaseKey để:
 *      - đơn hàng khách đặt TỰ ĐỘNG vào trang admin
 *      - admin sửa được chữ, ảnh, sản phẩm, giá, thanh toán… và web cập nhật theo
 *    (Lấy ở Supabase → Project Settings → API: "Project URL" và khóa "anon / publishable".
 *     TUYỆT ĐỐI không dán khóa "service_role".)
 * 2) Để trống 2 dòng này thì web vẫn chạy bằng dữ liệu có sẵn, nhưng đơn KHÔNG tự gửi về shop.
 */
window.NM_CONFIG = {
  supabaseUrl: "https://etbygopummjxrzdaufxh.supabase.co",
  supabaseKey: "sb_publishable_sHwlO3cWcD4TBP3QbrJN5A_VNzuGNnQ",

  // Tài khoản nhận tiền mặc định (admin → Thanh toán sẽ ghi đè khi đã kết nối Supabase)
  bank: { bin: "970407", code: "TCB", name: "Techcombank", account: "19072227509017", holder: "DANG THI HUONG" },

  // Link Zalo của shop (nút "Nhắn Zalo", "Gửi đơn qua Zalo")
  zalo: "https://zaloapp.com/qr/p/1ojf4icc8o3yq"
};

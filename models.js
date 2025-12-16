// ===============================================
// Cấu Trúc Dữ liệu Độc Lập cho Đơn hàng (Order)
// ===============================================
class Order {
    constructor(tenDonHang, diaChi, thoiGianGiao) {
        // Tạo ID duy nhất, đảm bảo là chuỗi và đã trim
        this.id = tenDonHang ? String(tenDonHang).trim() : ('order_' + Math.random().toString(36).slice(2,8));
        this.tenDonHang = tenDonHang ? String(tenDonHang).trim() : '';
        this.diaChi = diaChi ? String(diaChi).trim() : '';
        this.thoiGianGiao = thoiGianGiao || null; 
        
        // Các thuộc tính sẽ được thêm vào sau (Geocoding, Graph Coloring)
        this.lat = null; 
        this.lng = null; 
        this.trangThai = 'Chưa phân phối'; 
        this.mauSac = null; // Màu (Xe) được phân công
    }
}

// ===============================================
// Quản lý trạng thái ứng dụng (State management)
// ===============================================
let appState = {
    orders: null, // Mảng các đối tượng Order
    graph: null,  // Đồ thị xung đột
    coloring: null, // Kết quả tô màu (phân bổ xe)
    currentStep: 0,
    isStepMode: false,
    isPlaying: false,
    currentView: 'map' // map hoặc graph
};
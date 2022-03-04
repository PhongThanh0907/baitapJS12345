document.getElementById("btnTinh").onclick = function () {
    //Đầu vào
    const Luong = 100000;
    var ngayLam = document.getElementById("txtNgayLam").value;
    //Xử Lý
    var tienLuong = ngayLam * Luong;
    //Format
    var currentFomat = new Intl.NumberFormat('vn-VN');
    //Đầu ra
    var tongTienLuongVND = currentFomat.format(tienLuong);
    var ketQua = "<div>";
    ketQua += "<p>Lương nhân viên: " + tongTienLuongVND + "</p>";
    document.getElementById("footerTienLuong").innerHTML = ketQua;
};

document.getElementById("btnTinhTB").onclick = function () {
    //Đầu vào
    var nhapSo1 = document.getElementById("txtsoThuc1").value*1;
    var nhapSo2 = document.getElementById("txtsoThuc2").value*1;
    var nhapSo3 = document.getElementById("txtsoThuc3").value*1;
    var nhapSo4 = document.getElementById("txtsoThuc4").value*1;
    var nhapSo5 = document.getElementById("txtsoThuc5").value*1;
    //Xử Lý
    var tongSo = (nhapSo1 + nhapSo2 + nhapSo3 + nhapSo4 + nhapSo5) / 5;
    //Đầu ra
    var ketQua = "<div class='alert alert-danger' >";
    ketQua += "<p>Trung bình 5 số là: " + tongSo + "</p>";
    document.getElementById("footerTrungBinh").innerHTML = ketQua;
};

document.getElementById("btnTinhTiien").onclick = function () {
    //Đầu vào
    const dongVND = 23500;
    var nhapSoUSD = document.getElementById("txtdoiTien").value;
    //Xử Lý
    var thanhTien = nhapSoUSD * dongVND;
    //Format
    var currentFomat = new Intl.NumberFormat('vn-VN');
    //Đầu ra
    var tongtienVND = currentFomat.format(thanhTien);
    var ketQua = "<div class='alert alert-danger'>";
    ketQua += "<p> Thành Tiền VNĐ: " + tongtienVND + "</p>";
    document.getElementById("footerdoiTien").innerHTML = ketQua;
};

document.getElementById("btnchuVi").onclick = function () {
    //Đầu vào
    var chieuDai = document.getElementById("txtchieuDai").value*1;
    var chieuRong = document.getElementById("txtchieuRong").value*1;
    //Xử Lý
    var chuVi = ( chieuDai + chieuRong ) * 2;
    var dienTich = chieuDai * chieuRong;
    //Đầu ra
    var ketQua = "<div>";
    ketQua += "<p>Chu vi HCN là: " + chuVi + "</p>";
    ketQua += "<p>Diện tích HCN là: " + dienTich + "</p>";
    document.getElementById("footerketQua").innerHTML = ketQua;
}

document.getElementById("btntinhtongSo").onclick = function () {
    //Đầu vào
    var nhapSo = document.getElementById("txtnhapSo").value;
    //Xử lý
    var soHangChuc = Math.floor(nhapSo / 10);
    var soHang = Math.floor(nhapSo % 10);
    var tong2So =  soHangChuc + soHang;
    //Đầu ra
    var ketQua = "<div class='alert alert-danger'>";
    ketQua += "<p>Tổng 2 ký số là: " + tong2So + "</p>";
    document.getElementById("footertinhTong2So").innerHTML = ketQua;
}
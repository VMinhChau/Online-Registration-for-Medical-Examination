// Layouts
import { NotLinearBar } from '../components/Layout';
import { None } from '../components/Layout';
import { None2 } from '../components/Layout';

import TrangChu from '../pages/TrangChu';
import GioiThieu from '../pages/GioiThieu';
import DangKy from '../pages/DangKy';
import DangNhap from '../pages/DangNhap';
import QuyTrinh from '../pages/QuyTrinh';
import LienHe from '../pages/LienHe';
// import ThacMac from '../pages/ThacMac';
// import ThacMac from '../pages/ThacMac';
import ThongTinChuyenKhoa from '../pages/ChuyenKhoa/ThongTinChuyenKhoa';
import KhoaHoHap from '../pages/ChuyenKhoa/KhoaHoHap';
import KhoaTaiMuiHong from '../pages/ChuyenKhoa/KhoaTaiMuiHong';
import KhoaMat from '../pages/ChuyenKhoa/KhoaMat';

import TaoMoiHoSo from '../pages/TaoMoiHoSo';
import ChonHoSo from '../pages/ChonHoSo';
import ChonChuyenKhoa from '../pages/ChonChuyenKhoa';
import ChonBacSi from '../pages/ChonBacSi';
import ChonLichKham from '../pages/ChonLichKham';
import XacNhanThongTin from '../pages/XacNhanThongTin';
import ThanhToan from '../pages/ThanhToan';

import TraCuuThongTin from '../pages/TraCuuThongTin';
import ChiTietHoSo from '../pages/TraCuuThongTin/ChiTietHoSo';
import SuaHoSo from '../pages/TraCuuThongTin/SuaHoSo';
import NhapHoSoBacSi from '../pages/NhapHoSoBacSi';
import NhapLichKhamBacSi from '../pages/NhapLichKhamBacSi';
import ChinhSuaLichKhamBacSi from '../pages/ChinhSuaLichKhamBacSi';

import TraLoiThacMacChuyenMon from '../pages/TraLoiThacMacChuyenMon';
import TraLoiThacMacChuyenMon1 from '../pages/TraLoiThacMacChuyenMon1';

import DangNhapAdmin from '../pages/DangNhapAdmin';
import ThongKeLuotTruyCap from '../pages/ThongKeLuotTruyCap';
import QuanLyTaiKhoan from '../pages/QuanLyTaiKhoan';
import TaoTaiKhoanDacBiet from '../pages/TaoTaiKhoanDacBiet';

import ThongKePhieuKham from '../pages/ThongKePhieuKham';

// public routes
const publicRoutes = [
    { path: '/', component: TrangChu, layout: NotLinearBar }, // path: '/', component: trangChu, exact: true'}
    { path: '/gioi-thieu', component: GioiThieu, layout: NotLinearBar },
    { path: '/quy-trinh', component: QuyTrinh, layout: NotLinearBar },
    { path: '/lien-he', component: LienHe, layout: NotLinearBar },
    { path: '/dang-ky', component: DangKy, layout: null },
    { path: '/dang-nhap', component: DangNhap, layout: null },
    { path: '/chuyen-khoa', component: ThongTinChuyenKhoa, layout: NotLinearBar },
    // { path: '/thac-mac', component: ThacMac, layout: NotLinearBar },
    { path: '/khoa-ho-hap', component: KhoaHoHap },
    { path: '/khoa-tai-mui-hong', component: KhoaTaiMuiHong },
    { path: '/khoa-mat', component: KhoaMat },

    // these pages below need customer permission, temporary write here
    { path: '/tao-moi-ho-so', component: TaoMoiHoSo },
    { path: '/chon-ho-so', component: ChonHoSo },
    { path: '/chon-chuyen-khoa', component: ChonChuyenKhoa },
    { path: '/chon-bac-si', component: ChonBacSi },
    { path: '/chon-lich-kham', component: ChonLichKham },
    { path: '/xac-nhan-thong-tin', component: XacNhanThongTin },
    { path: '/thanh-toan', component: ThanhToan },

    { path: '/tra-cuu', component: TraCuuThongTin },
    { path: '/chi-tiet-ho-so', component: ChiTietHoSo },
    { path: '/sua-ho-so/:id', component: SuaHoSo },

    // these pages below need task administrator permission, temporary write here
    { path: '/dang-nhap-admin', component: DangNhapAdmin, layout: null },
    { path: '/nhap-ho-so-bac-si', component: NhapHoSoBacSi, layout: None2 },
    { path: '/nhap-lich-kham-bac-si', component: NhapLichKhamBacSi, layout: None2 },
    { path: '/chinh-sua-lich-kham-bac-si', component: ChinhSuaLichKhamBacSi, layout: None2 },

    // the page below need medical answer permission, temporary write here
    { path: '/tra-loi-thac-mac-chuyen-mon', component: TraLoiThacMacChuyenMon, layout: None2 },
    { path: '/tra-loi-thac-mac-chuyen-mon-1', component: TraLoiThacMacChuyenMon1, layout: None2 },

    // these pages below need system administrator permission, temporary write here
    { path: '/thong-ke-luot-truy-cap', component: ThongKeLuotTruyCap, layout: None2 },
    { path: '/quan-ly-tai-khoan', component: QuanLyTaiKhoan, layout: None2 },
    { path: '/tao-tai-khoan-dac-biet', component: TaoTaiKhoanDacBiet, layout: None2 },

    // the page below need management permission, temporary write here
    { path: '/thong-ke-phieu-kham', component: ThongKePhieuKham, layout: None2 },
];
// must login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

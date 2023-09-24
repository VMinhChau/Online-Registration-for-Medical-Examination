import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import * as ReactDOM from 'react-dom';
import styles from './ThongKePhieuKham.module.scss';
// import { Filter, Operators, TextFilter, NumericFilter, BooleanFilter } from '@progress/kendo-react-data-tools';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { UserContext } from '../../components/UserContext';
import DatePicker from 'react-multi-date-picker';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
// import { facultyOptions } from './faculty';
import makeAnimated from 'react-select/animated';
import { HandIndexFill } from 'react-bootstrap-icons';

import whiteLogo from '../../assets/images/white_logo.jpg';

const cx = classNames.bind(styles);
const animatedComponents = makeAnimated();

const facultyOptions = [
    { value: 'ChamSocGiamNhe', label: 'CHĂM SÓC GIẢM NHẸ' },
    { value: 'ChuyenGiaThanKinh', label: 'CHUYÊN GIA THẦN KINH' },
    { value: 'DaLieu', label: 'DA LIỄU' },
    { value: 'DauManTinh', label: 'ĐAU MẠN TÍNH' },
    { value: 'DiUng', label: 'DỊ ỨNG - MIỄN DỊCH LÂM SÀNG' },
    { value: 'HAnhHocCanThiep', label: 'H. ẢNH HỌC CAN THIỆP' },
    { value: 'HoHap', label: 'HÔ HẤP' },
    { value: 'HoaTri', label: 'HOÁ TRỊ' },
    { value: 'HuyetHoc', label: 'HUYẾT HỌC' },
    { value: 'KhamVaTuVanDinhDuong', label: 'KHÁM VÀ TƯ VẤN DINH DƯỠNG' },
    { value: 'LaoKhoa', label: 'LÃO KHOA' },
    { value: 'LongNgucMachMau', label: 'LỒNG NGỰC - MẠCH MÁU' },
    { value: 'Mat', label: 'MẮT' },
];
const data = [
    {
        name: 'Page A',
        TamLy: 4000,
        ThanKinh: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        TamLy: 3000,
        ThanKinh: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        TamLy: 2000,
        ThanKinh: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        TamLy: 2780,
        ThanKinh: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        TamLy: 1890,
        ThanKinh: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        TamLy: 2390,
        ThanKinh: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        TamLy: 3490,
        ThanKinh: 4300,
        amt: 2100,
    },
];

function ThongKePhieuKham() {
    const [user, setUser] = useContext(UserContext);
    const [thongke, setthongke] = useState(false);
    const handleThongKe = () => {
        setthongke = true;
    };

    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date('11/11/2022'));
    const [endDate, setEndDate] = useState(new Date('15/11/2022'));
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = ({ currentTarget: input }) => {
        const data = { ...selectedOption };
        data[input.name] = input.value;
        setSelectedOption(data);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('startDate', startDate);
        console.log('endDate', endDate);
        console.log('selectedOption', selectedOption);
    };
    return (
        <div className={cx('ThongKePhieuKham')}>
            <div id="ThongKePhieuKhamP">
                <p>Chọn ngày bắt đầu</p>
            </div>

            <div class="row justify-content-center">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    value={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <p>Chọn ngày kết thúc</p>
            <div class="row justify-content-center">
                <DatePicker
                    selected={endDate}
                    value={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </div>
            <p>Chọn chuyên khoa cần thống kê</p>
            <div class="row justify-content-center">
                <div class="col-6">
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[facultyOptions[0], facultyOptions[1]]}
                        isMulti
                        setSelectedOption
                        options={facultyOptions}
                        selectedOption={selectedOption}
                        isSearchable={true}
                    />
                </div>
                <button onClick={handleSubmit} type="button" class="btn btn-primary btn-lg">
                    Large button
                </button>
            </div>
            {/* /*   //////////////////////////////  */}
            <p>Biểu đồ thống kê</p>
            <div class="row">
                <div class="col-12 d-flex justify-content-center text-center">
                    <ComposedChart width={1000} height={500} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar dataKey="ThanKinh" barSize={20} fill="#413ea0" />
                        <Bar dataKey="TamLy" barSize={20} fill="#82ca9d" />
                        <Line type="monotone" dataKey="amt" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
}

export default ThongKePhieuKham;

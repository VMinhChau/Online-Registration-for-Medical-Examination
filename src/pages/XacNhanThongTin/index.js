// import { provideLocalizationService } from '@progress/kendo-react-intl';
import classNames from 'classnames/bind';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect} from "react";
import axios from 'axios';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './XacNhanThongTin.module.scss';
const cx = classNames.bind(styles);

function XacNhanThongTin() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);

    const context = useContext(UserContext);
    const [user, setUser] = context[0];
    const [patient, setPatient] = useState({});
    useEffect(() => {
        getPatient();
    },[]);

    const getPatient = () => {
        const sendData = {
            userID: user.key, 
            id: location.state.patientID
        }
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/lookupone`, sendData)
        .then((result) => {
            setPatient(result.data);
            console.log(result.data);

        })
        .catch((error) => {
            console.log(error.response);
        });
    }


    return (
        <div className={cx('style_wrapper_content')}>
            <div className={cx('style_bg_breakcum')}>
                <div data-test="container" className={cx('container')}>
                    <div data-test="row" className={cx('row')}>
                        <div data-test="col" className={cx('col-12')}>
                            <div className={cx('style_wrap_mdbreadcrumb', 'style_head')}>
                                <nav data-test="breadcrumb">
                                    <ol style={{margin: '0 40rem'}} className={cx('breadcrumb')}>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            <a href="../">Trang chủ</a>
                                        </li>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            Xác nhận thông tin
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div data-test = "container" className='container'>
                    <div data-test="row" className={cx('row row_mobile')}>
                        <div data-test="col" className={cx('col-md-12', 'col-lg-3')}>
                            <div style={{border: '0'}} data-test="card" className={cx('card', 'style_panels')}>
                                <div data-test="card-header" className={cx('card-header', 'style_panels_header')}>Thông tin bệnh nhân</div>
                                <div data-test="card-body" className={cx('card-body', 'mb-4', 'style_card_body')}>
                                    <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                            <i className={cx('far', 'fa-user-circle')}></i>
                                            {patient.name}
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                            <i className={cx('far', 'fa-mobile-alt')}></i>
                                            {patient.phone}
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                            <i className={cx('far', 'fa-map-marker')}></i>
                                            {patient.address}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div data-test="col" className={cx('col-md-12', 'col-lg-9')}>
                            <div style={{border: 'none'}} data-test="card" className={cx('card', 'style_panels', 'style_panel_mobile')}>
                                <div data-test="card-header" className={cx('card-header', 'style_panels_header')}>
                                    <h2 className={cx('style_title_component', 'style_title_choose_date', 'style_space_between', 'style_title_header_mobile')}>
                                        <span>Xác nhận thông tin khám</span>
                                    </h2>
                                </div>
                                <div data-test="card-body" className={cx('card-body', 'style_card_body')}>
                                    <div data-test="table" className={cx('table-responsive')}>
                                        <table className={cx('table', 'style_tableResponsive')}>
                                            <thead data-test="table-head">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Chuyên khoa</th>
                                                    <th>Dịch vụ</th>
                                                    <th>Bác sĩ</th>
                                                    <th>Giờ khám</th>
                                                    <th>Tiền khám</th>
                                                </tr>
                                            </thead>
                                            <tbody data-test="table-body">
                                                <tr>
                                                    <td>1</td>
                                                    <td>{location.state.specialization}</td>
                                                    <td>Khám dịch vụ</td>
                                                    <td>{location.state.doctor.name}</td>
                                                    <td>
                                                        {location.state.time} {location.state.date}
                                                    </td>
                                                    <td>{location.state.doctor.price}</td>
                                                    <td className={cx('d-none')}>0 đ</td>
                                                    <td>
                                                        <button data-test="button" type="button" className={cx('btn-flat', 'btn', 'Ripple-parent', 'style_button')}>
                                                            <div>
                                                                <i className={cx('far fa-trash-alt')}></i>
                                                                Xóa
                                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                                            </div>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div style={{margin: '1.6rem 0 0 0'}} data-test="card-header" className={cx('card-header', 'style_panels_header', 'd-none', 'd-lg-block')}>
                                    <div>Thông tin bệnh nhân</div>
                                </div>
                                <div data-test="card-body" className={cx('card-body', 'style_card_body', 'd-none', 'd-lg-block')}>
                                    <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-user')}></i>
                                                Họ và tên &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                <strong>{patient.name}</strong>
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-venus-mars')}></i>
                                                Giới tính &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                {patient.gender}
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-calendar-alt')}></i>
                                                Ngày sinh &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                {patient.birthday}
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-id-card')}></i>
                                                CMND &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                {patient.cmnd}
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-at')}></i>
                                                Email &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                {patient.email}
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-users')}></i>
                                                Dân tộc &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                {patient.ethnicity}
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-credit-card')}></i>
                                                Mã số BHYT &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                Chưa cập nhật
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-map-marker')}></i>
                                                Địa chỉ &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                {patient.address}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('style_next_prev')}>
                                    <button onClick={() => navigate('/chon-lich-kham')} style={{backgroundColor:'#fff'}} data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button')}>
                                        <div>Quay lại</div>
                                        <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                    </button>
                                    <ul className={cx('list-unstyle', 'list-inline', 'm-0', 'p-0')}>
                                        <li className={cx('list-inline-item', 'm-0', 'pr-3')}>
                                            <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create')}>
                                                <div>Thêm chuyên khoa</div>
                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </button>
                                        </li>
                                        <li className={cx('list-inline-item', 'm-0')}>
                                            <Link to='/thanh-toan' state={{...location.state}}>
                                            <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create', 'style_buttonArrow')}>
                                                <div>Xác nhận
                                                    <i style={{fontWeight: '600'}} className={cx('fa-regular', 'fa-arrow-right')}></i>
                                                </div>
                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default XacNhanThongTin;

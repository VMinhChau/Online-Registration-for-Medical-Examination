import classNames from 'classnames/bind';
import doctorImage from '../../assets/images/doctor_image.png';
import styles from './TrangChu.module.scss';
import backgroundImage from '../../assets/images/hospital_background.jpg';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';
import { useContext } from 'react';
const cx = classNames.bind(styles);
function TrangChu() {
    const context = useContext(UserContext);
    const [user, setUser] = context[0];
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('middle')}>
                    <div className={cx('title')}>ĐẶT LỊCH KHÁM</div>
                    <div className={cx('description')}>Đặt lịch khám theo chuyên khoa, chuyên môn, bác sĩ.</div>

                    <div className={cx('right')}>
                        <img
                            src={
                                'https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2022_05_12/5_bai_bien_hoang_so_dep_nhat3_1.jpg'
                            }
                            className={cx('doctorImage')}
                        ></img>
                    </div>
                    {/* <div className={cx('button')}>
                        <a href="./chon-ho-so">Đăng ký khám</a>
                    </div> */}
                    {user.key === 0 ? (
                        <Link to="/dang-nhap">
                            <button type="button" class="btn btn-warning btn-lg button-dang-ky">
                                Đặt lịch khám
                            </button>
                        </Link>
                    ) : (
                        <Link to="/chon-ho-so">
                            <button type="button" class="btn btn-warning btn-lg button-dang-ky">
                                Đặt lịch khám
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="card ">
                        <div class="card-body">
                            <p className={cx('card-title')}>Tra cứu thông tin</p>
                            <p class="card-text" className={cx('card-text')}>
                                Tại đây quý khách có thể tra cứu thông tin đặt chỗ, thông tin bệnh nhân, lịch khám...
                            </p>
                            {user.key === 0 ? (
                                <Link to="/dang-nhap" class="btn btn-primary">
                                    Tra cứu thông tin
                                </Link>
                            ) : (
                                <Link to="/tra-cuu" class="btn btn-primary">
                                    Tra cứu thông tin
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <div class="card-body">
                            <p className={cx('card-title')}>Các vấn đề thường gặp</p>
                            <p class="card-text" className={cx('card-text')}>
                                Vấn đề trong quá trình khám <br /> Vấn đề về dấu hiệu và tính trạng bệnh...
                            </p>
                            <Link to="/thac-mac" class="btn btn-primary">
                                Các vấn đề thường gặp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center"></div>
        </div>
    );
}

export default TrangChu;

// {
//     <div className={cx('content')}>
//         <div className={cx('middle')}>
//             <div className={cx('title')}>
//                 <h1>Chào mừng bạn đến với</h1>
//                 <h1>Phòng khám đa khoa</h1>
//                 <h1>Đại Học Y Dược</h1>
//             </div>
//             <div className={cx('description')}>
//                 <p>
//                     Phòng khám đa khoa Đại học Y Dược là một trong những phòng khám đa khoa uy tín, chuyên nghiệp tại Hà
//                     Nội. Chúng tôi có đội ngũ bác sĩ chuyên nghiệp, giàu kinh nghiệm, luôn sẵn sàng phục vụ bạn.
//                 </p>
//             </div>
//             <div className={cx('button')}>
//                 <a href="./dang-ky">Đăng ký khám</a>
//             </div>
//         </div>
//         <div className={cx('right')}>
//             <img src={doctorImage} className={cx('doctorImage')}></img>
//         </div>
//     </div>;
// }

{
    /* <div class="card" style="width: 18rem;">
    <img src={doctorImage} class="card-img-top" alt="..." />
    <div class="card-body">
        <h5
            class="card-title
                        "
        >
            Card title
        </h5>
        <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
            Go somewhere
        </a>
    </div>
</div>; */
}

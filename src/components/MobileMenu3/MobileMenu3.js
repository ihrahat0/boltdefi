import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '#',
    },
]

const MobileMenu3 = ({ setLaunchModalOpen }) => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="mobail-menu main_menu_list unordered_list text-uppercase">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="menu-item menu-item-has-children active">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <NavLink onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</NavLink>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <NavLink className="active"
                                to={item.link}>{item.title}</NavLink>
                        }
                    </ListItem>
                )
            })}
            <ul className='MuiList-root MuiList-padding css-h4y409-MuiList-root'>
                <li>
                    <Link to="id_pepecoin_about_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="About">About</span>
                    </Link>
                </li>
            </ul>
            <ul className='MuiList-root MuiList-padding css-h4y409-MuiList-root'>
                <li>
                    <Link to="id_pepecoin_feature_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="How to buy">How to buy</span>
                    </Link>
                </li>
            </ul>
            <ul className='MuiList-root MuiList-padding css-h4y409-MuiList-root'>
                <li>
                    <Link to="id_pepecoin_tokenomics_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="Tokenomics">Tokenomics</span>
                    </Link>
                </li>
            </ul>
            <ul className='MuiList-root MuiList-padding css-h4y409-MuiList-root'>
                <li>
                    <Link to="id_pepecoin_roadmap_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="Tokenomics">Roadmap</span>
                    </Link>
                </li>
                <li>
                    <div className="pepecoin_btn text-dark" onClick={() => setLaunchModalOpen(true)} style={{ cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 40px', marginTop: '20px' }}>
                        <span className="btn_label" style={{ position: 'relative', zIndex: 2, fontWeight: 'bold' }}>Buy $BOLT</span>
                        <span className="btn_bg" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                            <svg viewBox="0 0 180 62" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <path d="M1.08526 12.4119C-0.482482 6.10381 4.29004 0 10.79 0H169.211C175.711 0 180.484 6.10384 178.916 12.4119L175.495 26.1761C174.708 29.3439 174.708 32.6561 175.495 35.8239L178.916 49.5881C180.484 55.8962 175.711 62 169.211 62H10.79C4.29004 62 -0.48248 55.8962 1.08526 49.5881L4.50607 35.8238C5.29333 32.6561 5.29333 29.3439 4.50607 26.1762L1.08526 12.4119Z" fill="#FBE354" />
                            </svg>
                        </span>
                    </div>
                </li>
            </ul>
        </ul>
    )
}

export default MobileMenu3;
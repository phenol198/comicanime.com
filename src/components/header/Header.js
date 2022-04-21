
// import styles from './Header.module.css'
import { ListComics, ListCategorys} from '../data/dataheader';
import './header.scss'


function Header() {
    return (
    <>
      <div className="header">
        <a href='/' className="headerIcon">
            <img 
            className="headerIconImg"
            src='https://sstruyen.com/assets/img/xsstruyen_logo.png.pagespeed.ic.N91c9QiQhy.webp'/>
        </a >
        <div className="headerNavbar">
            <div className="headerNavbarList">
                <div className="headerNavbarItem headerNavbarItemComics">
                    <i className="fa-solid fa-folder-open"></i>
                    Danh sách 
                    <i className="fa-solid fa-angle-down"></i> 
                    <div className="headerNavbarListComics">
                    <ul >
                        {ListComics.map((ListComic, index) => (
                            <li className="headerNavbarListComicsItem" key={index}>{ListComic}</li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="headerNavbarItem headerNavbarItemCategory"> 
                    Thể loại 
                    <i className="fa-solid fa-angle-down"></i>
                    <div className="headerNavbarListCategorys">
                        <ul >
                            {ListCategorys.map((ListCategorys, index) => (
                        <li className="headerNavbarListCategorysItem" key={index}>{ListCategorys}</li>
                    ))}
                        </ul>
                     </div>
                </div>
            </div>
            
        </div>
        <div className="headerSearch">
            <button className="headerButton" >Lọc truyện</button>
            <input className="headerSearchInput" placeholder="Nhập tên Truyện hoặc Tác giả" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
  
  
    </>
    );
  }
  
  export default Header;
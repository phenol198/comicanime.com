import { Routes, Route , Link} from 'react-router-dom'
import './Body.scss'
import {Comics} from '../data/dataBody'
import { ListComics, ListCategorys } from '../data/dataheader'
import { useState } from 'react'



function Body () {
    const [idComic, setIdComic] = useState(0)

    const ButtonHeaderMenu = (contents) => {
        return (
            <div className="bodyHeaderMenu" onClick ={handleBodyHeaderMenu}>
                        <span>
                        {contents.content}
                        <i className="fa-solid fa-angle-down"></i>
                        </span>
                        <div className="bodyNavbarListComics">
                            <ul>
                                <li className="bodyNavbarListComicsItem">{contents.content}</li>
                                {ListComics.map((ListComic, index) => (
                                    <li className="bodyNavbarListComicsItem" key={index}>{ListComic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
        )
    }
    const CategoryComics = () => {
        return (
            <div className='categoryComic'>
                <div className='categoryComicHeader'>Thể loại truyện</div>
                <div className='categoryComicBody'>
                    <div className="headerNavbarListComics">
                        <ul >
                            {ListComics.map((ListComic, index) => (
                                <li className="headerNavbarListComicsItem" key={index}>{ListComic}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="headerNavbarListCategorys">
                        <ul >
                            {ListCategorys.map((ListCategorys, index) => (
                        <li className="headerNavbarListCategorysItem" key={index}>{ListCategorys}</li>
                             ))}
                        </ul>
                     </div>
                </div>
            </div>
        )
    }

    const handleBodyHeaderMenu = () => {
        const ativeHeaderMenu = document.querySelector('.bodyNavbarListComics')
        ativeHeaderMenu.classList.toggle('ative')
    }

    const handleModal = (idComic) => {
        const ativeModal = document.querySelector('.contentModal')
        ativeModal.classList.toggle('ative')
        setIdComic(idComic)
        document.querySelector('.body').style.display = 'none';
    }
    const handleCloseModal = () => {
      document.querySelector('.contentModal').classList.remove('ative')
      document.querySelector('.body').style.display = 'block';
    }
    return (
        <>
            <div className="body">
                <div className="bodyHeader">
                    <div className="bodyHeaderObject">
                        Truyện Hot
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <ButtonHeaderMenu content="Tất cả"/>
                </div>
                <div className="bodyContent grid-row">
                    {
                        Comics.map((Comic, index) => (
                            <div className="bodyContentItem grid__column-2" key={index} onClick={() => handleModal(Comic)}>
                                <a href='#'>
                                    <img src={Comic.src}/>
                                    <p> {Comic.name}</p>
                                    <i className="fa-solid fa-star"></i>
                                    <div className="bodyContentFull">Full</div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='contentComic'></div> 
                <div className="bodySeeMore">
                <button className="bodyButton">Xem thêm</button>
                </div>
                <div className="bodyUpdate grid-row">
                    <div className="bodyUpdateContent grid__column-10">
                    okok
                    </div>
                    <div className="bodyUpdateLists grid__column-2">
                        hello ae
                    </div>
                </div>

                
            </div>
            <div className='contentModal'>
                <div className='contentModalBack' onClick={handleCloseModal}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='contentModalWrap grid__full-width grid__row'>
                    <div className='contentModalImg grid__column-2'>
                        <img src={idComic.src}/>  
                    </div> 
                    <div className='contentModalDescription'>
                        <div>
                            <h1>{idComic.name}</h1>
                            <div>
                                <span>{idComic.description}</span>
                            </div>

                        </div>
                    </div>   
                    <div className='contentModalCategori grid__column-2'>
                        <CategoryComics />
                    </div>       
                </div>
            </div>
    </>
        )
    }

export default Body
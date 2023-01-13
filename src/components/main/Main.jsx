import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { Store } from '../../provider/Provider'
import { BASE_URL } from '../../Constants/Constants'
import AxiosService from '../../services/AxiosServices'

const Main = () => {

    const context = useContext(Store)

    const axiosService = new AxiosService()

    const [openCard, setOpenCard] = useState(false)
    const [indexCard, setIndexCard] = useState(0)

    const { cards, setCards } = context;

    const handleMouseEnter = (index, event) => {
            setOpenCard(true)
            setIndexCard(index)
    }

    useEffect(() => {
        const getCards = async () => {
            /* const response = await axios.get('https://my-json-server.typicode.com/Racknar0/fakeJson/data')
            setCards(response.data) */
            axiosService.getData(BASE_URL).then((response) => {
                setCards(response)
            })

        }
        getCards()
    }, [])

  return (
    <div className="main">
        <p>Nuevas Recetas</p>

        <div className='slider-container'>
            
            {
                cards && cards.map((card, index) => (
                    <div className='slide'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => setOpenCard(false)}
                    key={index}
                >
                    <img src={`./assets/${card.img}`} alt="" />
                    {
                        openCard && indexCard === index ?  (<div className='card-open-container'>
                        <div className='container-porcion'>
                            <img src="./assets/icons/ic_portion.svg" alt="ic_portion" className='icon-card-open' />
                            <p className='card-open-text1'>Tamaño de la porción</p>
                            <p className='card-open-text2'>{card.portion} Raciones</p>
                        </div>
                        <div className='container-prep'>
                            <img src="./assets/icons/ic_time.svg" alt="ic_time" className='icon-card-open' />
                            <p className='card-open-text1'>Tiempo de preparación</p>
                            <p className='card-open-text2'>{card.prep} Minutos</p>
                        </div>
                        <div className='container-diff'>
                            <img src="./assets/icons/ic_chef.svg" alt="ic_chef" className='icon-card-open' />
                            <p className='card-open-text1'>Dificultad</p>
                            <p className='card-open-text2'>{card.diff}</p>
                        </div>
                    </div>) : (
                            <>
                            <p className='name-recipe'>{card.name}<span>{card.subname}</span></p>
                            <div className='footer-slide'>
                                <div className='footer-slide-rate'>
                                    <img src="./assets/icons/ic_star.svg" alt="" />
                                    <p className='rate-text'>{card.rate}</p>
                                </div>
                                <div className='footer-slide-fav'>
                                    <img src="./assets/icons/ic-favorite.svg" alt="" />
                                </div>
                            </div>
                            </>
                        )
                    }
                </div>
                ))
            }
            


        </div>
    </div>
  )
}

export default Main
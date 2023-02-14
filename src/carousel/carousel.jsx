import { click } from "@testing-library/user-event/dist/click";
import React, { useCallback, useMemo, useState } from "react";
import store from '../Store/Store';


const MainCarousel = React.memo(({ img, changeMain }) => {
    const scrollImage = (e) => {
        const { target } = e;
        let newImage = img;
        if (target.dataset.control === 'left') {
            newImage = newImage === 0 ? 4 : newImage - 1;
            console.log('before', store.getState());
            store.dispatch({
                type: 'LEFT',
                payload: {
                    leftProperties: 'something new'
                }
            });
            console.log('after', store.getState());
        } else {
            newImage = newImage === 4 ? 0 : newImage + 1
        }

        changeMain(newImage)

    }
    return <div className="mainCarousel">
        <button className="controlBt left" data-control='left' onClick={scrollImage}>&#60;</button>
        {img}
        <button className="controlBt right" data-control='right' onClick={scrollImage}>&#62;</button>
    </div>
});

const ThumnailContainer = React.memo(({ idx, discription, setIndexOfMainImg }) => {
    const showInMainFram = (e) => {
        const { target } = e;
        setIndexOfMainImg(Number(target.dataset.img))
    }
    return <div className="thumnailContainer">
        <div className="thumnail"><img src={`image/${idx}`} alt={`image failed at idx: ${idx}`} /></div>
        <div onClick={showInMainFram} data-img={idx} className="disImg">{idx}</div>
    </div>
});

const CarouselComponent = () => {
    const imageResponse = store.getState().carousel.imageArray;
    const [indexOfMainImg, setIndexOfMainImg] = useState(0);


    return <div>
        <MainCarousel img={indexOfMainImg} changeMain={setIndexOfMainImg} />
        {imageResponse.map(((img, idx) => {
            return <ThumnailContainer idx={idx} discription='first image' key={idx} setIndexOfMainImg={setIndexOfMainImg} />
        }))}
    </div>
}

export default CarouselComponent;

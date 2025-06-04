const Card = ({image, title, texto, colorBg, colorTexto, colorTitle}) => {
    return(
        <div className={`${colorBg} flex flex-col max-w-[320px] max-h-[380px] py-6 px-11 rounded-[10px]`}>
            <img src={image} alt="" width={100} height={100} />
            <h3 className={`${colorTitle} pt-6 pb-3 text-xl leading-7 tracking-[2px] font-black`}>{title}</h3>
            <p className={`${colorTexto} font-medium text-base leading-6`}>{texto}</p>
        </div>
    )
}

export default Card;
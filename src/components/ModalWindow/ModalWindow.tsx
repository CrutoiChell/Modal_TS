import s from './ModalWindow.module.css'
import ispugalsa from '../../assets/ispugalsa.png'

interface ModalProps {
    setWindow: Function,
    window: boolean,
}

export function ModalWindow({ setWindow, window }: ModalProps) {
    return (
        <div className={`${s.container} ${window ? s.show : ''}`}>
            <div className={s.content}>
                <div className={s.up}>
                    <h2 className={s.about}>Бу! Испугался?</h2>
                    <button className={s.btn} onClick={() => setWindow(false)}></button>
                </div>
                <div className={s.down}>
                    <p>
                    Не бойся. Я друг, я тебя не обижу. Иди сюда, иди ко мне. Сядь рядом со мной. Посмотри мне в глаза. Ты видишь меня? Я тоже тебя вижу. Давай смотреть друг на друга до тех пор, пока наши глаза не устанут. Ты не хочешь? Почему? Что-то не так?»
                    </p>
                    <img className={s.img} src={ispugalsa} alt="" />
                </div>
            </div>
        </div>
    )
}
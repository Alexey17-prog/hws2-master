import React from 'react';
import s from './Message.module.css';
import {MessageType} from "../HW1";

// Используем правильный тип вместо any
export type MessagePropsType = {
    message: MessageType;
};

// Нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar} // Устанавливаем источник изображения
                    alt={props.message.user.name} // Добавляем alt для доступности
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name} {/* Отображаем имя пользователя */}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text} {/* Отображаем текст сообщения */}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time} {/* Отображаем время сообщения */}
            </div>
        </div>
    );
};

export default Message;

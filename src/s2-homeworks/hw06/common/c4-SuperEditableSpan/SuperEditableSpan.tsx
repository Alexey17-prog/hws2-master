import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    HTMLAttributes,
    useState,
} from 'react'
import s from './SuperEditableSpan.module.css'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'
import editIcon from './editIcon.svg'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// тип пропсов для SuperEditableSpan
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
    value: string; // Обязательный пропс
    onChangeText?: (value: string) => void; // Функция для обновления текста
    onEnter?: () => void; // Функция при нажатии Enter
    error?: string; // Ошибка
    spanProps?: DefaultSpanPropsType & { defaultText?: string }; // Пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
                                                                autoFocus,
                                                                onBlur,
                                                                onEnter,
                                                                spanProps,
                                                                value, // Принятое значение
                                                                onChangeText,
                                                                ...restProps
                                                            }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value); // Локальное состояние для инпута

    const { children, onDoubleClick, className, defaultText, ...restSpanProps } = spanProps || {};

    const onEnterCallback = () => {
        setEditMode(false); // выключить editMode при нажатии Enter
        if (onChangeText) {
            onChangeText(inputValue); // обновить значение при сохранении
        }
        onEnter?.(); // Вызов функции onEnter если она передана
    }

    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false); // выключить editMode при потере фокуса
        onBlur?.(e); // Вызов функции onBlur если она передана
    }

    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true); // включить editMode при двойном клике
        setInputValue(value); // Установить текущее значение в инпут при входе в режим редактирования
        onDoubleClick?.(e); // Вызов функции onDoubleClick если она передана
    }

    return (
        <>
            {editMode ? (
                <SuperInputText
                    autoFocus={autoFocus || true}
                    onBlur={onBlurCallback}
                    onEnter={onEnterCallback}
                    className={s.input}
                    value={inputValue} // Используем локальное состояние для инпута
                    onChange={(e) => setInputValue(e.currentTarget.value)} // Обновляем локальное состояние при изменении текста
                    {...restProps}
                />
            ) : (
                <div className={s.spanBlock}>
                    <img src={editIcon} className={s.pen} alt={'edit'} />
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={`${s.span} ${className}`}
                        {...restSpanProps}
                    >
                        {children || inputValue || defaultText}
                    </span>
                </div>
            )}
        </>
    )
}

export default SuperEditableSpan;

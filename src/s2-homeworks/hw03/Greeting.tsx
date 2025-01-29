import React from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string;
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    onBlur: () => void;
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    error: string;
    totalUsers: number;
    lastUserName?: string;
};

const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser,
                                                   onBlur,
                                                   onEnter,
                                                   error,
                                                   totalUsers,
                                                   lastUserName,
                                               }) => {
    const inputClass = error ? s.errorInput : s.input; // Класс зависит от наличия ошибки

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    {error && <div id={'hw3-error'} className={s.error}>{error}</div>}
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    Добавить
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    );
};

export default Greeting;
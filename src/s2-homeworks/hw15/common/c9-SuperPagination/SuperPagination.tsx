import React from 'react';
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect';
import { Pagination } from '@mui/material';
import s from './SuperPagination.module.css';

export type SuperPaginationPropsType = {
    id?: string;
    page: number;
    itemsCountForPage: number;
    totalCount: number;
    onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
                                                                 page,
                                                                 itemsCountForPage,
                                                                 totalCount,
                                                                 onChange,
                                                                 id = 'hw15',
                                                             }) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage); // Вычисляем количество страниц

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage); // Вызываем колбек с новой страницей и текущим количеством элементов
    };

    const onChangeSelect = (count: number) => {
        onChange(1, count); // Сбрасываем на первую страницу при изменении количества элементов
    };

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>показать</span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage.toString()} // Преобразуем число в строку
                options={[
                    { id: 4, value: '4' }, // Преобразуем числа в строки
                    { id: 7, value: '7' },
                    { id: 10, value: '10' },
                ]}
                onChangeOption={onChangeSelect} // Используем onChangeOption для передачи значения
            />

            <span className={s.text2}>строк в таблице</span>
        </div>
    );
};

export default SuperPagination;

import React from 'react';

import { Categories, PizzaBlock, SortPopup, LoadingBlock } from '../components';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useEffect } from 'react';

import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';

const sortItems = [
    {
        type: 'popular',
        name: 'популярности',
        order: 'desc',
    },
    {
        type: 'price',
        name: 'цене',
        order: 'desc',
    },
    {
        type: 'name',
        name: 'алфавиту',
        order: 'asc',
    },
];

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
];

export function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const cartItems = useSelector(({ cart }) => cart.items);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((item) => (
                          <PizzaBlock
                              key={item.id}
                              isLoaded={true}
                              totalCount={
                                  cartItems[item.id] &&
                                  cartItems[item.id].pizzas.length
                              }
                              {...item}
                          />
                      ))
                    : [...Array(10)].map((item, index) => (
                          <LoadingBlock key={index} />
                      ))}
            </div>
        </div>
    );
}

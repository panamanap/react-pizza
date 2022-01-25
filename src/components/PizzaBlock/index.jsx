import { useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPizzaToCart, removeItem } from '../../redux/actions/cart';

const avilablesTypes = ['тонкое', 'традиционное'];
const avilablesSizes = [26, 30, 40];

export function PizzaBlock({ id, name, imageUrl, price, types, sizes }) {
    const dispatch = useDispatch();
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);
    const [disable, setDisable] = useState(false);

    const onSelectType = (index) => {
        if (disable) {
            return;
        }
        setActiveType(index);
    };

    const onSelectSize = (index) => {
        if (disable) {
            return;
        }
        setActiveSize(index);
    };

    const onAddToCart = () => {
        setDisable(!disable);
        dispatch(addPizzaToCart(pizzaObj));
    };

    const pizzaObj = {
        id,
        imageUrl,
        name,
        price,
        type: avilablesTypes[activeType],
        size: avilablesSizes[activeSize],
        number: 1,
    };

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <h4>Тип и размер теста: </h4>
                <ul>
                    {avilablesTypes.map((type, index) => (
                        <li
                            key={type}
                            className={`${activeType === index && 'active'}
              ${!types.includes(index) && 'disabled'} ${disable && 'disable'}`}
                            onClick={() => onSelectType(index)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>

                <ul>
                    {avilablesSizes.map((size, index) => (
                        <li
                            key={size}
                            className={`${activeSize === index && 'active'}
              ${!sizes.includes(size) && 'disabled'} ${disable && 'disable'} `}
                            onClick={() => onSelectSize(index)}
                        >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price"> от {price} руб.</div>
                <button
                    className={`${
                        disable
                            ? 'button--disbled'
                            : 'button button--outline button--add'
                    }`}
                    onClick={onAddToCart}
                    disabled={disable}
                >
                    <span>{disable ? 'Выбрана' : 'Выбрать'}</span>
                </button>
            </div>
        </div>
    );
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    isLoading: PropTypes.bool,
};

PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
    isLoading: false,
};

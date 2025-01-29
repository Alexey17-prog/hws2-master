import React, { useState } from 'react';
import s from './Stand.module.css';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from './common/c2-SuperButton/SuperButton';

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false);

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/* Input that works with old code */}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e) => setValue(e.currentTarget.value)}
                    />
                </div>
                {/* Input with error handling */}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        error={error}
                        onEnter={() => {
                            setError(stateForAllInputs.trim() ? '' : 'Error');
                            setValue('');
                        }}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                {/* Default button */}
                <div>
                    <SuperButton id={'hw4-super-button-default'}>
                        default
                    </SuperButton>
                </div>
                {/* Red button */}
                <div>
                    <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                        red
                    </SuperButton>
                </div>
                {/* Disabled button */}
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                {/* Secondary button */}
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                {/* Checkbox with text */}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/* Checkbox compatible with old code */}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand;

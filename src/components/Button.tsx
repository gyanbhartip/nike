import React from 'react';

type Props = {
    backgroundColor?: string;
    borderColor?: string;
    fullWidth?: boolean;
    iconURL?: string;
    label?: string;
    textColor?: string;
};

const Button: React.FC<Props> = ({
    backgroundColor = '',
    borderColor = '',
    fullWidth,
    iconURL = '',
    label = 'Click Me',
    textColor = '',
}) => {
    return (
        <button
            className={`flex items-center justify-center gap-2 py-4 text-lg leading-none  border rounded-full px-7 font-montserrat  ${backgroundColor ? `${backgroundColor}` : 'bg-coral-red'} ${borderColor ? `${borderColor}` : 'border-coral-red'} ${textColor ? `${textColor}` : 'text-white'} ${fullWidth ? 'w-full' : ''}`}>
            {label}
            {iconURL ? (
                <img
                    src={iconURL}
                    alt="Button Icon"
                    className="w-5 h-5 ml-2 rounded-full"
                />
            ) : (
                <></>
            )}
        </button>
    );
};

export default Button;

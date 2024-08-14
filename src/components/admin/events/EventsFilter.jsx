'use client'
import Select, { components } from 'react-select'
import { TbTriangleInvertedFilled } from "react-icons/tb";


const options = [
    { value: 'chocolate', label: 'Active Events' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    control: (provided) => ({
        ...provided,
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '18px',
        overflow: 'clip',
        width: 'fit-content',
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: '12px',
        padding: `0 50px 0 20px`,
        fontWeight: state.isSelected ? 'bold' : "normal",
        backgroundColor: state.isSelected ? '#ffffff00' : state.isFocused ? '#E3000F11' : provided.backgroundColor,
        color: state.isSelected ? '#E3000F' : "#000000"
    })
}

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator  {...props}>
            <TbTriangleInvertedFilled size={16} className='text-black/80 border-white' />
        </components.DropdownIndicator>
    )
}

function EventTypeSelect() {
    return (
        <div>
            <Select
                className='text-3xl font-bold text-black w-fit'
                defaultValue={options[0]}
                options={options}
                styles={customStyles}
                isSearchable={false}
                components={{ DropdownIndicator }}
            />
        </div>
    )
}

export default EventTypeSelect
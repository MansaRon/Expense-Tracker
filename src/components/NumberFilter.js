// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNum = [];

// function test() {
//    return filteredNum = numbers.filter((response) => {return response % 2 != 0})
// }

import './NumberFilter.css';

const arrayData = [
    {
        name: 'Ferrari',
        mileage: '25000KM',
        colour: 'Red'
    },
    {
        name: 'McLaren',
        mileage: '50520KM',
        colour: 'Silver'
    },
    {
        name: 'Lamborghini',
        mileage: '500KM',
        colour: 'Black'
    },
    {
        name: 'Aston Martin',
        mileage: '9000KM',
        colour: 'White'
    }
]

function testingProps(arrayData) {
    return (
        <div className="firstSection">
            <h2>{arrayData[0].name}</h2>
            <h2>{arrayData[1].name}</h2>
            <h2>{arrayData[2].name}</h2>
            <h2>{arrayData[3].name}</h2>
        </div>)
}

export default testingProps;
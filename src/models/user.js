const InsuranceDetails = {
    date: 'March 28th', 
    insurance: 'Outsurance', 
    price: 'R235',
    clientName: 'Thendo',
    surname: 'Ramashia',
    age: '26'
};

function users() {
    return InsuranceDetails.date + ' ' + InsuranceDetails.insurance
}

export default users;
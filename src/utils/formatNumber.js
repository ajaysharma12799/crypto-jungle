const formatNumber = (number) => {
    let convertedString = number.toString().split('.');
    convertedString[0] = convertedString[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return convertedString.join('.');
};

export default formatNumber;
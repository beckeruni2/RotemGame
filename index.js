//console.log('Hello, World!');

//window.alert('This is an alert');

document.getElementById("myH2").textContent = 'Hey THERE!';

const cardObjectDefinition = [
    {id: 1, name: '2club', imagePath: 'Images/2C@1x.png'},
    {id: 2, name: '2diamond', imagePath: 'Images/2D@1x.png'},
    {id: 3, name: '2heart', imagePath: 'Images/2H@1x.png'},
    {id: 4, name: '2spade', imagePath: 'Images/2S@1x.png'},
    {id: 5, name: '3club', imagePath: 'Images/3C@1x.png'},
    {id: 6, name: '3diamond', imagePath: 'Images/3D@1x.png'},
    {id: 7, name: '3heart', imagePath: 'Images/3H@1x.png'},
    {id: 8, name: '3spade', imagePath: 'Images/3S@1x.png'},
    {id: 9, name: '4club', imagePath: 'Images/4C@1x.png'},
    {id: 10, name: '4diamond', imagePath: 'Images/4D@1x.png'},
    {id: 11, name: '4heart', imagePath: 'Images/4H@1x.png'},
    {id: 12, name: '4spade', imagePath: 'Images/4S@1x.png'},
    {id: 13, name: '5club', imagePath: 'Images/5C@1x.png'},
    {id: 14, name: '5diamond', imagePath: 'Images/5D@1x.png'},
    {id: 15, name: '5heart', imagePath: 'Images/5H@1x.png'},
    {id: 16, name: '5spade', imagePath: 'Images/5S@1x.png'},
    {id: 17, name: '6club', imagePath: 'Images/6C@1x.png'},
    {id: 18, name: '6diamond', imagePath: 'Images/6D@1x.png'},
    {id: 19, name: '6heart', imagePath: 'Images/6H@1x.png'},
    {id: 20, name: '6spade', imagePath: 'Images/6S@1x.png'},
    {id: 21, name: '7club', imagePath: 'Images/7C@1x.png'},
    {id: 22, name: '7diamond', imagePath: 'Images/7D@1x.png'},
    {id: 23, name: '7heart', imagePath: 'Images/7H@1x.png'},
    {id: 24, name: '7spade', imagePath: 'Images/7S@1x.png'},
    {id: 25, name: '8club', imagePath: 'Images/8C@1x.png'},
    {id: 26, name: '8diamond', imagePath: 'Images/8D@1x.png'},
    {id: 27, name: '8heart', imagePath: 'Images/8H@1x.png'},
    {id: 28, name: '8spade', imagePath: 'Images/8S@1x.png'},
    {id: 29, name: '9club', imagePath: 'Images/9C@1x.png'},
    {id: 30, name: '9diamond', imagePath: 'Images/9D@1x.png'},
    {id: 31, name: '9heart', imagePath: 'Images/9H@1x.png'},
    {id: 32, name: '9spade', imagePath:'Images/9S@1x.png'},
    {id: 33, name: '10club', imagePath: 'Images/TC@1x.png'},
    {id: 34, name: '10diamond', imagePath: 'Images/TD@1x.png'},
    {id: 35, name: '10heart', imagePath: 'Images/TH@1x.png'},
    {id: 36, name: '10spade', imagePath: 'Images/TS@1x.png'},
    {id: 37, name: 'Jclub', imagePath: 'Images/JC@1x.png'},
    {id: 38, name: 'Jdiamond', imagePath: 'Images/JD@1x.png'},
    {id: 39, name: 'Jheart', imagePath: 'Images/JH@1x.png'},
    {id: 40, name: 'Jspade', imagePath: 'Images/JS@1x.png'},
    {id: 41, name: 'Qclub', imagePath: 'Images/QC@1x.png'},
    {id: 42, name: 'Qdiamond', imagePath: 'Images/QD@1x.png'},
    {id: 43, name: 'Qheart', imagePath: 'Images/QH@1x.png'},
    {id: 44, name: 'Qspade', imagePath:'Images/QS@1x.png'},
    {id: 45, name: 'Kclub', imagePath: 'Images/KC@1x.png'},
    {id: 46, name: 'Kdiamond', imagePath: 'Images/KD@1x.png'},
    {id: 47, name: 'Kheart', imagePath: 'Images/KH@1x.png'},
    {id: 48, name: 'Kspade', imagePath: 'Images/KS@1x.png'},
    {id: 49, name: 'Aclub', imagePath: 'Images/AC@1x.png'},
    {id: 50, name: 'Adiamond', imagePath: 'Images/AD@1x.png'},
    {id: 51, name: 'Aheart', imagePath: 'Images/AH@1x.png'},
    {id: 52, name: 'Aspade', imagePath: 'Images/AS@1x.png'}
]

function createCard(cardItem)
{
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    addClassToElement(cardElem, 'card');
    addIdtoElement(cardElem, cardItem.id);
}

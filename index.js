//console.log('Hello, World!');

//window.alert('This is an alert');

console.log('Card Deck App Initialized');



const  deckOfCards= [
    {id: 1, name: '2club', imagePath: 'Images/face/2C@1x.png'},
    {id: 2, name: '2diamond', imagePath: 'Images/face/2D@1x.png'},
    {id: 3, name: '2heart', imagePath: 'Images/face/2H@1x.png'},
    {id: 4, name: '2spade', imagePath: 'Images/face/2S@1x.png'},
    {id: 5, name: '3club', imagePath: 'Images/face/3C@1x.png'},
    {id: 6, name: '3diamond', imagePath: 'Images/face/3D@1x.png'},
    {id: 7, name: '3heart', imagePath: 'Images/face/3H@1x.png'},
    {id: 8, name: '3spade', imagePath: 'Images/face/3S@1x.png'},
    {id: 9, name: '4club', imagePath: 'Images/face/4C@1x.png'},
    {id: 10, name: '4diamond', imagePath: 'Images/face/4D@1x.png'},
    {id: 11, name: '4heart', imagePath: 'Images/face/4H@1x.png'},
    {id: 12, name: '4spade', imagePath: 'Images/face/4S@1x.png'},
    {id: 13, name: '5club', imagePath: 'Images/face/5C@1x.png'},
    {id: 14, name: '5diamond', imagePath: 'Images/face/5D@1x.png'},
    {id: 15, name: '5heart', imagePath: 'Images/face/5H@1x.png'},
    {id: 16, name: '5spade', imagePath: 'Images/face/5S@1x.png'},
    {id: 17, name: '6club', imagePath: 'Images/face/6C@1x.png'},
    {id: 18, name: '6diamond', imagePath: 'Images/face/6D@1x.png'},
    {id: 19, name: '6heart', imagePath: 'Images/face/6H@1x.png'},
    {id: 20, name: '6spade', imagePath: 'Images/face/6S@1x.png'},
    {id: 21, name: '7club', imagePath: 'Images/face/7C@1x.png'},
    {id: 22, name: '7diamond', imagePath: 'Images/face/7D@1x.png'},
    {id: 23, name: '7heart', imagePath: 'Images/face/7H@1x.png'},
    {id: 24, name: '7spade', imagePath: 'Images/face/7S@1x.png'},
    {id: 25, name: '8club', imagePath: 'Images/face/8C@1x.png'},
    {id: 26, name: '8diamond', imagePath: 'Images/face/8D@1x.png'},
    {id: 27, name: '8heart', imagePath: 'Images/face/8H@1x.png'},
    {id: 28, name: '8spade', imagePath: 'Images/face/8S@1x.png'},
    {id: 29, name: '9club', imagePath: 'Images/face/9C@1x.png'},
    {id: 30, name: '9diamond', imagePath: 'Images/face/9D@1x.png'},
    {id: 31, name: '9heart', imagePath: 'Images/face/9H@1x.png'},
    {id: 32, name: '9spade', imagePath:'Images/face/9S@1x.png'},
    {id: 33, name: '10club', imagePath: 'Images/face/TC@1x.png'},
    {id: 34, name: '10diamond', imagePath: 'Images/face/TD@1x.png'},
    {id: 35, name: '10heart', imagePath: 'Images/face/TH@1x.png'},
    {id: 36, name: '10spade', imagePath: 'Images/face/TS@1x.png'},
    {id: 37, name: 'Jclub', imagePath: 'Images/face/JC@1x.png'},
    {id: 38, name: 'Jdiamond', imagePath: 'Images/face/JD@1x.png'},
    {id: 39, name: 'Jheart', imagePath: 'Images/face/JH@1x.png'},
    {id: 40, name: 'Jspade', imagePath: 'Images/face/JS@1x.png'},
    {id: 41, name: 'Qclub', imagePath: 'Images/face/QC@1x.png'},
    {id: 42, name: 'Qdiamond', imagePath: 'Images/face/QD@1x.png'},
    {id: 43, name: 'Qheart', imagePath: 'Images/face/QH@1x.png'},
    {id: 44, name: 'Qspade', imagePath:'Images/face/QS@1x.png'},
    {id: 45, name: 'Kclub', imagePath: 'Images/face/KC@1x.png'},
    {id: 46, name: 'Kdiamond', imagePath: 'Images/face/KD@1x.png'},
    {id: 47, name: 'Kheart', imagePath: 'Images/face/KH@1x.png'},
    {id: 48, name: 'Kspade', imagePath: 'Images/face/KS@1x.png'},
    {id: 49, name: 'Aclub', imagePath: 'Images/face/AC@1x.png'},
    {id: 50, name: 'Adiamond', imagePath: 'Images/face/AD@1x.png'},
    {id: 51, name: 'Aheart', imagePath: 'Images/face/AH@1x.png'},
    {id: 52, name: 'Aspade', imagePath: 'Images/face/AS@1x.png'}
]




    
    const messageArea = document.getElementById('messageArea');

    document.getElementById('startButton').addEventListener('click', function() {
        this.disabled = true;
        messageArea.textContent = 'Good luck!';

        
        const cardArea = document.getElementById('deckPosition');
        cardArea.innerHTML = `<img src="Images/back/bicycle_blue@1x.png" alt="randomBack" />`;
        // update deck count display
        const deckCountEl = document.getElementById('deckCount');
        if (deckCountEl) deckCountEl.textContent = String(deckOfCards.length);
        for(let i=1; i<=6; i++){
        const drawnCard = drawRandomCard(deckOfCards);
        console.log(drawnCard.imagePath);
        renderCardToArea(drawnCard, 'card'+i);
        if (deckCountEl) deckCountEl.textContent = String(deckOfCards.length);
        }
    });



function drawRandomCard(cards) {
    if (cards.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * cards.length);
    const removedCard = cards.splice(randomIndex, 1);
    return removedCard[0];
}

function renderCardToArea(card, cardAreaId) {
    const cardArea = document.getElementById(cardAreaId);
    cardArea.innerHTML = `<img src="${card.imagePath}" alt="${card.name}" />`;
}




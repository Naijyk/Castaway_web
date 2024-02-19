// const reviewCards = [
//     {
//         id: 1,
//         stars: './media/Star.svg',
//         text: 'I can’t recommend this podcast enough',
//         account: 'Betty Lacey'
//     },
//     {
//         id: 2,
//         stars: './media/Star.svg',
//         text: 'Jacob is the best in the business',
//         account: 'Adam Driver'
//     },
//     {
//         id: 3,
//         stars: './media/Star.svg',
//         text: 'A wealth of audio knowledge',
//         account: 'Marcus Brown'
//     },
//     {
//         id: 4,
//         stars: './media/Star.svg',
//         text: 'Every episode is a gem!',
//         account: 'Jessica Knowl'
//     },
//     {
//         id: 5,
//         stars: './media/Star.svg',
//         text: 'Whoa whoa, let me take some notes!',
//         account: 'Scott Adams'
//     },
//     {
//         id: 6,
//         stars: './media/Star.svg',
//         text: 'I’ve upped my game considerably since I started listening',
//         account: 'Steven Blast'
//     }
// ];


// const cardsContainer = document.querySelector('.review .wrapper');

// const renderReviewCards = arr => {
//     arr.forEach(el => {
//         const reviewCard = document.createElement('div');
//         const starsContainer = document.createElement('div');
//         const reviewStars = document.createElement('img');
//         const reviewText = document.createElement('p');
//         const reviewAccount = document.createElement('p');

//         reviewStars.src = el.stars;
//         reviewStars.alt = el.text;

//         reviewText.innerText = el.text;
//         reviewAccount.innerText = el.account;

//         starsContainer.append(reviewStars);
//         reviewCard.append(starsContainer, reviewText, reviewAccount);
//         cardsContainer.append(reviewCard);
//     });
// };

// renderReviewCards(reviewCards);


const goTopBtn = document.querySelector('.go_top');

const trackScroll = () => {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset > coords) {
        goTopBtn.classList.add('go_top__show');
    } else {
        goTopBtn.classList.remove('go_top__show');
    }
}

const goTop = () => {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', goTop);

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
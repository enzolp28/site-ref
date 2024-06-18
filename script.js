const getArticles = async () => {   
    try{
        const response = await fetch('./article.json');
        const articles = await response.json();
        console.log(articles);
        return articles
    } catch(error){
        console.log(error);
    }
}

const displayLastArticles = async (articles) => {
    const sneakersLast = document.querySelector('.sneakers-last');

    articles.forEach(article => {
        const {title, date, image, id} = article;
        const htmlArticle = `
        <a href="./article-derniere-sortie.html?id=${id}"> 
            <article class="sneakers-last_content">
                <img src="${image}" alt="${title}" />
                <div class="sneakers-last_desc">
                    <p>${title}</p>
                    <p>Sortie prévu le :</p>
                    <p>${date}</p>
                </div>
            </article>
        </a>
        `;
        sneakersLast.insertAdjacentHTML('beforeend', htmlArticle);
    });
}

const displayComingArticles = async (articles) => {
    const sneakersComing = document.querySelector('.sneakers-coming');

    articles.forEach(article => {
        const {title, date, image} = article;
        const htmlArticle = `
        <article class="sneakers-coming_content">
            <img src="${image}" alt="${title}" />
            <div class="sneakers-coming_desc">
                <p>${title}</p>
                <p>Sortie prévu le :</p>
                <p>${date}</p>
            </div>
        </article>
        `;
        sneakersComing.insertAdjacentHTML('beforeend', htmlArticle);
    });
}



const init = async () => {
    const articles = await getArticles();
    try{
        if(articles && articles.length > 0){
            const lastThreeArticles = articles.slice(-3).reverse();
            displayLastArticles(lastThreeArticles);
            displayComingArticles(lastThreeArticles);
        }
    } catch(error){
        console.log(error);
    }
}

init()
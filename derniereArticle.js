const getLastArticle = async (articleId) => {   
    try{
        const response = await fetch('./article.json');
        const articles = await response.json();
        const lastArticle = articles.find(article => article.id === Number(articleId));

        return lastArticle
    } catch(error){
        console.log(error);
    }
    return []
}

const displayLastArticle = async (article) => {
    const sneakersLast = document.querySelector('.last-article');
    const {title, content, image} = article;
    const htmlArticle = `
    <article class="sneakers-last_content">
        <img src="${image}" alt="${title}" />
        <div class="sneakers-last_desc">
            <p>${title}</p>
            <p>${content}</p>
        </div>
    </article>
    `;
    sneakersLast.insertAdjacentHTML('beforeend', htmlArticle);
}

const init = async () => {
    const articleId = new URLSearchParams(window.location.search).get('id');
    const currentArticle = await getLastArticle(articleId);
    displayLastArticle(currentArticle);
}
init();


Vue.component('article-comp', {
    props: ['articles', 'center'],
    data() {
        return {
            blogArticles: [
                {
                    tag: "Kitchen",
                    heading: "Kitchen: Let’s Get Solution for Building Construction Work",
                    imgBig: "./images/articles/articles-big.jpg",
                    imgSmall: "./images/articles/articles-small.jpg",
                    date: "26 December, 2022",
                    quote: "Get rid of everything that is not essential to making a point.",
                    intro: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                },
                {
                    tag: "Bedroom",
                    heading: "Bedroom: Top 25 Design Styles for a Dreamy Bedroom",
                    imgBig: "./images/articles/articles-big.jpg",
                    imgSmall: "./images/articles/articles-small.jpg",
                    date: "26 January, 2022",
                    quote: "Design can help to improve our lives in the present. Design thinking can help us chart a path into the future.",
                    intro: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem.",
                },
                {
                    tag: "Building",
                    heading: "Building: Types of drawings for building design",
                    imgBig: "./images/articles/articles-big.jpg",
                    imgSmall: "./images/articles/articles-small.jpg",
                    date: "2 December, 2022",
                    quote: "Good design is good business.",
                    intro: "Leius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                },
                {
                    tag: "Architecture",
                    heading: "Architecture: Title Blocks: Standards and Conventions",
                    imgBig: "./images/articles/articles-big.jpg",
                    imgSmall: "./images/articles/articles-small.jpg",
                    date: "13 July, 2022",
                    quote: "Simplicity will stand out, while complexity will get lost in the crowd.",
                    intro: "Aeius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
                },

                {
                    tag: "Kitchen Planning",
                    heading: "Planning: Kitchen Design Ideas & Planning Advice",
                    imgBig: "./images/articles/articles-big.jpg",
                    imgSmall: "./images/articles/articles-small.jpg",
                    date: "14 April, 2022",
                    quote: "Make it simple, but significant.",
                    intro: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
                }
            ],
            filteredArticles: [],
        }
    },

    template: `
    <div>
        <article class="article" v-for="(article, index) in showArticles" :key="index">
            <h2 class="article__heading">{{ article.heading }}</h2>
            <img :src="article.imgBig" alt=" article image big"
                class="article__img article__img_big" style="min-width: 799px; min-height:539px;">

            <div class="article__info">
                <time datetime="2022-12-26" class="blog__date">{{article.date}}</time>
                <p class="article__breadcrumbs">Interior / Home / Decor</p>
            </div>

            <p class="text">{{article.intro}}</p>

            <div class="article__quote" style="min-width: 799px; min-height:267px;">
                <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                        fill="#CDA274" />
                </svg>

                <p class="article__quote_text">{{article.quote}}</p>
            </div>

            <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem   vitae turpmaximus.posuere
                in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered.
            </p>
            <ol class="article__list text">
                <li class="article__item text">Contrary to popular belief.There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered.</li>
                <li class="article__item text">Contrary to popular belief.There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered.</li>
                <li class="article__item text">Contrary to popular belief.There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered.</li>
            </ol>

            <img :src="article.imgSmall" alt="article image small"
            class="article__img article__img_small" style="min-width: 799px; min-height:365px;">

            <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered.
            </p>
        </article>
    </div>
    `,

    computed: {

        showArticles() {
            if (!this.$root.currentTag) {
                return this.blogArticles;
            }
            this.filteredArticles = [];

            this.blogArticles.forEach(article => {
                if (this.$root.currentTag === article.tag) {
                    this.filteredArticles.push(article)
                }

            });
            return this.filteredArticles;
        },


    }
}
)
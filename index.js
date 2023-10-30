new Vue({
    el: "#app",
    data: {
        currentTag: '',
        tags: [
            {
                name: 'Kitchen',
                isActive: false
            },
            {
                name: 'Bedroom',
                isActive: false
            },
            {
                name: 'Building',
                isActive: false
            },
            {
                name: 'Architecture',
                isActive: false
            },
            {
                name: 'Kitchen Planning',
                isActive: false
            },
        ],

        articles: [
            {
                src: "./images/index/blog-1.jpg",
                tag: "Kitchen Design",
                heading: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022",
            },
            {
                src: "./images/index/blog-2.jpg",
                tag: "Living Design",
                heading: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022",
            },
            {
                src: "./images/index/blog-3.jpg",
                tag: "Interior Design",
                heading: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022",
            },
            {
                src: "./images/index/blog-1.jpg",
                tag: "Kitchen Design",
                heading: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022",
            },
            {
                src: "./images/index/blog-2.jpg",
                tag: "Living Design",
                heading: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022",
            },
            {
                src: "./images/index/blog-3.jpg",
                tag: "Interior Design",
                heading: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022",
            },
        ]
    },

    methods: {
        setTag(tag) {
            this.currentTag = tag;
        },

        changeTagStatus(tag) {
            this.tags.forEach(element => {
                element.isActive = false;

                if (element.name === tag.name) {
                    element.isActive = !element.isActive;
                }
            });
        }
    },

})
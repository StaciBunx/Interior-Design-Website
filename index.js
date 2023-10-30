new Vue({
    el: "#app",
    data: {
        currentTag: '',
        isDisabledTag: true,
        tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
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
        }
    },

})
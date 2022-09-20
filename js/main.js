const news = [
    {
        title: "How We Approach Safety and Privacy in Community Chats",
        desc: "We’re sharing our approach to making Community Chats trusted spaces in Messenger and Facebook.",
        img: "./img/7.jpeg"
    },
    {
        title: "Community Standards Enforcement Report, Second Quarter 2022",
        desc: "We’re sharing highlights of our integrity work for the second quarter of 2022.",
        img: "./img/8.jpeg"
    },
    {
        title: "How Meta Is Planning for the 2022 US Midterms",
        desc: "Our approach to the 2022 US midterms is consistent with the policies and safeguards we had in place during the 2020 US presidential election.",
        img: "./img/9.jpeg"
    }
];

const newsContainer = document.getElementById('news');

newsContainer.innerHTML = news.map(art => (
    `
    <div class="flex flex-col justify-between gap-3 cursor-pointer">
        <img src=${art.img} alt="">
        <div class="text-lg text-gray-800 mt-3">${art.title}</div>
        <div class="text-gray-500">${art.desc}
        </div>
        <p class="text-gray-800 cursor-pointer hover:opacity-70 mt-3">
            <i class="bi bi-arrow-right-circle mr-2"></i> <span class="font-bold">Read more</span>
        </p>
    </div>
    `
)).join('')
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Then late got five（Version.1）',
            artist: '里子',
            url: 'https://www.ytmp3.cn/down/78724.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: 'Intro',
            artist: 'Rosary',
            url: 'https://www.ytmp3.cn/down/78725.mp3',
            cover: 'cover2.jpg',
        }
    ]
});
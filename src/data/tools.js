const tools = [
    {
        char_id: 1,
        name: "Walter White",
        birthday: "09-07-1958",

        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        status: "Presumed dead",
        nickname: "Heisenberg",
        budget: 210000000

    },
    {
        id: 2,
        name: "Jesse Pinkman",
        birthday: "09-24-1984",
        img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
        status: "Alive",
        nickname: "Cap n' Cook",
        budget: 220000000

    },
    {
        id: 3,
        name: "Skyler White",
        birthday: "08-11-1970",

        img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
        status: "Alive",
        nickname: "Sky",
        budget: 230000000

    },
    {
        id: 4,
        name: "Walter White Jr.",
        birthday: "07-08-1993",

        img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
        status: "Alive",
        Nickname: "Flynn",
        budget: 240000000

    },
    {
        id: 5,
        name: "Henry Schrader",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
        status: "Deceased",
        nickname: "Hank",
        budget: 250000000
    },
    {
        id: 6,
        name: "Marie Schrader",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
        status: "Alive",
        nickname: "Marie",
        budget: 260000000

    },
    {
        id: 7,
        name: "Mike Ehrmantraut",
        birthday: "Unknown",

        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
        status: "Deceased",
        nickname: "Mike",
        budget: 270000000


    },
    {
        id: 8,
        name: "Saul Goodman",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
        status: "Alive",
        nickname: "Jimmy McGill",
        budget: 280000000


    },
    {
        id: 9,
        name: "Gustavo Fring",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
        status: "Deceased",
        nickname: "Gus",
        budget: 290000000

    },
    {
        id: 10,
        name: "Hector Salamanca",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
        status: "Deceased",
        nickname: "Don Hector",
        budget: 2100000000
    },
    {
        id: 11,
        name: "Domingo Molina",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
        status: "Deceased",
        nickname: "Krazy-8",
        budget: 2110000000

    },
    {
        id: 12,
        name: "Tuco Salamanca",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445",
        status: "Deceased",
        nickname: "Tuco",
        budget: 2120000000

    },
    {
        id: 13,
        name: "Marco & Leonel Salamanca",
        birthday: "Unknown",

        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg",
        status: "Deceased",
        nickname: "The Cousins",
        budget: 2130000000


    },
    {
        id: 14,
        name: "Lydia Rodarte-Quayle",
        birthday: "Unknown",

        img: "https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg",
        status: "Deceased",
        nickname: "Lydia",
        budget: 2140000000

    },
    {
        id: 15,
        name: "Todd Alquist",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",
        status: "Deceased",
        nickname: "Ricky Hitler",
        budget: 2170000000


    },
    {
        id: 16,
        name: "Jane Margolis",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",
        status: "Deceased",
        nickname: "Apology Girl",
        budget: 2160000000

    },
    {
        id: 17,
        name: "Skinny Pete",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623",
        status: "Alive",
        nickname: "Skinny",
        budget: 2170000000

    },
    {
        id: 18,
        name: "Brandon Mayhew",
        birthday: "Unknown",

        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg",
        status: "Alive",
        nickname: "Badger",
        budget: 2180000000

    },
    {
        id: 19,
        name: "Huell Babineaux",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es",
        status: "Alive",
        nickname: "Huell",
        budget: 190000000
    },
    {
        id: 20,
        name: "Steven Gomez",
        birthday: "Unknown",

        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg",
        status: "Deceased",
        nickname: "Gomie",
        budget: 200000000


    },
    {
        id: 21,
        name: "Theodore Beneke",
        birthday: "Unknown",

        img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057",
        status: "Alive",
        nickname: "Ted",
        budget: 210000000


    }]
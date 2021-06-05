$(document).ready(function(){
      $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoHeight: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1400: {
                    items: 5
                },
                1800: {
                  items: 7
              },
              2200: {
                  items: 10
              }
            }
        });
    });




let data = {

    english : {
        menuItem1:"SERVICES",
        menuItem2:"VIDEO",
        menuItem3:"CONTACTS",

        servicesItem1:"Design",
        servicesItem2 :"Outdoor advertising",
        servicesItem3:"Printing",
        servicesItem4 :"Laser և milling engraving",

        aboutUs:"About us",
        
        aboutUsText:`S Design Studio has been operating in Yerevan and Ijjan since 2006. 
            Years of experience և responsibility are a guarantee of trust և long-term երտ 
            close cooperation. Our team is ready to implement every idea of ​​the client, the 
            best programs և is ready to find the most effective ways to implement the work.
            S Design Studio has been operating in Yerevan and Ijjan since 2006. Years of 
            experience և responsibility are a guarantee of trust և long-term երտ close cooperation. 
            Our team is ready to implement every idea of ​​the client, the best programs և is ready 
            to find the most effective ways to implement the work.`,
        
        partners:"Our partners",
        
        footerAddress1:"RA, 0033, Yerevan Gyulbenkyan 31",
        
        footerAddress2:"RA, 4001 square, Ijevan Vasilyan 2/2",
        
        footerWeDoTitle:"We do",
        
        footerWeDoItem1:"design",
        footerWeDoItem2:"Large format printing",
        footerWeDoItem3 :"Volumetric letters",
        footerWeDoItem4:"Interior և Exterior design",
        footerWeDoItem5:"Panels",
        footerWeDoItem6:"Tablets:",
        footerWeDoItem7 : "3D Engraving",
        footerWeDoItem8:"Laser and milling works"
    },
    armenia : {
        menuItem1 :"ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ",
        menuItem2 : "ՏԵՍԱԴԱՐԱՆ",
        menuItem3 : "ԿՈՆՏԱԿՏՆԵՐ",

        servicesItem1 : "Դիզայն",
        servicesItem2 : "Արտաքին գովազդ",
        servicesItem3 : "Տպագրություն",
        servicesItem4 : "Լազերային և ֆրեզերային փորագրություն",

        aboutUs:"Մեր մասին",
        
        aboutUsText : `S Design Studio-ն 2006 –ից իր  գործունեությունն է ծավալում  Երևանում և Իջևանում. Տարիների փորձառությունը
        և պատասխանատությունն երաշխիք են վստահության և երկարատև սերտ համագործակցության. Մեր թիմը  պատրաստ է
        իրականացնելու հաճախորդի յուրաքանչյուր  մտահաղացումներն լավագույն ծրագրերը և պատրաստ է գտնելու
        ամենաարդյունավետ տարբերակները  աշխատանքներն իրականացնելու համար։
        S Design Studio-ն 2006 –ից իր  գործունեությունն է ծավալում  Երևանում և Իջևանում.
        Տարիների փորձառությունը և պատասխանատությունն երաշխիք են վստահության և երկարատև
        սերտ համագործակցության. Մեր թիմը  պատրաստ է իրականացնելու հաճախորդի յուրաքանչյուր 
        մտահաղացումներն լավագույն ծրագրերը և պատրաստ  է գտնելու ամենաարդյունավետ տարբերակները
        աշխատանքներն իրականացնելու համար։`,                           
        
        partners : "Մեր գործնկերներ",
        
        footerAddress1 : "ՀՀ,0033 ք, Երևան Գյուլբենկյան 31",
        
        footerAddress2 : "ՀՀ,4001 ք, Իջևան Վասիլյան 2/2",
        
        footerWeDoTitle : "Մենք կատարում ենք",
        
        footerWeDoItem1 : "Դիզայն",
        footerWeDoItem2 : "Լայնաֆորմատ տպագրություն",
        footerWeDoItem3 : "Ծավալային տառեր",
        footerWeDoItem4 : "Ինտերերի և Էքստերիերի դիզայն",
        footerWeDoItem5 : "Վահանակներ",
        footerWeDoItem6 : "Ցուցանակներ",
        footerWeDoItem7 : "3D Փորագրություն",
        footerWeDoItem8 : "Լազերային և ֆրեզերային աշխատանքներ"
    }
}



let inHeaderLanguage = document.querySelector("#in-header-language");
let link = document.querySelectorAll("#in-header-language > a");


link.forEach(element => {
    element.addEventListener('click', () => {

        const attribute = element.getAttribute('language');

        let menuItem1 = document.querySelector("#menuItem1");
        menuItem1.textContent = data[attribute].menuItem1;

        let menuItem2 = document.querySelector("#menuItem2");
        menuItem2.textContent = data[attribute].menuItem2;

        let menuItem3 = document.querySelector("#menuItem3");
        menuItem3.textContent = data[attribute].menuItem3;


        let servicesItem1 = document.querySelector("#servicesItem1");
        servicesItem1.textContent = data[attribute].servicesItem1;

        let servicesItem2 = document.querySelector("#servicesItem2");
        servicesItem2.textContent = data[attribute].servicesItem2;

        let servicesItem3 = document.querySelector("#servicesItem3");
        servicesItem3.textContent = data[attribute].servicesItem3;

        let servicesItem4 = document.querySelector("#servicesItem4");
        servicesItem4.textContent = data[attribute].servicesItem4;


        let aboutUs = document.querySelector("#aboutUs");
        aboutUs.textContent = data[attribute].aboutUs;

        let aboutUsText = document.querySelector("#aboutUsText");
        aboutUsText.textContent = data[attribute].aboutUsText;


        let partners = document.querySelector("#slider-title");
        partners.textContent = data[attribute].partners;


        let footerAddress1 = document.querySelector("#footerAddress1");
        footerAddress1.textContent = data[attribute].footerAddress1;

        let footerAddress2 = document.querySelector("#footerAddress2");
        footerAddress2.textContent = data[attribute].footerAddress2;


        let footerWeDoTitle = document.querySelector("#footerWeDoTitle");
        footerWeDoTitle.textContent = data[attribute].footerWeDoTitle;

        
        let footerWeDoItem1 = document.querySelector("#footerWeDoItem1");
        footerWeDoItem1.textContent = data[attribute].footerWeDoItem1;

        let footerWeDoItem2 = document.querySelector("#footerWeDoItem2");
        footerWeDoItem2.textContent = data[attribute].footerWeDoItem2;

        let footerWeDoItem3 = document.querySelector("#footerWeDoItem3");
        footerWeDoItem3.textContent = data[attribute].footerWeDoItem3;

        let footerWeDoItem4 = document.querySelector("#footerWeDoItem4");
        footerWeDoItem4.textContent = data[attribute].footerWeDoItem4;

        let footerWeDoItem5 = document.querySelector("#footerWeDoItem5");
        footerWeDoItem5.textContent = data[attribute].footerWeDoItem5;

        let footerWeDoItem6 = document.querySelector("#footerWeDoItem6");
        footerWeDoItem6.textContent = data[attribute].footerWeDoItem6;

        let footerWeDoItem7 = document.querySelector("#footerWeDoItem7");
        footerWeDoItem7.textContent = data[attribute].footerWeDoItem7;

        let footerWeDoItem8 = document.querySelector("#footerWeDoItem8");
        footerWeDoItem8.textContent = data[attribute].footerWeDoItem8;

    });
})









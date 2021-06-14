document.addEventListener("DOMContentLoaded", function(){
    var app = Vue.createApp({
        created(){
            fetch('./db/db.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.db = data;
                var i = 0;console.log(window.location.hash);
                while(window.location.hash != '' && i < data.card.length){
                    if(window.location.hash == '#' + data['card'][i]['card-url-id']){
                        this.path = 'content-page';
                        this.activeCardData = data['card'][i];
                    }
                    i++;
                }
                if(window.location.search == '?ss=on'){
                    this.ssSwitch = 'on';
                }
            }).catch(error => {
                console.log('There has been a problem with your fetch operation: ', error.message);
            })
        },
        data(){
            return {
                db : '',
                // fetch('./db/db.json', {
                //     headers : { 
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json'
                //     }
                // })
                // .then(response => {
                //     return response.json();
                // })
                // .then(data => {
                //     this.db = data;
                // }).catch(error => {
                //     console.log('There has been a problem with your fetch operation: ', error.message);
                // }),
                path : 'index',
                activeCardData : '',
                ssSwitch : 'off'
            }
        },
        methods: {
            toContentPage(cardData){
                this.activeCardData = cardData;
                this.path = 'content-page';
                window.location.hash = cardData['card-url-id'];
                if(window.location.search == '?ss=on'){
                    this.ssSwitch = 'on';
                }
            },
            toIndex(){
                this.path = 'index';
                window.location.hash = '';
            },
            screenshot(){
                html2canvas(document.getElementById('card-screenshot')).then(function(canvas) {
                    document.body.appendChild(canvas);
                    var a = document.createElement('a');
                    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                    a.download = 'image.jpg';
                    a.click();
                    canvas.style.display='none';
                });
            }
        }
    });

    app.component('card-post', {
        template: '#card-post',
        props: ['cardData'],
        data(){
            return {}
        }
    });

    app.mount('#app');

    //  由 html 製作 json
    // https://www.browserling.com/tools/remove-all-whitespace
    // var html = '<p>《神奈川沖浪裏》是日本浮世繪畫家葛飾北齋的著名木刻版畫，出版於1831年至1833年間，是冨嶽三十六景系列作品。該畫以富士山為背景，描繪了「神奈川沖」（即神奈川外海，現橫濱市神奈川區對出的海面上）的巨浪掀卷著漁船，船工們爲了生存而努力抗爭的圖像，是葛飾北齋的代表作，也是舉世聞名的日本藝術作品[3]。該作品出版時印製了數千幅，但現存於世的估計僅有數百幅，部分收藏於大英博物館、大都會藝術博物館、東京國立博物館等大型博物館。</p><br><p>作品構成本作品高25.7厘米，寬37.9厘米，是由大浪、3隻船以及背景富士山這三個要素構成的大畫幅橫繪畫作[4]。完成之後在畫面左上角署名補完。該畫在葛飾北齋近70歲時創作，鷹爪般的浪花與日本琳派大師尾形光琳的《波濤圖》一脈相承，又受到西方現實主義藝術的啟發，採用線性透視中低地平線的手法以營造強烈的空間感，在印刷時，描繪的海浪使用了當時歐洲流行的顏料「普魯士藍」，描繪船隻的黃色和描繪天空的粉紅色則為植物染料。富士山作為冨嶽三十六景主題的富士山被繪於畫面中央靠下的背景中。對於日本來說，富士山是神聖的國家的象徵[5]，也是美的象徵[6]。將本來雄偉的富士山畫得很小，和前景的巨浪形成了鮮明的對比[7]。地平線附近的暗色和仿佛被照亮的，被雪覆蓋的山頂，表達了現在是清晨，而太陽是從觀賞者這側升起的。上空的積雨雲讓人感覺現在應該有暴風雨，然而畫中卻並沒有下雨[8]。船畫面中描繪了3隻被巨浪翻弄的船。這些船是當時從房總半島到江戶城運送活魚的押送船[8]。船上有8名抱緊船槳的划船手，在船頭還能看到2名以上的乘客，畫面中大約有30人[8]。人們僵直在船中，和運動的浪形成對比[7]。浪畫面截取了大海波濤洶湧，風大浪高的瞬間。構圖中大浪的曲線描繪成弧形，令富士山成為這弧形的中心。浪尖飛散出的浪花四濺，仿佛降在富士山的雪[3]。最後面的船和浪高幾乎相等，押送船一般長約12到15米，北齋將垂直高度伸長了30%左右，因此推測浪高應在10到12米[8]。有人認為這個巨浪就是海嘯[9]。這個解釋最早可以追溯到1960年代。再之前的130年中，都認為是通常常見的大浪。因為北齋生活的年代中，關東、關西均沒有大的波浪發生過，因此有可能是聽說過1792年九州肥後迷惑情況後創作的。但是本作品中描繪的大浪並不是縮短波長的海嘯[8]。</p><br><p>署名畫面左上角的落款寫著畫的標題和署名。長方形的框裡寫著標題是「冨嶽三十六景／神奈川沖／浪裏」。它左邊寫著的署名是「北齋改爲一筆」，直接把「北齋」改號為「為一」（いいつ）。北齋在其生涯中改過30次號[3]。冨嶽三十六景中，除了「北齋改爲一筆」之外，他還用過「前北齋爲一筆」以及「北齋爲一筆」的署名[10]。</p><br><p>現存《神奈川沖浪裏》在出版時共拓印出了數千幅作品，據估計有五千至八千幅在當時以廉價出售，屬於人氣頗高的商業出版物[3]，在1842年，單張售價定為十六文，時值兩碗面的價錢，大部分作為紀念品售予到富士山遊覽的遊客和朝聖者，但由於戰爭、地震、火災和其他自然災害，時至今日，據估計只有數百幅存世，主要由大英博物館、大都會藝術博物館、芝加哥藝術博物館、洛杉磯郡藝術博物館、維多利亞國立美術館、皇家藝術與歷史博物館、法國國家圖書館、東京國立博物館等機構收藏，部分則由個人收藏家珍藏。該畫作在全球藝術品拍賣市場也是廣受歡迎的藏品[11]。由於沒有編號證實哪些是初版，故由保存狀態決定其價值，一級狀態仍保有原畫藍色輪廓，二級狀態則變成黑色輪廓。在2021年3月的佳士得紐約亞洲藝術周中，一幅《神奈川沖浪裏》以超最低估價10倍的159萬美元成交價售出[12]。</p><br><p>影響德彪西交響詩《海》於1905年發行時的總譜封面作為日本浮世繪經典之作，《神奈川沖浪裏》自面世而來激發了很多藝術家的創作靈感[13]。該作品在1870年代傳入歐洲後曾引起轟動[3]，法國印象派畫家莫內對其推崇備至，這幅作品至今仍收藏於他在吉維尼的故居。荷蘭後印象派畫家梵谷在寫給弟弟特奧的信中大力誇讚此作，在創作《星夜》曾參考這幅畫的構圖及色彩。法國作曲家德彪西在書房上長掛該作，受其影響創作出交響詩《大海》（LaMer），並請雅克·杜朗以其為摹本作為首版樂譜封面。2024年新版的一千日圓紙幣背面圖案20世紀以來，《神奈川沖浪裏》「GreatWave」（巨浪）之名在全球流傳，因其在國際上的知名度，被廣泛應用在各類日常物品、商業廣告及流行文化當中[3]，是世界上被再創作次數最多的畫之一。作為代表日本的象徵性文化符號，《神奈川沖浪裏》被選為日本銀行於2024年發行的新版一千日圓紙幣背面圖案[14][15]。</p><br><divclass="source-wrapper"><spanclass="source">參考文獻：</span><ahref="https://zh.wikipedia.org/wiki/%E7%A5%9E%E5%A5%88%E5%B7%9D%E6%B2%96%E6%B5%AA%E8%A3%8F"class="source-link"target="_blank">神奈川沖浪裏</a></div>';
    // var cardHTML = {
    //     "html" : html
    // };
    // var json = JSON.stringify(cardHTML);
    // // $('.grid-content').text(json);
});
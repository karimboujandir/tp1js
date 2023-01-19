function createDom(element_name,text,parent){
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup
}

let i = 0;
function number(){
    return i
}

let navBar = createDom('nav','navbar:',document.body);
let div1 = createDom('div','',document.body);
let create = createDom('button','Créer',div1);
div1.setAttribute("id", 'diva');

let un;
let deux;
let form;
let titre1;
let titre2;
let text1;
let text2;
let ok;
let noOk;

create.onclick = function() {
    console.log(un)
    if (un == undefined || un.value == 'undefined'){
        un = createDom('div',' ',div1);
        un.setAttribute("id", 'divb');

        form = createDom('form','',un);
        let trois = createDom('div',' ',form);

        titre1 = createDom('label','Titre : ',trois);
        titre2 = createDom('input','',trois);
        let quatre = createDom('div',' ',form);

        text1 = createDom('label','Texte : ',quatre);
        createDom('br',' ',quatre)
        text2 = createDom('textarea','',quatre);
        text2.setAttribute("id", 'inputtxt');
    
        ok = createDom('button','Valider',un);

        ok.onclick = function(){
            un.remove();
            un.value = 'undefined';
            i++;

            let divall = createDom ('div','',document.body);
            divall.setAttribute("class", 'articles');

            let a = createDom('h2',titre2.value,divall);
            a.setAttribute("class", 'a'+number());
            a.setAttribute("id", number());

            let b = createDom('p',text2.value,divall);
            b.setAttribute("class", 'a'+number());
            createDom('div','',navBar);

            let c = createDom('a',titre2.value,navBar);
            c.setAttribute("href", '#'+number());
            c.setAttribute("class",  'a'+number());

            noOk = createDom('button','Retirer',divall);
            noOk.setAttribute("class", 'a'+number());
            noOk.setAttribute("class", 'lessup');

            noOk.addEventListener("click", function (){
                divall.remove();
                c.remove();
            })
        }
    }
}

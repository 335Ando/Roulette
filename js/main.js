'use strict';
{
    const names = [];  //Arrayオブジェクトnamesの初期化
    // フォーム
    document.getElementById('input').addEventListener('click', () => {
        const li = document.createElement('li');
        const text = document.querySelector('input');
        if(text.value != "") {
        li.textContent = text.value;
        document.querySelector('ul').appendChild(li);
        console.log(li);
        names.push(text.value);
        console.log(names);
        text.value = '';
        text.focus();
        }
    });

    const rourette = document.getElementById('rourette');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    const lottery = document.getElementById('lottery');
    let timeoutId = undefined;

    //抽選
    function spin() {
        lottery.textContent = names[Math.floor(Math.random() * names.length)];
        timeoutId = setTimeout(() => {
            spin();
        }, 50);
    }

    start.addEventListener('click', () => {
        if (start.classList.contains('inactive')) {
            return;
        }
        spin();
        start.classList.add('inactive');
        stop.classList.remove('inactive');
    });

    stop.classList.add('inactive');

    stop.addEventListener('click', () => {
        if (stop.classList.contains('inactive')) {
            return;
        }
        clearTimeout(timeoutId);
        start.classList.remove('inactive');
        stop.classList.add('inactive');
    });

    //ここ悩んでます。ヘルプミー！
    reset.addEventListener('click', () => {
        
    });

    //入力した名前の削除
    
}


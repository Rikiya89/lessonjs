'use strict';

{
    // 商品リストのデータと見出しのラベルデータ
    const labels = ['title', 'price', 'stock'];
    const items = [
        { title: 'HTML入門', price: 1800, stock: 7 },
        { title: 'CSS入門', price: 2380, stock: 4 },
        { title: 'Javascript入門', price: 2500, stock: 3 },
        { title: 'Figma入門', price: 3400, stock: 6 },
        { title: 'AdobeXD入門', price: 3300, stock: 5 },
        { title: 'Photoshop入門', price: 2900, stock: 2 },
        { title: 'Illustrator入門', price: 2800, stock: 7 },
        // 必要なデータ(オブジェクトを追加)
    ];

    const mainTable = document.querySelector('.mainTable');
    // for文かforEachをつかってデータを取り出す。
    // ※for文の中でforを回す,forEachの中でforEachを回す

    // itemの数だけtrを作り、.rowを追加
    items.forEach(function (item) {
        const tr = document.createElement('tr');
        tr.classList.add('row');


        // labelの数だけtdを作り、class名を'title', 'price', 'stock'と付ける
        labels.forEach(function (label) {
            const td = document.createElement('td');
            td.classList.add(label);
            //各itemのデータをlabel名で頭から取り出し、テキストに入れる
            td.textContent = item[label];
            //作り出したtrにtdを配置
            tr.appendChild(td);
            //mainTableにtrを配置
            mainTable.appendChild(tr);
        });

        console.log(tr);

    });






}
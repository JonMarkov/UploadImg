$(document).ready(function () {
    var add_one = "<div class='add_app'>" +
        "<div class='sel_btn'>" +
        "<select>" +
        "<option value ='第一选项'>1</option>" +
        "<option value ='第二选项'>2</option>" +
        "<option value ='第三选项'>3</option>" +
        "</select>" +
        "<button class='rovme_zong'>删除</button>" +
        "</div>" +
        "<div class='picture'>" +
        "<div class='picture_add_cl'>" +
        "<img src='detle.png' >" +
        "</div>" +
        // "<div class='picture_add'>" +
        // "<img src='detle.png'>" +
        // "<button class='rovme'>删除</button>" +
        // "</div>" +
        // "</div>" +
        "</div>";
    var add_two = "<div class='picture_add'>" +
        "<img src='detle.png'>" +
        "<button class='rovme'>删除</button>" +
        "</div>";
// 点击添加按钮
    $("#app_div").click(function () {
        // 再全文下增加大项
        $("#app").append(add_one)
        // 获取将要操作的所有class -增加图片
        var add = document.getElementsByClassName("picture_add_cl")
        // 循环得到操作的class节点
        for (var i = 0; i < add.length; i++) {
            // 循环每一项，获得索引
            add[i].index = i;
            // 点击操作的指定项（增加一项图片）
            add[i].onclick = function () {
                // 获得当前所引
                var indexMa = this.index
                // 获取当前操作的div（class）
                var parent = document.getElementsByClassName("picture")[indexMa];
                // 添加到当前操作项的最后
                $(parent).append(add_two)
                // 获取将要操作的所有class -删除图片
                var romev = document.getElementsByClassName("rovme")
                romeM(romev)
            }
        }
    });

    function romeM(romev) {
        // 循环每一项，获得索引
        for (var i = 0; i < romev.length; i++) {
            // 获得当前所引
            romev[i].index = i;
            // 点击操作的指定项（删除一项图片）
            romev[i].onclick = function () {
                // 获得当前所引
                var indexMa = this.index
                console.log(indexMa)
                // 获取当前操作的div（class）
                var parent = document.getElementsByClassName("picture_add")[indexMa];
                // 删除当前操作项
                $(parent).remove();
                var roMc = document.getElementsByClassName("rovme")
                console.log(roMc)
                romeM(roMc)
            }
        }
    }
});




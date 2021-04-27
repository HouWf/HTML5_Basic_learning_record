

// 拖动内容
function imgStartDrage(e){
    // 置被拖数据的数据类型和值
    e.dataTransfer.setData('Text', e.target.id);
}

// 放到什么位置
function imgDragoverItem(e){
    // 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
    e.preventDefault();
}

// 进行放置
function imgDropOnItem(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData('Text');
    ev.target.appendChild(document.getElementById(data));
}


// 获取经纬度
// (function(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(locationSuccess, locationFailure);
//     }
//     else{
//         console.log('定位不可用');
//     }
    
// })();

// 百度地图获取经纬度
// (function(){
//     // 创建百度地理位置实例，代替 navigator.geolocation
//     var geolocation = new BMap.Geolocation();
//     geolocation.getCurrentPosition();
//     geolocation.getCurrentPosition(function(e) {
//         if(this.getStatus() == BMAP_STATUS_SUCCESS){
//             // 百度 geolocation 的经纬度属性不同，此处是 point.lat 而不是 coords.latitude
//             var result = '纬度：' + e.point.lat + '<br/>经度：' + e.point.lng;
//             console.log(result);
//         } else {
//             var failed = 'failed' + this.getStatus();
//             console.log(failed);
//         }
//     });
// })();

function locationSuccess(re){
    console.log('location success' + JSON.stringify(re));
}

function locationFailure(er){
    console.log('location error' + JSON.stringify(er));
}
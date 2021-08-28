var btnColor = document.getElementById('changeBackGroundColor')
var color = ["#90EE90", "#8A2BE2", "#A52A2A", "#FFB6C1", "#D2691E", "#006400", "#B22222", "#000080", "#FFA500", "#663399", "#FF0000", "#4682B4", "#9ACD32"]


btnColor.addEventListener("click", () => {
    var item = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = item;
})
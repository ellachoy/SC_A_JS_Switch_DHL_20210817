console.log("test")


/* <b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm
// 0
<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm
// 1
<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm
// 2
<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm
// 3
"<b>Extra große Größe</b> */


function showtxt() {
    let list = document.getElementById("mylist").value
    console.log(list)

    switch (list) {
        case ("0"):
            document.getElementById("masse").innerHTML = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm"
            break;
        case ("1"):
            document.getElementById("masse").innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm"
            break;
        case ("2"):
            document.getElementById("masse").innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm"
            break;
        case ("3"):
            document.getElementById("masse").innerHTML = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm"
            break;
        default:
            document.getElementById("masse").innerHTML = "<b>Extra große Größe</b>"
            break;
    }
}
const mainicon = () => {

    let myicon = document.getElementById('myicon');

    myicon.innerHTML = "&#xf2cb";
    myicon.style.color = "#f3f31e";
    setTimeout(() => {
        myicon.innerHTML = "&#xf2ca";
    }, 1000)
    setTimeout(() => {
        myicon.innerHTML = "&#xf2c9";
    }, 2000)
    setTimeout(() => {
        myicon.innerHTML = "&#xf2c8";
        myicon.style.color = "red";
    }, 3000)
    setTimeout(() => {
        myicon.innerHTML = "&#xf2c7";
        myicon.style.color = "red";
    }, 4000)

}
mainicon();
setInterval(mainicon, 5000);

const convertNum = () => {
    const selectednum = document.getElementById('headnum').value;
    const selectedtemp = document.getElementById("diff");
    const tempvalue = selectedtemp.options[selectedtemp.selectedIndex].value;

    const Celtofah = (cel) => {
        let Fahrenheit = Math.round((cel * 9 / 5) + 32);
        return Fahrenheit;
    }

    const fahtocel = (fah) => {
        let celcius = Math.round((fah - 32) * 5 / 9);
        return celcius;
    }

    let result;
    if (tempvalue == 'cel') {
        result = Celtofah(selectednum);
        document.getElementById('endresult').innerHTML = `=${result}°Fahrenheit`;
    } else {
        result = fahtocel(selectednum);
        document.getElementById('endresult').innerHTML = `=${result}°Celcius`;
    }
}




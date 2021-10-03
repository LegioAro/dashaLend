window.onload = function () {
    var date = new Date();
    var minutes = 7;
    date.setMinutes(date.getMinutes() + minutes);
    console.log(date)

    function count() {
        let newDate = new Date();
        let msDate = date - newDate;
        let min = Math.floor(msDate / 1000 / 60) % 60;
        let sec = Math.floor(msDate / 1000) % 60;
        let msec = Math.floor(msDate) % 100;
        let minItem = document.getElementById('present__timer-min');
        let secItem = document.getElementById('present__timer-sec');
        let milsecItem = document.getElementById('present__timer-minsec');

        if (msDate < 0) {
            clearInterval(count);
            minItem.innerText = "00";
            document.getElementById('present__timer-min1').innerText = "00";

            secItem.innerText = "00";
            document.getElementById('present__timer-sec1').innerText = "00";

            milsecItem.innerText = "00";
            document.getElementById('present__timer-minsec1').innerText = "00";

        } else {
            minItem.innerText = "0" + min;
            document.getElementById('present__timer-min1').innerText = "0" + min;
            secItem.innerText = sec;
            document.getElementById('present__timer-sec1').innerText = sec;
            milsecItem.innerText = msec;
            document.getElementById('present__timer-minsec1').innerText = msec;
        }

        let a = String(minItem.innerText).split('');
        let a1 = String(document.getElementById('present__timer-min1').innerText).split('');
        let b = String(secItem.innerText).split('');
        let b1 = String(document.getElementById('present__timer-sec1').innerText).split('');
        let c = String(milsecItem.innerText).split('');
        let c1 = String(document.getElementById('present__timer-minsec1').innerText).split('');
        if (a.length < 2) {
            minItem.innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + a[0] + '</div>';
        } else {
            minItem.innerHTML = '<div class="present__timer-item">' + a[0] + '</div>' + '<div class="present__timer-item">' + a[1] + '</div>';
        }
        if (a1.length < 2) {
            document.getElementById('present__timer-min1').innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + a1[0] + '</div>';
        } else {
            document.getElementById('present__timer-min1').innerHTML = '<div class="present__timer-item">' + a1[0] + '</div>' + '<div class="present__timer-item">' + a1[1] + '</div>';
        }


        if (b.length < 2) {
            secItem.innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + b[0] + '</div>';
        } else {
            secItem.innerHTML = '<div class="present__timer-item">' + b[0] + '</div>' + '<div class="present__timer-item">' + b[1] + '</div>';
        }
        if (b1.length < 2) {
            document.getElementById('present__timer-sec1').innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + b1[0] + '</div>';
        } else {
            document.getElementById('present__timer-sec1').innerHTML = '<div class="present__timer-item">' + b1[0] + '</div>' + '<div class="present__timer-item">' + b1[1] + '</div>';
        }


        if (c.length < 2) {
            milsecItem.innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + c[0] + '</div>';
        } else {
            milsecItem.innerHTML = '<div class="present__timer-item">' + c[0] + '</div>' + '<div class="present__timer-item">' + c[1] + '</div>';
        }
        if (c1.length < 2) {
            document.getElementById('present__timer-minsec1').innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + c1[0] + '</div>';
        } else {
            document.getElementById('present__timer-minsec1').innerHTML = '<div class="present__timer-item">' + c1[0] + '</div>' + '<div class="present__timer-item">' + c1[1] + '</div>';
        }

    }
    setInterval(count, 10);
}
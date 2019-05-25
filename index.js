let num = 0;
let digit = 0;
let N = 0;
let howcal = 0;
let prianswer = 0;
let answer = 0;
let calculate_flag = 0;
let decimal_flag = 0;
let decimal_digit = 1;

function calculate(num) {
    if(howcal === 5) {
        digit = answer;
        howcal = 0;
        calculate_flag = 1;
    }
    // =の処理をした後にそのanswerに数字を入力する！

    if(calculate_flag === 0) {
        document.getElementById("num_display").textContent = "";
        decimal_flag = 0;
        decimal_digit = 1;
    }
    // 演算子入力後に一度displayを表示上クリアする！
    if(decimal_flag === 0) {
        N = digit * 10 + num;
        digit = N;
    } else {
        decimal_digit *= 10;
        N = digit + num / decimal_digit;
        digit = N;
    }
    // displayに表示する入力した値の計算をする！    

    document.getElementById("num_display").textContent = N;
    // displayに入力した値を表示する！
    
    calculate_flag = 1;
    // displayのリセットが行われない！

    if(String(N).length > 12) {
        document.getElementById("num_display").textContent = "Error!";
        digit = 0;
        calculate_flag = 0;
        decimal_flag = 0;
        decimal_digit = 1;
        // 15桁より大きいとエラーと表示し関数を動かさない！
    }
}

function howcalculate(num) {
    if(calculate_flag == 1) {
        if(howcal === 0) {
            answer = N;
            howcal = num;
            // howcal == 0の時には演算子入力しても計算してはいけない！
        } else if(howcal === 1) {
            answer = prianswer + N;
        } else if(howcal === 2) {
            answer = prianswer - N;
        } else if(howcal === 3) {
            answer = prianswer * N;
        } else if(howcal === 4) {
            answer = prianswer / N;
        } else if(howcal === 5) {
            ;
            // howcal == 5の時には演算子入力しても計算してはいけない！
        }
        // displayに表示するanswerの計算をする！
        document.getElementById("num_display").textContent = Math.round(answer * 100000000000) / 100000000000;
        // displayにanswerを表示する！

        prianswer = answer;
        // 次の計算に使うanswerを保存する！

        digit = 0;
        // displayに表示する入力した値をリセットする！

        if(Math.round(answer) === answer) {
            decimal_flag = 0;
        // 計算結果が整数か判定する！
        } else {
            for(let cnt = 1; cnt < 11; cnt++) {
                if(Math.round(answer) * (10 ** cnt) === answer * (10 ** cnt)) {
                    decimal_digit = 10 ** cnt;
                    break;
                }
            }
        }
    }
    calculate_flag = 0;
    // 演算子入力後に演算子を入力してもhowcalが変化するだけで計算は行われない！ 

    howcal = num;
    // 次の計算の方法を保存する！

    howcal_display_change()
    // displayに次の計算の方法を表示する！
}

function howcal_display_change() {
    if(howcal === 1) {
        document.getElementById("howcal_display").textContent = "+";
    } else if(howcal === 2) {
        document.getElementById("howcal_display").textContent = "-";
    } else if(howcal === 3) {
        document.getElementById("howcal_display").textContent = "×";
    } else if(howcal === 4) {
        document.getElementById("howcal_display").textContent = "÷";
    } else if(howcal === 0) {
        document.getElementById("howcal_display").textContent = "";
    } else if(howcal === 5) {
        document.getElementById("howcal_display").textContent = "";
    }
}

function display_clear() {
    N = 0;
    digit = 0;
    calculate_flag = 0;
    document.getElementById("num_display").textContent = 0;
    decimal_digit = 1;
    decimal_flag = 0;
    if(howcal === 5) {
        howcal = 0;
    }
    // =の処理をした後に特別な処理をしないようにする！
}

function display_allclear() {
    num = 0;
    digit = 0;
    N = 0;
    howcal = 0;
    num = 0;
    prianswer = 0;
    answer = 0;
    calculate_flag = 0;
    decimal_flag = 0;
    decimal_digit = 1;
    document.getElementById("num_display").textContent = 0;
}

function decimal_flag_change() {
    if(decimal_flag === 0) {
        calculate_flag = 1;
        decimal_flag = 1;
        document.getElementById("num_display").textContent += ".";
    }
}
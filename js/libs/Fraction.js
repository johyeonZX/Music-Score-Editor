function Fraction(numerator, denominator) {
    //分数类
    this.n = numerator;     //分子
    this.d = denominator;   //分母
}

function fra_add(a, b) {
    //加法
    if (a.n == 0)
        return b;
    else if (b.n == 0)
        return a;
    var x = lcm(a.d, b.d);
    var y = a.n * (x / a.d) + b.n * (x / b.d);
    var g = gcd(x, y);
    return new Fraction(y / g, x / g);
}

function fra_mul(a, b) {
    //乘法
    var x = a.n * b.n;
    var y = a.d * b.d;
    if (x == 0)
        return new Fraction(0, 1);
    var g = gcd(x, y);
    return new Fraction(x / g, y / g);
}

function fra_div(a, b) {
    //除法
    var one = new Fraction(1, 1);
    return fra_mul(one, new Fraction(a.n * b.d, a.d * b.n));
}

function fra_bigger(a, b) {
    //比大小
    let af = parseFloat(a.n / a.d);
    let bf = parseFloat(b.n / b.d);
    // return af > bf ? af : bf;
    return af > bf ? true : false;
}

function lcm(a, b) {
    //最小公倍数
    if (a < b) {
        var temp = a;
        a = b;
        b = temp;
    }
    for (var i = 1; i <= b; i++) {
        if ((a * i) % b == 0) {
            return a * i;
        }
    }
}

function gcd(a, b) {
    //最大公约数,用于化简
    if (a < b) {
        var temp = a;
        a = b;
        b = temp;
    }
    return (a % b ? gcd(a % b, b) : b);
}